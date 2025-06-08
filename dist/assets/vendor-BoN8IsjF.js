import {
  R as Pi,
  r as I,
  j as tr,
  c as Ks,
  a as Gh,
  g as xg,
} from "./react-vendor-Bh7OZNZy.js";
const MyContext = Pi.createContext();
var We = function () {
  return (
    (We =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    We.apply(this, arguments)
  );
};
function Lo(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Vt = "-ms-",
  os = "-moz-",
  wt = "-webkit-",
  Xh = "comm",
  ia = "rule",
  il = "decl",
  bg = "@import",
  Hh = "@keyframes",
  Tg = "@layer",
  qh = Math.abs,
  sl = String.fromCharCode,
  ou = Object.assign;
function wg(e, t) {
  return he(e, 0) ^ 45
    ? (((((((t << 2) ^ he(e, 0)) << 2) ^ he(e, 1)) << 2) ^ he(e, 2)) << 2) ^
    he(e, 3)
    : 0;
}
function Kh(e) {
  return e.trim();
}
function qn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ot(e, t, n) {
  return e.replace(t, n);
}
function vo(e, t, n) {
  return e.indexOf(t, n);
}
function he(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ci(e, t, n) {
  return e.slice(t, n);
}
function In(e) {
  return e.length;
}
function Zh(e) {
  return e.length;
}
function Ki(e, t) {
  return t.push(e), e;
}
function Sg(e, t) {
  return e.map(t).join("");
}
function _c(e, t) {
  return e.filter(function (n) {
    return !qn(n, t);
  });
}
var sa = 1,
  Ai = 1,
  Qh = 0,
  Tn = 0,
  re = 0,
  ji = "";
function oa(e, t, n, r, i, s, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: s,
    line: sa,
    column: Ai,
    length: o,
    return: "",
    siblings: a,
  };
}
function lr(e, t) {
  return ou(
    oa("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function ii(e) {
  for (; e.root;) e = lr(e.root, { children: [e] });
  Ki(e, e.siblings);
}
function Pg() {
  return re;
}
function Cg() {
  return (
    (re = Tn > 0 ? he(ji, --Tn) : 0), Ai--, re === 10 && ((Ai = 1), sa--), re
  );
}
function Mn() {
  return (
    (re = Tn < Qh ? he(ji, Tn++) : 0), Ai++, re === 10 && ((Ai = 1), sa++), re
  );
}
function $r() {
  return he(ji, Tn);
}
function xo() {
  return Tn;
}
function aa(e, t) {
  return Ci(ji, e, t);
}
function au(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ag(e) {
  return (sa = Ai = 1), (Qh = In((ji = e))), (Tn = 0), [];
}
function Eg(e) {
  return (ji = ""), e;
}
function va(e) {
  return Kh(aa(Tn - 1, uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Mg(e) {
  for (; (re = $r()) && re < 33;) Mn();
  return au(e) > 2 || au(re) > 3 ? "" : " ";
}
function Rg(e, t) {
  for (
    ;
    --t &&
    Mn() &&
    !(re < 48 || re > 102 || (re > 57 && re < 65) || (re > 70 && re < 97));

  );
  return aa(e, xo() + (t < 6 && $r() == 32 && Mn() == 32));
}
function uu(e) {
  for (; Mn();)
    switch (re) {
      case e:
        return Tn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uu(re);
        break;
      case 40:
        e === 41 && uu(e);
        break;
      case 92:
        Mn();
        break;
    }
  return Tn;
}
function kg(e, t) {
  for (; Mn() && e + re !== 57;) if (e + re === 84 && $r() === 47) break;
  return "/*" + aa(t, Tn - 1) + "*" + sl(e === 47 ? e : Mn());
}
function Dg(e) {
  for (; !au($r());) Mn();
  return aa(e, Tn);
}
function Og(e) {
  return Eg(bo("", null, null, null, [""], (e = Ag(e)), 0, [0], e));
}
function bo(e, t, n, r, i, s, o, a, u) {
  for (
    var l = 0,
    c = 0,
    f = o,
    h = 0,
    d = 0,
    m = 0,
    p = 1,
    g = 1,
    _ = 1,
    w = 0,
    x = "",
    b = i,
    T = s,
    y = r,
    v = x;
    g;

  )
    switch (((m = w), (w = Mn()))) {
      case 40:
        if (m != 108 && he(v, f - 1) == 58) {
          vo((v += ot(va(w), "&", "&\f")), "&\f", qh(l ? a[l - 1] : 0)) != -1 &&
            (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += va(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += Mg(m);
        break;
      case 92:
        v += Rg(xo() - 1, 7);
        continue;
      case 47:
        switch ($r()) {
          case 42:
          case 47:
            Ki(Vg(kg(Mn(), xo()), t, n, u), u);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * p:
        a[l++] = In(v) * _;
      case 125 * p:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            g = 0;
          case 59 + c:
            _ == -1 && (v = ot(v, /\f/g, "")),
              d > 0 &&
              In(v) - f &&
              Ki(
                d > 32
                  ? xc(v + ";", r, n, f - 1, u)
                  : xc(ot(v, " ", "") + ";", r, n, f - 2, u),
                u
              );
            break;
          case 59:
            v += ";";
          default:
            if (
              (Ki(
                (y = vc(v, t, n, l, c, i, a, x, (b = []), (T = []), f, s)),
                s
              ),
                w === 123)
            )
              if (c === 0) bo(v, t, y, y, b, s, f, a, T);
              else
                switch (h === 99 && he(v, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bo(
                      e,
                      y,
                      y,
                      r && Ki(vc(e, y, y, 0, 0, i, a, x, i, (b = []), f, T), T),
                      i,
                      T,
                      f,
                      a,
                      r ? b : T
                    );
                    break;
                  default:
                    bo(v, y, y, y, [""], T, 0, a, T);
                }
        }
        (l = c = d = 0), (p = _ = 1), (x = v = ""), (f = o);
        break;
      case 58:
        (f = 1 + In(v)), (d = m);
      default:
        if (p < 1) {
          if (w == 123) --p;
          else if (w == 125 && p++ == 0 && Cg() == 125) continue;
        }
        switch (((v += sl(w)), w * p)) {
          case 38:
            _ = c > 0 ? 1 : ((v += "\f"), -1);
            break;
          case 44:
            (a[l++] = (In(v) - 1) * _), (_ = 1);
            break;
          case 64:
            $r() === 45 && (v += va(Mn())),
              (h = $r()),
              (c = f = In((x = v += Dg(xo())))),
              w++;
            break;
          case 45:
            m === 45 && In(v) == 2 && (p = 0);
        }
    }
  return s;
}
function vc(e, t, n, r, i, s, o, a, u, l, c, f) {
  for (
    var h = i - 1, d = i === 0 ? s : [""], m = Zh(d), p = 0, g = 0, _ = 0;
    p < r;
    ++p
  )
    for (var w = 0, x = Ci(e, h + 1, (h = qh((g = o[p])))), b = e; w < m; ++w)
      (b = Kh(g > 0 ? d[w] + " " + x : ot(x, /&\f/g, d[w]))) && (u[_++] = b);
  return oa(e, t, n, i === 0 ? ia : a, u, l, c, f);
}
function Vg(e, t, n, r) {
  return oa(e, t, n, Xh, sl(Pg()), Ci(e, 2, -2), 0, r);
}
function xc(e, t, n, r, i) {
  return oa(e, t, n, il, Ci(e, 0, r), Ci(e, r + 1, -1), r, i);
}
function Jh(e, t, n) {
  switch (wg(e, t)) {
    case 5103:
      return wt + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return wt + e + e;
    case 4789:
      return os + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return wt + e + os + e + Vt + e + e;
    case 5936:
      switch (he(e, t + 11)) {
        case 114:
          return wt + e + Vt + ot(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return wt + e + Vt + ot(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return wt + e + Vt + ot(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return wt + e + Vt + e + e;
    case 6165:
      return wt + e + Vt + "flex-" + e + e;
    case 5187:
      return (
        wt + e + ot(e, /(\w+).+(:[^]+)/, wt + "box-$1$2" + Vt + "flex-$1$2") + e
      );
    case 5443:
      return (
        wt +
        e +
        Vt +
        "flex-item-" +
        ot(e, /flex-|-self/g, "") +
        (qn(e, /flex-|baseline/)
          ? ""
          : Vt + "grid-row-" + ot(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        wt +
        e +
        Vt +
        "flex-line-pack" +
        ot(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return wt + e + Vt + ot(e, "shrink", "negative") + e;
    case 5292:
      return wt + e + Vt + ot(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        wt +
        "box-" +
        ot(e, "-grow", "") +
        wt +
        e +
        Vt +
        ot(e, "grow", "positive") +
        e
      );
    case 4554:
      return wt + ot(e, /([^-])(transform)/g, "$1" + wt + "$2") + e;
    case 6187:
      return (
        ot(
          ot(ot(e, /(zoom-|grab)/, wt + "$1"), /(image-set)/, wt + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ot(e, /(image-set\([^]*)/, wt + "$1$`$1");
    case 4968:
      return (
        ot(
          ot(e, /(.+:)(flex-)?(.*)/, wt + "box-pack:$3" + Vt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        wt +
        e +
        e
      );
    case 4200:
      if (!qn(e, /flex-|baseline/))
        return Vt + "grid-column-align" + Ci(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Vt + ot(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), qn(r.props, /grid-\w+-end/);
        })
        ? ~vo(e + (n = n[t].value), "span", 0)
          ? e
          : Vt +
          ot(e, "-start", "") +
          e +
          Vt +
          "grid-row-span:" +
          (~vo(n, "span", 0) ? qn(n, /\d+/) : +qn(n, /\d+/) - +qn(e, /\d+/)) +
          ";"
        : Vt + ot(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return qn(r.props, /grid-\w+-start/);
        })
        ? e
        : Vt + ot(ot(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ot(e, /(.+)-inline(.+)/, wt + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (In(e) - 1 - t > 6)
        switch (he(e, t + 1)) {
          case 109:
            if (he(e, t + 4) !== 45) break;
          case 102:
            return (
              ot(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                wt +
                "$2-$3$1" +
                os +
                (he(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~vo(e, "stretch", 0)
              ? Jh(ot(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return ot(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, s, o, a, u, l) {
          return (
            Vt +
            i +
            ":" +
            s +
            l +
            (o ? Vt + i + "-span:" + (a ? u : +u - +s) + l : "") +
            e
          );
        }
      );
    case 4949:
      if (he(e, t + 6) === 121) return ot(e, ":", ":" + wt) + e;
      break;
    case 6444:
      switch (he(e, he(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            ot(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
              wt +
              (he(e, 14) === 45 ? "inline-" : "") +
              "box$3$1" +
              wt +
              "$2$3$1" +
              Vt +
              "$2box$3"
            ) + e
          );
        case 100:
          return ot(e, ":", ":" + Vt) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ot(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Bo(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Fg(e, t, n, r) {
  switch (e.type) {
    case Tg:
      if (e.children.length) break;
    case bg:
    case il:
      return (e.return = e.return || e.value);
    case Xh:
      return "";
    case Hh:
      return (e.return = e.value + "{" + Bo(e.children, r) + "}");
    case ia:
      if (!In((e.value = e.props.join(",")))) return "";
  }
  return In((n = Bo(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Ig(e) {
  var t = Zh(e);
  return function (n, r, i, s) {
    for (var o = "", a = 0; a < t; a++) o += e[a](n, r, i, s) || "";
    return o;
  };
}
function Lg(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Bg(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case il:
        e.return = Jh(e.value, e.length, n);
        return;
      case Hh:
        return Bo([lr(e, { value: ot(e.value, "@", "@" + wt) })], r);
      case ia:
        if (e.length)
          return Sg((n = e.props), function (i) {
            switch (qn(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                ii(lr(e, { props: [ot(i, /:(read-\w+)/, ":" + os + "$1")] })),
                  ii(lr(e, { props: [i] })),
                  ou(e, { props: _c(n, r) });
                break;
              case "::placeholder":
                ii(
                  lr(e, { props: [ot(i, /:(plac\w+)/, ":" + wt + "input-$1")] })
                ),
                  ii(lr(e, { props: [ot(i, /:(plac\w+)/, ":" + os + "$1")] })),
                  ii(lr(e, { props: [ot(i, /:(plac\w+)/, Vt + "input-$1")] })),
                  ii(lr(e, { props: [i] })),
                  ou(e, { props: _c(n, r) });
                break;
            }
            return "";
          });
    }
}
var Ng = {
  animationIterationCount: 1,
  aspectRatio: 1,
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
  strokeWidth: 1,
},
  tn = {},
  Ei =
    (typeof process < "u" &&
      tn !== void 0 &&
      (tn.REACT_APP_SC_ATTR || tn.SC_ATTR)) ||
    "data-styled",
  td = "active",
  ed = "data-styled-version",
  ua = "6.1.18",
  ol = `/*!sc*/
`,
  No = typeof window < "u" && typeof document < "u",
  jg = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      tn !== void 0 &&
      tn.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      tn.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? tn.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      tn.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
      tn !== void 0 &&
      tn.SC_DISABLE_SPEEDY !== void 0 &&
      tn.SC_DISABLE_SPEEDY !== "" &&
      tn.SC_DISABLE_SPEEDY !== "false" &&
      tn.SC_DISABLE_SPEEDY),
  la = Object.freeze([]),
  Mi = Object.freeze({});
function zg(e, t, n) {
  return (
    n === void 0 && (n = Mi), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var nd = new Set([
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "u",
  "ul",
  "use",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan",
]),
  $g = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Ug = /(^-|-$)/g;
function bc(e) {
  return e.replace($g, "-").replace(Ug, "");
}
var Wg = /(a)(d)/gi,
  Zs = 52,
  Tc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function lu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > Zs; t = (t / Zs) | 0) n = Tc(t % Zs) + n;
  return (Tc(t % Zs) + n).replace(Wg, "$1-$2");
}
var xa,
  rd = 5381,
  ci = function (e, t) {
    for (var n = t.length; n;) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  id = function (e) {
    return ci(rd, e);
  };
function Yg(e) {
  return lu(id(e) >>> 0);
}
function Gg(e) {
  return e.displayName || e.name || "Component";
}
function ba(e) {
  return typeof e == "string" && !0;
}
var sd = typeof Symbol == "function" && Symbol.for,
  od = sd ? Symbol.for("react.memo") : 60115,
  Xg = sd ? Symbol.for("react.forward_ref") : 60112,
  Hg = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  qg = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ad = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Kg =
    (((xa = {})[Xg] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
      (xa[od] = ad),
      xa);
function wc(e) {
  return ("type" in (t = e) && t.type.$$typeof) === od
    ? ad
    : "$$typeof" in e
      ? Kg[e.$$typeof]
      : Hg;
  var t;
}
var Zg = Object.defineProperty,
  Qg = Object.getOwnPropertyNames,
  Sc = Object.getOwnPropertySymbols,
  Jg = Object.getOwnPropertyDescriptor,
  t0 = Object.getPrototypeOf,
  Pc = Object.prototype;
function ud(e, t, n) {
  if (typeof t != "string") {
    if (Pc) {
      var r = t0(t);
      r && r !== Pc && ud(e, r, n);
    }
    var i = Qg(t);
    Sc && (i = i.concat(Sc(t)));
    for (var s = wc(e), o = wc(t), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!(u in qg || (n && n[u]) || (o && u in o) || (s && u in s))) {
        var l = Jg(t, u);
        try {
          Zg(e, u, l);
        } catch { }
      }
    }
  }
  return e;
}
function Ri(e) {
  return typeof e == "function";
}
function al(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Lr(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Cc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Ss(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function cu(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Ss(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = cu(e[r], t[r]);
  else if (Ss(t)) for (var r in t) e[r] = cu(e[r], t[r]);
  return e;
}
function ul(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function $s(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var e0 = (function () {
  function e(t) {
    (this.groupSizes = new Uint32Array(512)),
      (this.length = 512),
      (this.tag = t);
  }
  return (
    (e.prototype.indexOfGroup = function (t) {
      for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
      return n;
    }),
    (e.prototype.insertRules = function (t, n) {
      if (t >= this.groupSizes.length) {
        for (var r = this.groupSizes, i = r.length, s = i; t >= s;)
          if ((s <<= 1) < 0) throw $s(16, "".concat(t));
        (this.groupSizes = new Uint32Array(s)),
          this.groupSizes.set(r),
          (this.length = s);
        for (var o = i; o < s; o++) this.groupSizes[o] = 0;
      }
      for (
        var a = this.indexOfGroup(t + 1), u = ((o = 0), n.length);
        o < u;
        o++
      )
        this.tag.insertRule(a, n[o]) && (this.groupSizes[t]++, a++);
    }),
    (e.prototype.clearGroup = function (t) {
      if (t < this.length) {
        var n = this.groupSizes[t],
          r = this.indexOfGroup(t),
          i = r + n;
        this.groupSizes[t] = 0;
        for (var s = r; s < i; s++) this.tag.deleteRule(r);
      }
    }),
    (e.prototype.getGroup = function (t) {
      var n = "";
      if (t >= this.length || this.groupSizes[t] === 0) return n;
      for (
        var r = this.groupSizes[t],
        i = this.indexOfGroup(t),
        s = i + r,
        o = i;
        o < s;
        o++
      )
        n += "".concat(this.tag.getRule(o)).concat(ol);
      return n;
    }),
    e
  );
})(),
  To = new Map(),
  jo = new Map(),
  wo = 1,
  Qs = function (e) {
    if (To.has(e)) return To.get(e);
    for (; jo.has(wo);) wo++;
    var t = wo++;
    return To.set(e, t), jo.set(t, e), t;
  },
  n0 = function (e, t) {
    (wo = t + 1), To.set(e, t), jo.set(t, e);
  },
  r0 = "style[".concat(Ei, "][").concat(ed, '="').concat(ua, '"]'),
  i0 = new RegExp(
    "^".concat(Ei, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  s0 = function (e, t, n) {
    for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
      (r = i[s]) && e.registerName(t, r);
  },
  o0 = function (e, t) {
    for (
      var n,
      r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(ol),
      i = [],
      s = 0,
      o = r.length;
      s < o;
      s++
    ) {
      var a = r[s].trim();
      if (a) {
        var u = a.match(i0);
        if (u) {
          var l = 0 | parseInt(u[1], 10),
            c = u[2];
          l !== 0 && (n0(c, l), s0(e, c, u[3]), e.getTag().insertRules(l, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  },
  Ac = function (e) {
    for (
      var t = document.querySelectorAll(r0), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var i = t[n];
      i &&
        i.getAttribute(Ei) !== td &&
        (o0(e, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function a0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ld = function (e) {
  var t = document.head,
    n = e || t,
    r = document.createElement("style"),
    i = (function (a) {
      var u = Array.from(a.querySelectorAll("style[".concat(Ei, "]")));
      return u[u.length - 1];
    })(n),
    s = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(Ei, td), r.setAttribute(ed, ua);
  var o = a0();
  return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
},
  u0 = (function () {
    function e(t) {
      (this.element = ld(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
            var o = r[i];
            if (o.ownerNode === n) return o;
          }
          throw $s(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  l0 = (function () {
    function e(t) {
      (this.element = ld(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  c0 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Ec = No,
  f0 = { isServer: !No, useCSSOMInjection: !jg },
  cd = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Mi), n === void 0 && (n = {});
      var i = this;
      (this.options = We(We({}, f0), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && No && Ec && ((Ec = !1), Ac(this)),
        ul(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
              a = o.length,
              u = "",
              l = function (f) {
                var h = (function (_) {
                  return jo.get(_);
                })(f);
                if (h === void 0) return "continue";
                var d = s.names.get(h),
                  m = o.getGroup(f);
                if (d === void 0 || !d.size || m.length === 0)
                  return "continue";
                var p = ""
                  .concat(Ei, ".g")
                  .concat(f, '[id="')
                  .concat(h, '"]'),
                  g = "";
                d !== void 0 &&
                  d.forEach(function (_) {
                    _.length > 0 && (g += "".concat(_, ","));
                  }),
                  (u += ""
                    .concat(m)
                    .concat(p, '{content:"')
                    .concat(g, '"}')
                    .concat(ol));
              },
              c = 0;
              c < a;
              c++
            )
              l(c);
            return u;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return Qs(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && No && Ac(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            We(We({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new c0(i) : r ? new u0(i) : new l0(i);
            })(this.options)),
              new e0(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Qs(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Qs(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Qs(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  h0 = /&/g,
  d0 = /^\s*\/\/.*$/gm;
function fd(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
      ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
      n.type !== "@keyframes" &&
      (n.children = fd(n.children, t)),
      n
    );
  });
}
function p0(e) {
  var t,
    n,
    r,
    i = Mi,
    s = i.options,
    o = s === void 0 ? Mi : s,
    a = i.plugins,
    u = a === void 0 ? la : a,
    l = function (h, d, m) {
      return m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : h;
    },
    c = u.slice();
  c.push(function (h) {
    h.type === ia &&
      h.value.includes("&") &&
      (h.props[0] = h.props[0].replace(h0, n).replace(r, l));
  }),
    o.prefix && c.push(Bg),
    c.push(Fg);
  var f = function (h, d, m, p) {
    d === void 0 && (d = ""),
      m === void 0 && (m = ""),
      p === void 0 && (p = "&"),
      (t = p),
      (n = d),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var g = h.replace(d0, ""),
      _ = Og(m || d ? "".concat(m, " ").concat(d, " { ").concat(g, " }") : g);
    o.namespace && (_ = fd(_, o.namespace));
    var w = [];
    return (
      Bo(
        _,
        Ig(
          c.concat(
            Lg(function (x) {
              return w.push(x);
            })
          )
        )
      ),
      w
    );
  };
  return (
    (f.hash = u.length
      ? u
        .reduce(function (h, d) {
          return d.name || $s(15), ci(h, d.name);
        }, rd)
        .toString()
      : ""),
    f
  );
}
var m0 = new cd(),
  fu = p0(),
  hd = Pi.createContext({
    shouldForwardProp: void 0,
    styleSheet: m0,
    stylis: fu,
  });
hd.Consumer;
Pi.createContext(void 0);
function Mc() {
  return I.useContext(hd);
}
var g0 = (function () {
  function e(t, n) {
    var r = this;
    (this.inject = function (i, s) {
      s === void 0 && (s = fu);
      var o = r.name + s.hash;
      i.hasNameForId(r.id, o) ||
        i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
    }),
      (this.name = t),
      (this.id = "sc-keyframes-".concat(t)),
      (this.rules = n),
      ul(this, function () {
        throw $s(12, String(r.name));
      });
  }
  return (
    (e.prototype.getName = function (t) {
      return t === void 0 && (t = fu), this.name + t.hash;
    }),
    e
  );
})(),
  y0 = function (e) {
    return e >= "A" && e <= "Z";
  };
function Rc(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    y0(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var dd = function (e) {
  return e == null || e === !1 || e === "";
},
  pd = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var s = e[i];
      e.hasOwnProperty(i) &&
        !dd(s) &&
        ((Array.isArray(s) && s.isCss) || Ri(s)
          ? r.push("".concat(Rc(i), ":"), s, ";")
          : Ss(s)
            ? r.push.apply(r, Lo(Lo(["".concat(i, " {")], pd(s), !1), ["}"], !1))
            : r.push(
              ""
                .concat(Rc(i), ": ")
                .concat(
                  ((t = i),
                    (n = s) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                        n === 0 ||
                        t in Ng ||
                        t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Ur(e, t, n, r) {
  if (dd(e)) return [];
  if (al(e)) return [".".concat(e.styledComponentId)];
  if (Ri(e)) {
    if (!Ri((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return Ur(i, t, n, r);
  }
  var s;
  return e instanceof g0
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Ss(e)
      ? pd(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
          la,
          e.map(function (o) {
            return Ur(o, t, n, r);
          })
        )
        : [e.toString()];
}
function _0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ri(n) && !al(n)) return !1;
  }
  return !0;
}
var v0 = id(ua),
  x0 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && _0(t)),
        (this.componentId = n),
        (this.baseHash = ci(v0, n)),
        (this.baseStyle = r),
        cd.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = Lr(i, this.staticRulesId);
          else {
            var s = Cc(Ur(this.rules, t, n, r)),
              o = lu(ci(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var a = r(s, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, a);
            }
            (i = Lr(i, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var u = ci(this.baseHash, r.hash), l = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var f = this.rules[c];
            if (typeof f == "string") l += f;
            else if (f) {
              var h = Cc(Ur(f, t, n, r));
              (u = ci(u, h + c)), (l += h);
            }
          }
          if (l) {
            var d = lu(u >>> 0);
            n.hasNameForId(this.componentId, d) ||
              n.insertRules(
                this.componentId,
                d,
                r(l, ".".concat(d), void 0, this.componentId)
              ),
              (i = Lr(i, d));
          }
        }
        return i;
      }),
      e
    );
  })(),
  md = Pi.createContext(void 0);
md.Consumer;
var Ta = {};
function b0(e, t, n) {
  var r = al(e),
    i = e,
    s = !ba(e),
    o = t.attrs,
    a = o === void 0 ? la : o,
    u = t.componentId,
    l =
      u === void 0
        ? (function (b, T) {
          var y = typeof b != "string" ? "sc" : bc(b);
          Ta[y] = (Ta[y] || 0) + 1;
          var v = "".concat(y, "-").concat(Yg(ua + y + Ta[y]));
          return T ? "".concat(T, "-").concat(v) : v;
        })(t.displayName, t.parentComponentId)
        : u,
    c = t.displayName,
    f =
      c === void 0
        ? (function (b) {
          return ba(b) ? "styled.".concat(b) : "Styled(".concat(Gg(b), ")");
        })(e)
        : c,
    h =
      t.displayName && t.componentId
        ? "".concat(bc(t.displayName), "-").concat(t.componentId)
        : t.componentId || l,
    d = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    m = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var p = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var g = t.shouldForwardProp;
      m = function (b, T) {
        return p(b, T) && g(b, T);
      };
    } else m = p;
  }
  var _ = new x0(n, h, r ? i.componentStyle : void 0);
  function w(b, T) {
    return (function (y, v, P) {
      var E = y.attrs,
        M = y.componentStyle,
        j = y.defaultProps,
        D = y.foldedComponentIds,
        z = y.styledComponentId,
        N = y.target,
        G = Pi.useContext(md),
        k = Mc(),
        R = y.shouldForwardProp || k.shouldForwardProp,
        V = zg(v, G, j) || Mi,
        L = (function (_t, At, vt) {
          for (
            var Z,
            pt = We(We({}, At), { className: void 0, theme: vt }),
            Xt = 0;
            Xt < _t.length;
            Xt += 1
          ) {
            var kt = Ri((Z = _t[Xt])) ? Z(pt) : Z;
            for (var Et in kt)
              pt[Et] =
                Et === "className"
                  ? Lr(pt[Et], kt[Et])
                  : Et === "style"
                    ? We(We({}, pt[Et]), kt[Et])
                    : kt[Et];
          }
          return (
            At.className && (pt.className = Lr(pt.className, At.className)), pt
          );
        })(E, v, V),
        S = L.as || N,
        J = {};
      for (var ft in L)
        L[ft] === void 0 ||
          ft[0] === "$" ||
          ft === "as" ||
          (ft === "theme" && L.theme === V) ||
          (ft === "forwardedAs"
            ? (J.as = L.forwardedAs)
            : (R && !R(ft, S)) || (J[ft] = L[ft]));
      var Ct = (function (_t, At) {
        var vt = Mc(),
          Z = _t.generateAndInjectStyles(At, vt.styleSheet, vt.stylis);
        return Z;
      })(M, L),
        tt = Lr(D, z);
      return (
        Ct && (tt += " " + Ct),
        L.className && (tt += " " + L.className),
        (J[ba(S) && !nd.has(S) ? "class" : "className"] = tt),
        P && (J.ref = P),
        I.createElement(S, J)
      );
    })(x, b, T);
  }
  w.displayName = f;
  var x = Pi.forwardRef(w);
  return (
    (x.attrs = d),
    (x.componentStyle = _),
    (x.displayName = f),
    (x.shouldForwardProp = m),
    (x.foldedComponentIds = r
      ? Lr(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (x.styledComponentId = h),
    (x.target = r ? i.target : e),
    Object.defineProperty(x, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (b) {
        this._foldedDefaultProps = r
          ? (function (T) {
            for (var y = [], v = 1; v < arguments.length; v++)
              y[v - 1] = arguments[v];
            for (var P = 0, E = y; P < E.length; P++) cu(T, E[P], !0);
            return T;
          })({}, i.defaultProps, b)
          : b;
      },
    }),
    ul(x, function () {
      return ".".concat(x.styledComponentId);
    }),
    s &&
    ud(x, e, {
      attrs: !0,
      componentStyle: !0,
      displayName: !0,
      foldedComponentIds: !0,
      shouldForwardProp: !0,
      styledComponentId: !0,
      target: !0,
    }),
    x
  );
}
function kc(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Dc = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function T0(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ri(e) || Ss(e)) return Dc(Ur(kc(la, Lo([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Ur(r)
    : Dc(Ur(kc(r, t)));
}
function hu(e, t, n) {
  if ((n === void 0 && (n = Mi), !t)) throw $s(1, t);
  var r = function (i) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return e(t, n, T0.apply(void 0, Lo([i], s, !1)));
  };
  return (
    (r.attrs = function (i) {
      return hu(
        e,
        t,
        We(We({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return hu(e, t, We(We({}, n), i));
    }),
    r
  );
}
var gd = function (e) {
  return hu(b0, e);
},
  w0 = gd;
nd.forEach(function (e) {
  w0[e] = gd(e);
});
const ll = I.createContext({});
function cl(e) {
  const t = I.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const fl = typeof window < "u",
  yd = fl ? I.useLayoutEffect : I.useEffect,
  ca = I.createContext(null);
function hl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function dl(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const nr = (e, t, n) => (n > t ? t : n < e ? e : n);
let pl = () => { };
const rr = {},
  _d = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function vd(e) {
  return typeof e == "object" && e !== null;
}
const xd = (e) => /^0[^.\s]+$/u.test(e);
function ml(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const xn = (e) => e,
  S0 = (e, t) => (n) => t(e(n)),
  Us = (...e) => e.reduce(S0),
  Ps = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class gl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hl(this.subscriptions, t), () => dl(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const zn = (e) => e * 1e3,
  $n = (e) => e / 1e3;
function bd(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Td = (e, t, n) =>
  (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  P0 = 1e-7,
  C0 = 12;
function A0(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = Td(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > P0 && ++a < C0);
  return o;
}
function Ws(e, t, n, r) {
  if (e === t && n === r) return xn;
  const i = (s) => A0(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Td(i(s), t, r));
}
const wd = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Sd = (e) => (t) => 1 - e(1 - t),
  Pd = Ws(0.33, 1.53, 0.69, 0.99),
  yl = Sd(Pd),
  Cd = wd(yl),
  Ad = (e) =>
    (e *= 2) < 1 ? 0.5 * yl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  _l = (e) => 1 - Math.sin(Math.acos(e)),
  Ed = Sd(_l),
  Md = wd(_l),
  E0 = Ws(0.42, 0, 1, 1),
  M0 = Ws(0, 0, 0.58, 1),
  Rd = Ws(0.42, 0, 0.58, 1),
  R0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  kd = (e) => Array.isArray(e) && typeof e[0] == "number",
  k0 = {
    linear: xn,
    easeIn: E0,
    easeInOut: Rd,
    easeOut: M0,
    circIn: _l,
    circInOut: Md,
    circOut: Ed,
    backIn: yl,
    backInOut: Cd,
    backOut: Pd,
    anticipate: Ad,
  },
  D0 = (e) => typeof e == "string",
  Oc = (e) => {
    if (kd(e)) {
      pl(e.length === 4);
      const [t, n, r, i] = e;
      return Ws(t, n, r, i);
    } else if (D0(e)) return k0[e];
    return e;
  },
  Js = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Vc = { value: null };
function O0(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = 0;
  function l(f) {
    o.has(f) && (c.schedule(f), e()), u++, f(a);
  }
  const c = {
    schedule: (f, h = !1, d = !1) => {
      const p = d && i ? n : r;
      return h && o.add(f), p.has(f) || p.add(f), f;
    },
    cancel: (f) => {
      r.delete(f), o.delete(f);
    },
    process: (f) => {
      if (((a = f), i)) {
        s = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(l),
        t && Vc.value && Vc.value.frameloop[t].push(u),
        (u = 0),
        n.clear(),
        (i = !1),
        s && ((s = !1), c.process(f));
    },
  };
  return c;
}
const V0 = 40;
function Dd(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Js.reduce((x, b) => ((x[b] = O0(s, t ? b : void 0)), x), {}),
    {
      setup: a,
      read: u,
      resolveKeyframes: l,
      preUpdate: c,
      update: f,
      preRender: h,
      render: d,
      postRender: m,
    } = o,
    p = () => {
      const x = rr.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        rr.useManualTiming ||
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, V0), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        a.process(i),
        u.process(i),
        l.process(i),
        c.process(i),
        f.process(i),
        h.process(i),
        d.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p));
    },
    g = () => {
      (n = !0), (r = !0), i.isProcessing || e(p);
    };
  return {
    schedule: Js.reduce((x, b) => {
      const T = o[b];
      return (x[b] = (y, v = !1, P = !1) => (n || g(), T.schedule(y, v, P))), x;
    }, {}),
    cancel: (x) => {
      for (let b = 0; b < Js.length; b++) o[Js[b]].cancel(x);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: Ut,
  cancel: br,
  state: ye,
  steps: wa,
} = Dd(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xn, !0);
let So;
function F0() {
  So = void 0;
}
const Ye = {
  now: () => (
    So === void 0 &&
    Ye.set(
      ye.isProcessing || rr.useManualTiming
        ? ye.timestamp
        : performance.now()
    ),
    So
  ),
  set: (e) => {
    (So = e), queueMicrotask(F0);
  },
},
  Od = (e) => (t) => typeof t == "string" && t.startsWith(e),
  vl = Od("--"),
  I0 = Od("var(--"),
  xl = (e) => (I0(e) ? L0.test(e.split("/*")[0].trim()) : !1),
  L0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  zi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Cs = { ...zi, transform: (e) => nr(0, 1, e) },
  to = { ...zi, default: 1 },
  as = (e) => Math.round(e * 1e5) / 1e5,
  bl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function B0(e) {
  return e == null;
}
const N0 =
  /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Tl = (e, t) => (n) =>
    !!(
      (typeof n == "string" && N0.test(n) && n.startsWith(e)) ||
      (t && !B0(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Vd = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(bl);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  j0 = (e) => nr(0, 255, e),
  Sa = { ...zi, transform: (e) => Math.round(j0(e)) },
  Br = {
    test: Tl("rgb", "red"),
    parse: Vd("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Sa.transform(e) +
      ", " +
      Sa.transform(t) +
      ", " +
      Sa.transform(n) +
      ", " +
      as(Cs.transform(r)) +
      ")",
  };
function z0(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const du = { test: Tl("#"), parse: z0, transform: Br.transform },
  Ys = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  cr = Ys("deg"),
  Un = Ys("%"),
  q = Ys("px"),
  $0 = Ys("vh"),
  U0 = Ys("vw"),
  Fc = {
    ...Un,
    parse: (e) => Un.parse(e) / 100,
    transform: (e) => Un.transform(e * 100),
  },
  fi = {
    test: Tl("hsl", "hue"),
    parse: Vd("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Un.transform(as(t)) +
      ", " +
      Un.transform(as(n)) +
      ", " +
      as(Cs.transform(r)) +
      ")",
  },
  Pe = {
    test: (e) => Br.test(e) || du.test(e) || fi.test(e),
    parse: (e) =>
      Br.test(e) ? Br.parse(e) : fi.test(e) ? fi.parse(e) : du.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Br.transform(e)
          : fi.transform(e),
  },
  W0 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Y0(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(bl)) == null ? void 0 : t.length) || 0) +
    (((n = e.match(W0)) == null ? void 0 : n.length) || 0) >
    0
  );
}
const Fd = "number",
  Id = "color",
  G0 = "var",
  X0 = "var(",
  Ic = "${}",
  H0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function As(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      H0,
      (u) => (
        Pe.test(u)
          ? (r.color.push(s), i.push(Id), n.push(Pe.parse(u)))
          : u.startsWith(X0)
            ? (r.var.push(s), i.push(G0), n.push(u))
            : (r.number.push(s), i.push(Fd), n.push(parseFloat(u))),
        ++s,
        Ic
      )
    )
    .split(Ic);
  return { values: n, split: a, indexes: r, types: i };
}
function Ld(e) {
  return As(e).values;
}
function Bd(e) {
  const { split: t, types: n } = As(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === Fd
          ? (s += as(i[o]))
          : a === Id
            ? (s += Pe.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const q0 = (e) => (typeof e == "number" ? 0 : e);
function K0(e) {
  const t = Ld(e);
  return Bd(e)(t.map(q0));
}
const Tr = {
  test: Y0,
  parse: Ld,
  createTransformer: Bd,
  getAnimatableNone: K0,
};
function Pa(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Z0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      u = 2 * n - a;
    (i = Pa(u, a, e + 1 / 3)), (s = Pa(u, a, e)), (o = Pa(u, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function zo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const zt = (e, t, n) => e + (t - e) * n,
  Ca = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Q0 = [du, Br, fi],
  J0 = (e) => Q0.find((t) => t.test(e));
function Lc(e) {
  const t = J0(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === fi && (n = Z0(n)), n;
}
const Bc = (e, t) => {
  const n = Lc(e),
    r = Lc(t);
  if (!n || !r) return zo(e, t);
  const i = { ...n };
  return (s) => (
    (i.red = Ca(n.red, r.red, s)),
    (i.green = Ca(n.green, r.green, s)),
    (i.blue = Ca(n.blue, r.blue, s)),
    (i.alpha = zt(n.alpha, r.alpha, s)),
    Br.transform(i)
  );
},
  pu = new Set(["none", "hidden"]);
function ty(e, t) {
  return pu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function ey(e, t) {
  return (n) => zt(e, t, n);
}
function wl(e) {
  return typeof e == "number"
    ? ey
    : typeof e == "string"
      ? xl(e)
        ? zo
        : Pe.test(e)
          ? Bc
          : iy
      : Array.isArray(e)
        ? Nd
        : typeof e == "object"
          ? Pe.test(e)
            ? Bc
            : ny
          : zo;
}
function Nd(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => wl(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function ny(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = wl(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function ry(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      a = e.values[o] ?? 0;
    (n[i] = a), r[s]++;
  }
  return n;
}
const iy = (e, t) => {
  const n = Tr.createTransformer(t),
    r = As(e),
    i = As(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (pu.has(e) && !i.values.length) || (pu.has(t) && !r.values.length)
      ? ty(e, t)
      : Us(Nd(ry(r, i), i.values), n)
    : zo(e, t);
};
function jd(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? zt(e, t, n)
    : wl(e)(e, t);
}
const sy = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => Ut.update(t, n),
    stop: () => br(t),
    now: () => (ye.isProcessing ? ye.timestamp : Ye.now()),
  };
},
  zd = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(s / (i - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  $o = 2e4;
function Sl(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < $o;) (t += n), (r = e.next(t));
  return t >= $o ? 1 / 0 : t;
}
function oy(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Sl(r), $o);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: $n(i),
  };
}
const ay = 5;
function $d(e, t, n) {
  const r = Math.max(t - ay, 0);
  return bd(n - e(r), t - r);
}
const Yt = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
},
  Nc = 0.001;
function uy({
  duration: e = Yt.duration,
  bounce: t = Yt.bounce,
  velocity: n = Yt.velocity,
  mass: r = Yt.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = nr(Yt.minDamping, Yt.maxDamping, o)),
    (e = nr(Yt.minDuration, Yt.maxDuration, $n(e))),
    o < 1
      ? ((i = (l) => {
        const c = l * o,
          f = c * e,
          h = c - n,
          d = mu(l, o),
          m = Math.exp(-f);
        return Nc - (h / d) * m;
      }),
        (s = (l) => {
          const f = l * o * e,
            h = f * n + n,
            d = Math.pow(o, 2) * Math.pow(l, 2) * e,
            m = Math.exp(-f),
            p = mu(Math.pow(l, 2), o);
          return ((-i(l) + Nc > 0 ? -1 : 1) * ((h - d) * m)) / p;
        }))
      : ((i = (l) => {
        const c = Math.exp(-l * e),
          f = (l - n) * e + 1;
        return -0.001 + c * f;
      }),
        (s = (l) => {
          const c = Math.exp(-l * e),
            f = (n - l) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    u = cy(i, s, a);
  if (((e = zn(e)), isNaN(u)))
    return { stiffness: Yt.stiffness, damping: Yt.damping, duration: e };
  {
    const l = Math.pow(u, 2) * r;
    return { stiffness: l, damping: o * 2 * Math.sqrt(r * l), duration: e };
  }
}
const ly = 12;
function cy(e, t, n) {
  let r = n;
  for (let i = 1; i < ly; i++) r = r - e(r) / t(r);
  return r;
}
function mu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const fy = ["duration", "bounce"],
  hy = ["stiffness", "damping", "mass"];
function jc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function dy(e) {
  let t = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!jc(e, hy) && jc(e, fy))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * nr(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Yt.mass, stiffness: i, damping: s };
    } else {
      const n = uy(e);
      (t = { ...t, ...n, mass: Yt.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Uo(e = Yt.visualDuration, t = Yt.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: u,
      damping: l,
      mass: c,
      duration: f,
      velocity: h,
      isResolvedFromDuration: d,
    } = dy({ ...n, velocity: -$n(n.velocity || 0) }),
    m = h || 0,
    p = l / (2 * Math.sqrt(u * c)),
    g = o - s,
    _ = $n(Math.sqrt(u / c)),
    w = Math.abs(g) < 5;
  r || (r = w ? Yt.restSpeed.granular : Yt.restSpeed.default),
    i || (i = w ? Yt.restDelta.granular : Yt.restDelta.default);
  let x;
  if (p < 1) {
    const T = mu(_, p);
    x = (y) => {
      const v = Math.exp(-p * _ * y);
      return (
        o - v * (((m + p * _ * g) / T) * Math.sin(T * y) + g * Math.cos(T * y))
      );
    };
  } else if (p === 1) x = (T) => o - Math.exp(-_ * T) * (g + (m + _ * g) * T);
  else {
    const T = _ * Math.sqrt(p * p - 1);
    x = (y) => {
      const v = Math.exp(-p * _ * y),
        P = Math.min(T * y, 300);
      return (
        o - (v * ((m + p * _ * g) * Math.sinh(P) + T * g * Math.cosh(P))) / T
      );
    };
  }
  const b = {
    calculatedDuration: (d && f) || null,
    next: (T) => {
      const y = x(T);
      if (d) a.done = T >= f;
      else {
        let v = T === 0 ? m : 0;
        p < 1 && (v = T === 0 ? zn(m) : $d(x, T, y));
        const P = Math.abs(v) <= r,
          E = Math.abs(o - y) <= i;
        a.done = P && E;
      }
      return (a.value = a.done ? o : y), a;
    },
    toString: () => {
      const T = Math.min(Sl(b), $o),
        y = zd((v) => b.next(T * v).value, T, 30);
      return T + "ms " + y;
    },
    toTransition: () => { },
  };
  return b;
}
Uo.applyToOptions = (e) => {
  const t = oy(e, 100, Uo);
  return (
    (e.ease = t.ease), (e.duration = zn(t.duration)), (e.type = "keyframes"), e
  );
};
function gu({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: u,
  restDelta: l = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    d = (P) => (a !== void 0 && P < a) || (u !== void 0 && P > u),
    m = (P) =>
      a === void 0
        ? u
        : u === void 0 || Math.abs(a - P) < Math.abs(u - P)
          ? a
          : u;
  let p = n * t;
  const g = f + p,
    _ = o === void 0 ? g : o(g);
  _ !== g && (p = _ - f);
  const w = (P) => -p * Math.exp(-P / r),
    x = (P) => _ + w(P),
    b = (P) => {
      const E = w(P),
        M = x(P);
      (h.done = Math.abs(E) <= l), (h.value = h.done ? _ : M);
    };
  let T, y;
  const v = (P) => {
    d(h.value) &&
      ((T = P),
        (y = Uo({
          keyframes: [h.value, m(h.value)],
          velocity: $d(x, P, h.value),
          damping: i,
          stiffness: s,
          restDelta: l,
          restSpeed: c,
        })));
  };
  return (
    v(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let E = !1;
        return (
          !y && T === void 0 && ((E = !0), b(P), v(P)),
          T !== void 0 && P >= T ? y.next(P - T) : (!E && b(P), h)
        );
      },
    }
  );
}
function py(e, t, n) {
  const r = [],
    i = n || rr.mix || jd,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || xn : t;
      a = Us(u, a);
    }
    r.push(a);
  }
  return r;
}
function my(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((pl(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = py(t, r, i),
    u = a.length,
    l = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (u > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const h = Ps(e[f], e[f + 1], c);
      return a[f](h);
    };
  return n ? (c) => l(nr(e[0], e[s - 1], c)) : l;
}
function gy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Ps(0, t, r);
    e.push(zt(n, 1, i));
  }
}
function yy(e) {
  const t = [0];
  return gy(t, e.length - 1), t;
}
function _y(e, t) {
  return e.map((n) => n * t);
}
function vy(e, t) {
  return e.map(() => t || Rd).splice(0, e.length - 1);
}
function us({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = R0(r) ? r.map(Oc) : Oc(r),
    s = { done: !1, value: t[0] },
    o = _y(n && n.length === t.length ? n : yy(t), e),
    a = my(o, t, { ease: Array.isArray(i) ? i : vy(t, i) });
  return {
    calculatedDuration: e,
    next: (u) => ((s.value = a(u)), (s.done = u >= e), s),
  };
}
const xy = (e) => e !== null;
function Pl(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(xy),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const by = { decay: gu, inertia: gu, tween: us, keyframes: us, spring: Uo };
function Ud(e) {
  typeof e.type == "string" && (e.type = by[e.type]);
}
class Cl {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Ty = (e) => e / 100;
class Al extends Cl {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Ye.now() && this.tick(Ye.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
          (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Ud(t);
    const {
      type: n = us,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const u = n || us;
    u !== us &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Us(Ty, jd(a[0], a[1]))), (a = [0, 100]));
    const l = u({ ...t, keyframes: a });
    s === "mirror" &&
      (this.mirroredGenerator = u({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      l.calculatedDuration === null && (l.calculatedDuration = Sl(l));
    const { calculatedDuration: c } = l;
    (this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = l);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: u,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: l = 0,
      keyframes: c,
      repeat: f,
      repeatType: h,
      repeatDelay: d,
      type: m,
      onUpdate: p,
      finalKeyframe: g,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
      (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const _ = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
      w = this.playbackSpeed >= 0 ? _ < 0 : _ > i;
    (this.currentTime = Math.max(_, 0)),
      this.state === "finished" &&
      this.holdTime === null &&
      (this.currentTime = i);
    let x = this.currentTime,
      b = r;
    if (f) {
      const P = Math.min(this.currentTime, i) / a;
      let E = Math.floor(P),
        M = P % 1;
      !M && P >= 1 && (M = 1),
        M === 1 && E--,
        (E = Math.min(E, f + 1)),
        !!(E % 2) &&
        (h === "reverse"
          ? ((M = 1 - M), d && (M -= d / a))
          : h === "mirror" && (b = o)),
        (x = nr(0, 1, M) * a);
    }
    const T = w ? { done: !1, value: c[0] } : b.next(x);
    s && (T.value = s(T.value));
    let { done: y } = T;
    !w &&
      u !== null &&
      (y =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const v =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && y));
    return (
      v && m !== gu && (T.value = Pl(c, this.options, g, this.speed)),
      p && p(T.value),
      v && this.finish(),
      T
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return $n(this.calculatedDuration);
  }
  get time() {
    return $n(this.currentTime);
  }
  set time(t) {
    var n;
    (t = zn(t)),
      (this.currentTime = t),
      this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
        (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ye.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = $n(this.currentTime));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = sy, startTime: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
      this.speed < 0 &&
      (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Ye.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
      ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function wy(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Nr = (e) => (e * 180) / Math.PI,
  yu = (e) => {
    const t = Nr(Math.atan2(e[1], e[0]));
    return _u(t);
  },
  Sy = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: yu,
    rotateZ: yu,
    skewX: (e) => Nr(Math.atan(e[1])),
    skewY: (e) => Nr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  _u = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  zc = yu,
  $c = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Uc = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Py = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: $c,
    scaleY: Uc,
    scale: (e) => ($c(e) + Uc(e)) / 2,
    rotateX: (e) => _u(Nr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => _u(Nr(Math.atan2(-e[2], e[0]))),
    rotateZ: zc,
    rotate: zc,
    skewX: (e) => Nr(Math.atan(e[4])),
    skewY: (e) => Nr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function vu(e) {
  return e.includes("scale") ? 1 : 0;
}
function xu(e, t) {
  if (!e || e === "none") return vu(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = Py), (i = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = Sy), (i = a);
  }
  if (!i) return vu(t);
  const s = r[t],
    o = i[1].split(",").map(Ay);
  return typeof s == "function" ? s(o) : o[s];
}
const Cy = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return xu(n, t);
};
function Ay(e) {
  return parseFloat(e.trim());
}
const $i = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY",
],
  Ui = new Set($i),
  Wc = (e) => e === zi || e === q,
  Ey = new Set(["x", "y", "z"]),
  My = $i.filter((e) => !Ey.has(e));
function Ry(e) {
  const t = [];
  return (
    My.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Wr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => xu(t, "x"),
  y: (e, { transform: t }) => xu(t, "y"),
};
Wr.translateX = Wr.x;
Wr.translateY = Wr.y;
const Yr = new Set();
let bu = !1,
  Tu = !1,
  wu = !1;
function Wd() {
  if (Tu) {
    const e = Array.from(Yr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Ry(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Tu = !1), (bu = !1), Yr.forEach((e) => e.complete(wu)), Yr.clear();
}
function Yd() {
  Yr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Tu = !0);
  });
}
function ky() {
  (wu = !0), Yd(), Wd(), (wu = !1);
}
class El {
  constructor(t, n, r, i, s, o = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Yr.add(this),
          bu || ((bu = !0), Ut.read(Yd), Ut.resolveKeyframes(Wd)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]);
    }
    wy(t);
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Yr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Yr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Dy = (e) => e.startsWith("--");
function Oy(e, t, n) {
  Dy(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const Vy = ml(() => window.ScrollTimeline !== void 0),
  Fy = {};
function Iy(e, t) {
  const n = ml(e);
  return () => Fy[t] ?? n();
}
const Gd = Iy(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"),
  Zi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Yc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Zi([0, 0.65, 0.55, 1]),
    circOut: Zi([0.55, 0, 1, 0.45]),
    backIn: Zi([0.31, 0.01, 0.66, -0.59]),
    backOut: Zi([0.33, 1.53, 0.69, 0.99]),
  };
function Xd(e, t) {
  if (e)
    return typeof e == "function"
      ? Gd()
        ? zd(e, t)
        : "ease-out"
      : kd(e)
        ? Zi(e)
        : Array.isArray(e)
          ? e.map((n) => Xd(n, t) || Yc.easeOut)
          : Yc[e];
}
function Ly(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: u,
  } = {},
  l = void 0
) {
  const c = { [t]: n };
  u && (c.offset = u);
  const f = Xd(a, i);
  Array.isArray(f) && (c.easing = f);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return l && (h.pseudoElement = l), e.animate(c, h);
}
function Hd(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function By({ type: e, ...t }) {
  return Hd(e) && Gd()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Ny extends Cl {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: u,
    } = t;
    (this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      pl(typeof t.type != "string");
    const l = By(t);
    (this.animation = Ly(n, r, i, l, s)),
      l.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const c = Pl(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : Oy(n, r, c),
            this.animation.cancel();
        }
        u == null || u(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
        this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch { }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
        null
        ? void 0
        : r.call(n).duration) || 0;
    return $n(Number(t));
  }
  get time() {
    return $n(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = zn(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
      ((r = this.animation.effect) == null ||
        r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && Vy() ? ((this.animation.timeline = t), xn) : n(this)
    );
  }
}
const qd = { anticipate: Ad, backInOut: Cd, circInOut: Md };
function jy(e) {
  return e in qd;
}
function zy(e) {
  typeof e.ease == "string" && jy(e.ease) && (e.ease = qd[e.ease]);
}
const Gc = 10;
class $y extends Ny {
  constructor(t) {
    zy(t),
      Ud(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Al({ ...o, autoplay: !1 }),
      u = zn(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(u - Gc).value, a.sample(u).value, Gc), a.stop();
  }
}
const Xc = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
      typeof e == "number" ||
      Array.isArray(e) ||
      (typeof e == "string" &&
        (Tr.test(e) || e === "0") &&
        !e.startsWith("url("))
    );
function Uy(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Wy(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = Xc(i, t),
    a = Xc(s, t);
  return !o || !a ? !1 : Uy(e) || ((n === "spring" || Hd(n)) && r);
}
function Ml(e) {
  return vd(e) && "offsetHeight" in e;
}
const Yy = new Set(["opacity", "clipPath", "filter", "transform"]),
  Gy = ml(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Xy(e) {
  var l;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
  } = e;
  if (!Ml((l = t == null ? void 0 : t.owner) == null ? void 0 : l.current))
    return !1;
  const { onUpdate: a, transformTemplate: u } = t.owner.getProps();
  return (
    Gy() &&
    n &&
    Yy.has(n) &&
    (n !== "transform" || !u) &&
    !a &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const Hy = 40;
class qy extends Cl {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: u,
    motionValue: l,
    element: c,
    ...f
  }) {
    var m;
    super(),
      (this.stop = () => {
        var p, g;
        this._animation &&
          (this._animation.stop(),
            (p = this.stopTimeline) == null || p.call(this)),
          (g = this.keyframeResolver) == null || g.cancel();
      }),
      (this.createdAt = Ye.now());
    const h = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: o,
      name: u,
      motionValue: l,
      element: c,
      ...f,
    },
      d = (c == null ? void 0 : c.KeyframeResolver) || El;
    (this.keyframeResolver = new d(
      a,
      (p, g, _) => this.onKeyframesResolved(p, g, h, !_),
      u,
      l,
      c
    )),
      (m = this.keyframeResolver) == null || m.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: u,
      isHandoff: l,
      onUpdate: c,
    } = r;
    (this.resolvedAt = Ye.now()),
      Wy(t, s, o, a) ||
      ((rr.instantAnimations || !u) && (c == null || c(Pl(t, r, n))),
        (t[0] = t[t.length - 1]),
        (r.duration = 0),
        (r.repeat = 0));
    const h = {
      startTime: i
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > Hy
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t,
    },
      d =
        !l && Xy(h)
          ? new $y({ ...h, element: h.motionValue.owner.current })
          : new Al(h);
    d.finished.then(() => this.notifyFinished()).catch(xn),
      this.pendingTimeline &&
      ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = d);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => { });
  }
  get animation() {
    var t;
    return (
      this._animation ||
      ((t = this.keyframeResolver) == null || t.resume(), ky()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const Ky = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Zy(e) {
  const t = Ky.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Kd(e, t, n = 1) {
  const [r, i] = Zy(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return _d(o) ? parseFloat(o) : o;
  }
  return xl(i) ? Kd(i, t, n + 1) : i;
}
function Rl(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Zd = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...$i,
]),
  Qy = { test: (e) => e === "auto", parse: (e) => e },
  Qd = (e) => (t) => t.test(e),
  Jd = [zi, q, Un, cr, U0, $0, Qy],
  Hc = (e) => Jd.find(Qd(e));
function Jy(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || xd(e)
      : !0;
}
const t_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
function e_(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(bl) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = t_.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const n_ = /\b([a-z-]*)\(.*?\)/gu,
  Su = {
    ...Tr,
    getAnimatableNone: (e) => {
      const t = e.match(n_);
      return t ? t.map(e_).join(" ") : e;
    },
  },
  qc = { ...zi, transform: Math.round },
  r_ = {
    rotate: cr,
    rotateX: cr,
    rotateY: cr,
    rotateZ: cr,
    scale: to,
    scaleX: to,
    scaleY: to,
    scaleZ: to,
    skew: cr,
    skewX: cr,
    skewY: cr,
    distance: q,
    translateX: q,
    translateY: q,
    translateZ: q,
    x: q,
    y: q,
    z: q,
    perspective: q,
    transformPerspective: q,
    opacity: Cs,
    originX: Fc,
    originY: Fc,
    originZ: q,
  },
  kl = {
    borderWidth: q,
    borderTopWidth: q,
    borderRightWidth: q,
    borderBottomWidth: q,
    borderLeftWidth: q,
    borderRadius: q,
    radius: q,
    borderTopLeftRadius: q,
    borderTopRightRadius: q,
    borderBottomRightRadius: q,
    borderBottomLeftRadius: q,
    width: q,
    maxWidth: q,
    height: q,
    maxHeight: q,
    top: q,
    right: q,
    bottom: q,
    left: q,
    padding: q,
    paddingTop: q,
    paddingRight: q,
    paddingBottom: q,
    paddingLeft: q,
    margin: q,
    marginTop: q,
    marginRight: q,
    marginBottom: q,
    marginLeft: q,
    backgroundPositionX: q,
    backgroundPositionY: q,
    ...r_,
    zIndex: qc,
    fillOpacity: Cs,
    strokeOpacity: Cs,
    numOctaves: qc,
  },
  i_ = {
    ...kl,
    color: Pe,
    backgroundColor: Pe,
    outlineColor: Pe,
    fill: Pe,
    stroke: Pe,
    borderColor: Pe,
    borderTopColor: Pe,
    borderRightColor: Pe,
    borderBottomColor: Pe,
    borderLeftColor: Pe,
    filter: Su,
    WebkitFilter: Su,
  },
  tp = (e) => i_[e];
function ep(e, t) {
  let n = tp(e);
  return (
    n !== Su && (n = Tr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const s_ = new Set(["auto", "none", "0"]);
function o_(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    const s = e[r];
    typeof s == "string" && !s_.has(s) && As(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = ep(n, i);
}
class a_ extends El {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let l = t[u];
      if (typeof l == "string" && ((l = l.trim()), xl(l))) {
        const c = Kd(l, n.current);
        c !== void 0 && (t[u] = c),
          u === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !Zd.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Hc(i),
      a = Hc(s);
    if (o !== a)
      if (Wc(o) && Wc(a))
        for (let u = 0; u < t.length; u++) {
          const l = t[u];
          typeof l == "string" && (t[u] = parseFloat(l));
        }
      else Wr[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Jy(t[i])) && r.push(i);
    r.length && o_(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Wr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    (r[s] = Wr[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
      a.length &&
      this.removedTransforms.forEach(([u, l]) => {
        t.getValue(u).set(l);
      }),
      this.resolveNoneKeyframes();
  }
}
function u_(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    const i = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const np = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Kc = 30,
  l_ = (e) => !isNaN(parseFloat(e));
class c_ {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        var o, a;
        const s = Ye.now();
        if (
          (this.updatedAt !== s && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(r),
            this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
              this.dependents))
        )
          for (const u of this.dependents) u.dirty();
        i &&
          ((a = this.events.renderRequest) == null || a.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Ye.now()),
      this.canTrackVelocity === null &&
      t !== void 0 &&
      (this.canTrackVelocity = l_(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new gl());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
        r(),
          Ut.read(() => {
            this.events.change.getSize() || this.stop();
          });
      }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ye.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Kc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Kc);
    return bd(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ki(e, t) {
  return new c_(e, t);
}
const { schedule: Dl } = Dd(queueMicrotask, !1),
  En = { x: !1, y: !1 };
function rp() {
  return En.x || En.y;
}
function f_(e) {
  return e === "x" || e === "y"
    ? En[e]
      ? null
      : ((En[e] = !0),
        () => {
          En[e] = !1;
        })
    : En.x || En.y
      ? null
      : ((En.x = En.y = !0),
        () => {
          En.x = En.y = !1;
        });
}
function ip(e, t) {
  const n = u_(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Zc(e) {
  return !(e.pointerType === "touch" || rp());
}
function h_(e, t, n = {}) {
  const [r, i, s] = ip(e, n),
    o = (a) => {
      if (!Zc(a)) return;
      const { target: u } = a,
        l = t(u, a);
      if (typeof l != "function" || !u) return;
      const c = (f) => {
        Zc(f) && (l(f), u.removeEventListener("pointerleave", c));
      };
      u.addEventListener("pointerleave", c, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const sp = (e, t) => (t ? (e === t ? !0 : sp(e, t.parentElement)) : !1),
  Ol = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  d_ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function p_(e) {
  return d_.has(e.tagName) || e.tabIndex !== -1;
}
const Po = new WeakSet();
function Qc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Aa(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const m_ = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Qc(() => {
    if (Po.has(n)) return;
    Aa(n, "down");
    const i = Qc(() => {
      Aa(n, "up");
    }),
      s = () => Aa(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Jc(e) {
  return Ol(e) && !rp();
}
function g_(e, t, n = {}) {
  const [r, i, s] = ip(e, n),
    o = (a) => {
      const u = a.currentTarget;
      if (!Jc(a)) return;
      Po.add(u);
      const l = t(u, a),
        c = (d, m) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            Po.has(u) && Po.delete(u),
            Jc(d) && typeof l == "function" && l(d, { success: m });
        },
        f = (d) => {
          c(
            d,
            u === window ||
            u === document ||
            n.useGlobalTarget ||
            sp(u, d.target)
          );
        },
        h = (d) => {
          c(d, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Ml(a) &&
        (a.addEventListener("focus", (l) => m_(l, i)),
          !p_(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    s
  );
}
function op(e) {
  return vd(e) && "ownerSVGElement" in e;
}
function y_(e) {
  return op(e) && e.tagName === "svg";
}
const Me = (e) => !!(e && e.getVelocity),
  __ = [...Jd, Pe, Tr],
  v_ = (e) => __.find(Qd(e)),
  Vl = I.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class x_ extends I.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (Ml(r) && r.offsetWidth) || 0,
        s = this.props.sizeRef.current;
      (s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft),
        (s.right = i - s.width - s.left);
    }
    return null;
  }
  componentDidUpdate() { }
  render() {
    return this.props.children;
  }
}
function b_({ children: e, isPresent: t, anchorX: n }) {
  const r = I.useId(),
    i = I.useRef(null),
    s = I.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: o } = I.useContext(Vl);
  return (
    I.useInsertionEffect(() => {
      const { width: a, height: u, top: l, left: c, right: f } = s.current;
      if (t || !i.current || !a || !u) return;
      const h = n === "left" ? `left: ${c}` : `right: ${f}`;
      i.current.dataset.motionPopId = r;
      const d = document.createElement("style");
      return (
        o && (d.nonce = o),
        document.head.appendChild(d),
        d.sheet &&
        d.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${u}px !important;
            ${h}px !important;
            top: ${l}px !important;
          }
        `),
        () => {
          document.head.contains(d) && document.head.removeChild(d);
        }
      );
    }, [t]),
    tr.jsx(x_, {
      isPresent: t,
      childRef: i,
      sizeRef: s,
      children: I.cloneElement(e, { ref: i }),
    })
  );
}
const T_ = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
}) => {
  const u = cl(w_),
    l = I.useId();
  let c = !0,
    f = I.useMemo(
      () => (
        (c = !1),
        {
          id: l,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (h) => {
            u.set(h, !0);
            for (const d of u.values()) if (!d) return;
            r && r();
          },
          register: (h) => (u.set(h, !1), () => u.delete(h)),
        }
      ),
      [n, u, r]
    );
  return (
    s && c && (f = { ...f }),
    I.useMemo(() => {
      u.forEach((h, d) => u.set(d, !1));
    }, [n]),
    I.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    o === "popLayout" &&
    (e = tr.jsx(b_, { isPresent: n, anchorX: a, children: e })),
    tr.jsx(ca.Provider, { value: f, children: e })
  );
};
function w_() {
  return new Map();
}
function ap(e = !0) {
  const t = I.useContext(ca);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = I.useId();
  I.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = I.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const eo = (e) => e.key || "";
function tf(e) {
  const t = [];
  return (
    I.Children.forEach(e, (n) => {
      I.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const hT = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
  propagate: o = !1,
  anchorX: a = "left",
}) => {
  const [u, l] = ap(o),
    c = I.useMemo(() => tf(e), [e]),
    f = o && !u ? [] : c.map(eo),
    h = I.useRef(!0),
    d = I.useRef(c),
    m = cl(() => new Map()),
    [p, g] = I.useState(c),
    [_, w] = I.useState(c);
  yd(() => {
    (h.current = !1), (d.current = c);
    for (let T = 0; T < _.length; T++) {
      const y = eo(_[T]);
      f.includes(y) ? m.delete(y) : m.get(y) !== !0 && m.set(y, !1);
    }
  }, [_, f.length, f.join("-")]);
  const x = [];
  if (c !== p) {
    let T = [...c];
    for (let y = 0; y < _.length; y++) {
      const v = _[y],
        P = eo(v);
      f.includes(P) || (T.splice(y, 0, v), x.push(v));
    }
    return s === "wait" && x.length && (T = x), w(tf(T)), g(c), null;
  }
  const { forceRender: b } = I.useContext(ll);
  return tr.jsx(tr.Fragment, {
    children: _.map((T) => {
      const y = eo(T),
        v = o && !u ? !1 : c === _ || f.includes(y),
        P = () => {
          if (m.has(y)) m.set(y, !0);
          else return;
          let E = !0;
          m.forEach((M) => {
            M || (E = !1);
          }),
            E &&
            (b == null || b(),
              w(d.current),
              o && (l == null || l()),
              r && r());
        };
      return tr.jsx(
        T_,
        {
          isPresent: v,
          initial: !h.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: i,
          mode: s,
          onExitComplete: v ? void 0 : P,
          anchorX: a,
          children: T,
        },
        y
      );
    }),
  });
},
  up = I.createContext({ strict: !1 }),
  ef = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Di = {};
for (const e in ef) Di[e] = { isEnabled: (t) => ef[e].some((n) => !!t[n]) };
function S_(e) {
  for (const t in e) Di[t] = { ...Di[t], ...e[t] };
}
const P_ = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Wo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    P_.has(e)
  );
}
let lp = (e) => !Wo(e);
function C_(e) {
  e && (lp = (t) => (t.startsWith("on") ? !Wo(t) : e(t)));
}
try {
  C_(require("@emotion/is-prop-valid").default);
} catch { }
function A_(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((lp(i) ||
        (n === !0 && Wo(i)) ||
        (!t && !Wo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function E_(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const fa = I.createContext({});
function ha(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Es(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Fl = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit",
],
  Il = ["initial", ...Fl];
function da(e) {
  return ha(e.animate) || Il.some((t) => Es(e[t]));
}
function cp(e) {
  return !!(da(e) || e.variants);
}
function M_(e, t) {
  if (da(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Es(n) ? n : void 0,
      animate: Es(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function R_(e) {
  const { initial: t, animate: n } = M_(e, I.useContext(fa));
  return I.useMemo(() => ({ initial: t, animate: n }), [nf(t), nf(n)]);
}
function nf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const k_ = Symbol.for("motionComponentSymbol");
function hi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function D_(e, t, n) {
  return I.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : hi(n) && (n.current = r));
    },
    [t]
  );
}
const Ll = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  O_ = "framerAppearId",
  fp = "data-" + Ll(O_),
  hp = I.createContext({});
function V_(e, t, n, r, i) {
  var p, g;
  const { visualElement: s } = I.useContext(fa),
    o = I.useContext(up),
    a = I.useContext(ca),
    u = I.useContext(Vl).reducedMotion,
    l = I.useRef(null);
  (r = r || o.renderer),
    !l.current &&
    r &&
    (l.current = r(e, {
      visualState: t,
      parent: s,
      props: n,
      presenceContext: a,
      blockInitialAnimation: a ? a.initial === !1 : !1,
      reducedMotionConfig: u,
    }));
  const c = l.current,
    f = I.useContext(hp);
  c &&
    !c.projection &&
    i &&
    (c.type === "html" || c.type === "svg") &&
    F_(l.current, n, i, f);
  const h = I.useRef(!1);
  I.useInsertionEffect(() => {
    c && h.current && c.update(n, a);
  });
  const d = n[fp],
    m = I.useRef(
      !!d &&
      !((p = window.MotionHandoffIsComplete) != null && p.call(window, d)) &&
      ((g = window.MotionHasOptimisedAnimation) == null
        ? void 0
        : g.call(window, d))
    );
  return (
    yd(() => {
      c &&
        ((h.current = !0),
          (window.MotionIsMounted = !0),
          c.updateFeatures(),
          Dl.render(c.render),
          m.current && c.animationState && c.animationState.animateChanges());
    }),
    I.useEffect(() => {
      c &&
        (!m.current && c.animationState && c.animationState.animateChanges(),
          m.current &&
          (queueMicrotask(() => {
            var _;
            (_ = window.MotionHandoffMarkAsComplete) == null ||
              _.call(window, d);
          }),
            (m.current = !1)));
    }),
    c
  );
}
function F_(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: u,
    layoutRoot: l,
    layoutCrossfade: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : dp(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && hi(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: u,
      layoutRoot: l,
    });
}
function dp(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : dp(e.parent);
}
function I_({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && S_(e);
  function s(a, u) {
    let l;
    const c = { ...I.useContext(Vl), ...a, layoutId: L_(a) },
      { isStatic: f } = c,
      h = R_(a),
      d = r(a, f);
    if (!f && fl) {
      B_();
      const m = N_(c);
      (l = m.MeasureLayout),
        (h.visualElement = V_(i, d, c, t, m.ProjectionNode));
    }
    return tr.jsxs(fa.Provider, {
      value: h,
      children: [
        l && h.visualElement
          ? tr.jsx(l, { visualElement: h.visualElement, ...c })
          : null,
        n(i, a, D_(d, h.visualElement, u), d, f, h.visualElement),
      ],
    });
  }
  s.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`
    }`;
  const o = I.forwardRef(s);
  return (o[k_] = i), o;
}
function L_({ layoutId: e }) {
  const t = I.useContext(ll).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function B_(e, t) {
  I.useContext(up).strict;
}
function N_(e) {
  const { drag: t, layout: n } = Di;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Ms = {};
function j_(e) {
  for (const t in e) (Ms[t] = e[t]), vl(t) && (Ms[t].isCSSVariable = !0);
}
function pp(e, { layout: t, layoutId: n }) {
  return (
    Ui.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ms[e] || e === "opacity"))
  );
}
const z_ = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective",
},
  $_ = $i.length;
function U_(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < $_; s++) {
    const o = $i[s],
      a = e[o];
    if (a === void 0) continue;
    let u = !0;
    if (
      (typeof a == "number"
        ? (u = a === (o.startsWith("scale") ? 1 : 0))
        : (u = parseFloat(a) === 0),
        !u || n)
    ) {
      const l = np(a, kl[o]);
      if (!u) {
        i = !1;
        const c = z_[o] || o;
        r += `${c}(${l}) `;
      }
      n && (t[o] = l);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Bl(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const u in t) {
    const l = t[u];
    if (Ui.has(u)) {
      o = !0;
      continue;
    } else if (vl(u)) {
      i[u] = l;
      continue;
    } else {
      const c = np(l, kl[u]);
      u.startsWith("origin") ? ((a = !0), (s[u] = c)) : (r[u] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = U_(t, e.transform, n))
        : r.transform && (r.transform = "none")),
      a)
  ) {
    const { originX: u = "50%", originY: l = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${u} ${l} ${c}`;
  }
}
const Nl = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function mp(e, t, n) {
  for (const r in t) !Me(t[r]) && !pp(r, n) && (e[r] = t[r]);
}
function W_({ transformTemplate: e }, t) {
  return I.useMemo(() => {
    const n = Nl();
    return Bl(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Y_(e, t) {
  const n = e.style || {},
    r = {};
  return mp(r, n, e), Object.assign(r, W_(e, t)), r;
}
function G_(e, t) {
  const n = {},
    r = Y_(e, t);
  return (
    e.drag &&
    e.dragListener !== !1 &&
    ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
    (e.onTap || e.onTapStart || e.whileTap) &&
    (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const X_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  H_ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function q_(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? X_ : H_;
  e[s.offset] = q.transform(-r);
  const o = q.transform(t),
    a = q.transform(n);
  e[s.array] = `${o} ${a}`;
}
function gp(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  u,
  l,
  c
) {
  if ((Bl(e, a, l), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: h } = e;
  f.transform && ((h.transform = f.transform), delete f.transform),
    (h.transform || f.transformOrigin) &&
    ((h.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    h.transform &&
    ((h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && q_(f, i, s, o, !1);
}
const yp = () => ({ ...Nl(), attrs: {} }),
  _p = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function K_(e, t, n, r) {
  const i = I.useMemo(() => {
    const s = yp();
    return (
      gp(s, t, _p(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    mp(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
const Z_ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function jl(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Z_.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Q_(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const u = (jl(n) ? K_ : G_)(r, s, o, n),
      l = A_(r, typeof n == "string", e),
      c = n !== I.Fragment ? { ...l, ...u, ref: i } : {},
      { children: f } = r,
      h = I.useMemo(() => (Me(f) ? f.get() : f), [f]);
    return I.createElement(n, { ...c, children: h });
  };
}
function rf(e) {
  const t = [{}, {}];
  return (
    e == null ||
    e.values.forEach((n, r) => {
      (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
    }),
    t
  );
}
function zl(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = rf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
      typeof t == "function")
  ) {
    const [i, s] = rf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Co(e) {
  return Me(e) ? e.get() : e;
}
function J_({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: tv(n, r, i, e), renderState: t() };
}
const vp = (e) => (t, n) => {
  const r = I.useContext(fa),
    i = I.useContext(ca),
    s = () => J_(e, t, r, i);
  return n ? s() : cl(s);
};
function tv(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = Co(s[h]);
  let { initial: o, animate: a } = e;
  const u = da(e),
    l = cp(e);
  t &&
    l &&
    !u &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !ha(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let d = 0; d < h.length; d++) {
      const m = zl(e, h[d]);
      if (m) {
        const { transitionEnd: p, transition: g, ..._ } = m;
        for (const w in _) {
          let x = _[w];
          if (Array.isArray(x)) {
            const b = c ? x.length - 1 : 0;
            x = x[b];
          }
          x !== null && (i[w] = x);
        }
        for (const w in p) i[w] = p[w];
      }
    }
  }
  return i;
}
function $l(e, t, n) {
  var s;
  const { style: r } = e,
    i = {};
  for (const o in r)
    (Me(r[o]) ||
      (t.style && Me(t.style[o])) ||
      pp(o, e) ||
      ((s = n == null ? void 0 : n.getValue(o)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (i[o] = r[o]);
  return i;
}
const ev = {
  useVisualState: vp({
    scrapeMotionValuesFromProps: $l,
    createRenderState: Nl,
  }),
};
function xp(e, t, n) {
  const r = $l(e, t, n);
  for (const i in e)
    if (Me(e[i]) || Me(t[i])) {
      const s =
        $i.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
const nv = {
  useVisualState: vp({
    scrapeMotionValuesFromProps: xp,
    createRenderState: yp,
  }),
};
function rv(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(jl(r) ? nv : ev),
      preloadedFeatures: e,
      useRender: Q_(i),
      createVisualElement: t,
      Component: r,
    };
    return I_(o);
  };
}
function Rs(e, t, n) {
  const r = e.getProps();
  return zl(r, t, n !== void 0 ? n : r.custom, e);
}
const Pu = (e) => Array.isArray(e);
function iv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ki(n));
}
function sv(e) {
  return Pu(e) ? e[e.length - 1] || 0 : e;
}
function ov(e, t) {
  const n = Rs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = sv(s[o]);
    iv(e, o, a);
  }
}
function av(e) {
  return !!(Me(e) && e.add);
}
function Cu(e, t) {
  const n = e.getValue("willChange");
  if (av(n)) return n.add(t);
  if (!n && rr.WillChange) {
    const r = new rr.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function bp(e) {
  return e.props[fp];
}
const uv = (e) => e !== null;
function lv(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(uv),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
const cv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  fv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  hv = { type: "keyframes", duration: 0.8 },
  dv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  pv = (e, { keyframes: t }) =>
    t.length > 2
      ? hv
      : Ui.has(e)
        ? e.startsWith("scale")
          ? fv(t[1])
          : cv
        : dv;
function mv({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: u,
  elapsed: l,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Ul =
  (e, t, n, r = {}, i, s) =>
    (o) => {
      const a = Rl(r, e) || {},
        u = a.delay || r.delay || 0;
      let { elapsed: l = 0 } = r;
      l = l - zn(u);
      const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -l,
        onUpdate: (h) => {
          t.set(h), a.onUpdate && a.onUpdate(h);
        },
        onComplete: () => {
          o(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      mv(a) || Object.assign(c, pv(e, c)),
        c.duration && (c.duration = zn(c.duration)),
        c.repeatDelay && (c.repeatDelay = zn(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
          (rr.instantAnimations || rr.skipAnimations) &&
          ((f = !0), (c.duration = 0), (c.delay = 0)),
          (c.allowFlatten = !a.type && !a.ease),
          f && !s && t.get() !== void 0)
      ) {
        const h = lv(c.keyframes, a);
        if (h !== void 0) {
          Ut.update(() => {
            c.onUpdate(h), c.onComplete();
          });
          return;
        }
      }
      return a.isSync ? new Al(c) : new qy(c);
    };
function gv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Tp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (s = r);
  const u = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (const c in a) {
    const f = e.getValue(c, e.latestValues[c] ?? null),
      h = a[c];
    if (h === void 0 || (l && gv(l, c))) continue;
    const d = { delay: n, ...Rl(s || {}, c) },
      m = f.get();
    if (
      m !== void 0 &&
      !f.isAnimating &&
      !Array.isArray(h) &&
      h === m &&
      !d.velocity
    )
      continue;
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const _ = bp(e);
      if (_) {
        const w = window.MotionHandoffAnimation(_, c, Ut);
        w !== null && ((d.startTime = w), (p = !0));
      }
    }
    Cu(e, c),
      f.start(
        Ul(c, f, h, e.shouldReduceMotion && Zd.has(c) ? { type: !1 } : d, e, p)
      );
    const g = f.animation;
    g && u.push(g);
  }
  return (
    o &&
    Promise.all(u).then(() => {
      Ut.update(() => {
        o && ov(e, o);
      });
    }),
    u
  );
}
function Au(e, t, n = {}) {
  var u;
  const r = Rs(
    e,
    t,
    n.type === "exit"
      ? (u = e.presenceContext) == null
        ? void 0
        : u.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(Tp(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
          const {
            delayChildren: c = 0,
            staggerChildren: f,
            staggerDirection: h,
          } = i;
          return yv(e, t, c + l, f, h, n);
        }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [s, o] : [o, s];
    return l().then(() => c());
  } else return Promise.all([s(), o(n.delay)]);
}
function yv(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    u = i === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return (
    Array.from(e.variantChildren)
      .sort(_v)
      .forEach((l, c) => {
        l.notify("AnimationStart", t),
          o.push(
            Au(l, t, { ...s, delay: n + u(c) }).then(() =>
              l.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function _v(e, t) {
  return e.sortNodePosition(t);
}
function vv(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Au(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Au(e, t, n);
  else {
    const i = typeof t == "function" ? Rs(e, t, n.custom) : t;
    r = Promise.all(Tp(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function wp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const xv = Il.length;
function Sp(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Sp(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < xv; n++) {
    const r = Il[n],
      i = e.props[r];
    (Es(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const bv = [...Fl].reverse(),
  Tv = Fl.length;
function wv(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => vv(e, n, r)));
}
function Sv(e) {
  let t = wv(e),
    n = sf(),
    r = !0;
  const i = (u) => (l, c) => {
    var h;
    const f = Rs(
      e,
      c,
      u === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0
    );
    if (f) {
      const { transition: d, transitionEnd: m, ...p } = f;
      l = { ...l, ...p, ...m };
    }
    return l;
  };
  function s(u) {
    t = u(e);
  }
  function o(u) {
    const { props: l } = e,
      c = Sp(e.parent) || {},
      f = [],
      h = new Set();
    let d = {},
      m = 1 / 0;
    for (let g = 0; g < Tv; g++) {
      const _ = bv[g],
        w = n[_],
        x = l[_] !== void 0 ? l[_] : c[_],
        b = Es(x),
        T = _ === u ? w.isActive : null;
      T === !1 && (m = g);
      let y = x === c[_] && x !== l[_] && b;
      if (
        (y && r && e.manuallyAnimateOnMount && (y = !1),
          (w.protectedKeys = { ...d }),
          (!w.isActive && T === null) ||
          (!x && !w.prevProp) ||
          ha(x) ||
          typeof x == "boolean")
      )
        continue;
      const v = Pv(w.prevProp, x);
      let P = v || (_ === u && w.isActive && !y && b) || (g > m && b),
        E = !1;
      const M = Array.isArray(x) ? x : [x];
      let j = M.reduce(i(_), {});
      T === !1 && (j = {});
      const { prevResolvedValues: D = {} } = w,
        z = { ...D, ...j },
        N = (R) => {
          (P = !0),
            h.has(R) && ((E = !0), h.delete(R)),
            (w.needsAnimating[R] = !0);
          const V = e.getValue(R);
          V && (V.liveStyle = !1);
        };
      for (const R in z) {
        const V = j[R],
          L = D[R];
        if (d.hasOwnProperty(R)) continue;
        let S = !1;
        Pu(V) && Pu(L) ? (S = !wp(V, L)) : (S = V !== L),
          S
            ? V != null
              ? N(R)
              : h.add(R)
            : V !== void 0 && h.has(R)
              ? N(R)
              : (w.protectedKeys[R] = !0);
      }
      (w.prevProp = x),
        (w.prevResolvedValues = j),
        w.isActive && (d = { ...d, ...j }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
        (!(y && v) || E) &&
        f.push(...M.map((R) => ({ animation: R, options: { type: _ } })));
    }
    if (h.size) {
      const g = {};
      if (typeof l.initial != "boolean") {
        const _ = Rs(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        _ && _.transition && (g.transition = _.transition);
      }
      h.forEach((_) => {
        const w = e.getBaseTarget(_),
          x = e.getValue(_);
        x && (x.liveStyle = !0), (g[_] = w ?? null);
      }),
        f.push({ animation: g });
    }
    let p = !!f.length;
    return (
      r &&
      (l.initial === !1 || l.initial === l.animate) &&
      !e.manuallyAnimateOnMount &&
      (p = !1),
      (r = !1),
      p ? t(f) : Promise.resolve()
    );
  }
  function a(u, l) {
    var f;
    if (n[u].isActive === l) return Promise.resolve();
    (f = e.variantChildren) == null ||
      f.forEach((h) => {
        var d;
        return (d = h.animationState) == null ? void 0 : d.setActive(u, l);
      }),
      (n[u].isActive = l);
    const c = o(u);
    for (const h in n) n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = sf()), (r = !0);
    },
  };
}
function Pv(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wp(t, e) : !1;
}
function Mr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function sf() {
  return {
    animate: Mr(!0),
    whileInView: Mr(),
    whileHover: Mr(),
    whileTap: Mr(),
    whileDrag: Mr(),
    whileFocus: Mr(),
    exit: Mr(),
  };
}
class Cr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() { }
}
class Cv extends Cr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Sv(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ha(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let Av = 0;
class Ev extends Cr {
  constructor() {
    super(...arguments), (this.id = Av++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() { }
}
const Mv = { animation: { Feature: Cv }, exit: { Feature: Ev } };
function ks(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Gs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Rv = (e) => (t) => Ol(t) && e(t, Gs(t));
function ls(e, t, n, r) {
  return ks(e, t, Rv(n), r);
}
function Pp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function kv({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Dv(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
const Cp = 1e-4,
  Ov = 1 - Cp,
  Vv = 1 + Cp,
  Ap = 0.01,
  Fv = 0 - Ap,
  Iv = 0 + Ap;
function ze(e) {
  return e.max - e.min;
}
function Lv(e, t, n) {
  return Math.abs(e - t) <= n;
}
function of(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = zt(t.min, t.max, e.origin)),
    (e.scale = ze(n) / ze(t)),
    (e.translate = zt(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Ov && e.scale <= Vv) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Fv && e.translate <= Iv) || isNaN(e.translate)) &&
    (e.translate = 0);
}
function cs(e, t, n, r) {
  of(e.x, t.x, n.x, r ? r.originX : void 0),
    of(e.y, t.y, n.y, r ? r.originY : void 0);
}
function af(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + ze(t));
}
function Bv(e, t, n) {
  af(e.x, t.x, n.x), af(e.y, t.y, n.y);
}
function uf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + ze(t));
}
function fs(e, t, n) {
  uf(e.x, t.x, n.x), uf(e.y, t.y, n.y);
}
const lf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  di = () => ({ x: lf(), y: lf() }),
  cf = () => ({ min: 0, max: 0 }),
  Kt = () => ({ x: cf(), y: cf() });
function pn(e) {
  return [e("x"), e("y")];
}
function Ea(e) {
  return e === void 0 || e === 1;
}
function Eu({ scale: e, scaleX: t, scaleY: n }) {
  return !Ea(e) || !Ea(t) || !Ea(n);
}
function Dr(e) {
  return (
    Eu(e) ||
    Ep(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Ep(e) {
  return ff(e.x) || ff(e.y);
}
function ff(e) {
  return e && e !== "0%";
}
function Yo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function hf(e, t, n, r, i) {
  return i !== void 0 && (e = Yo(e, i, r)), Yo(e, n, r) + t;
}
function Mu(e, t = 0, n = 1, r, i) {
  (e.min = hf(e.min, t, n, r, i)), (e.max = hf(e.max, t, n, r, i));
}
function Mp(e, { x: t, y: n }) {
  Mu(e.x, t.translate, t.scale, t.originPoint),
    Mu(e.y, n.translate, n.scale, n.originPoint);
}
const df = 0.999999999999,
  pf = 1.0000000000001;
function Nv(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: u } = s.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        mi(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
        o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Mp(e, o)),
        r && Dr(s.latestValues) && mi(e, s.latestValues));
  }
  t.x < pf && t.x > df && (t.x = 1), t.y < pf && t.y > df && (t.y = 1);
}
function pi(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function mf(e, t, n, r, i = 0.5) {
  const s = zt(e.min, e.max, i);
  Mu(e, t, n, s, r);
}
function mi(e, t) {
  mf(e.x, t.x, t.scaleX, t.scale, t.originX),
    mf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Rp(e, t) {
  return Pp(Dv(e.getBoundingClientRect(), t));
}
function jv(e, t, n) {
  const r = Rp(e, n),
    { scroll: i } = t;
  return i && (pi(r.x, i.offset.x), pi(r.y, i.offset.y)), r;
}
const kp = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  gf = (e, t) => Math.abs(e - t);
function zv(e, t) {
  const n = gf(e.x, t.x),
    r = gf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Dp {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const f = Ra(this.lastMoveEventInfo, this.history),
            h = this.startEvent !== null,
            d = zv(f.offset, { x: 0, y: 0 }) >= 3;
          if (!h && !d) return;
          const { point: m } = f,
            { timestamp: p } = ye;
          this.history.push({ ...m, timestamp: p });
          const { onStart: g, onMove: _ } = this.handlers;
          h ||
            (g && g(this.lastMoveEvent, f),
              (this.startEvent = this.lastMoveEvent)),
            _ && _(this.lastMoveEvent, f);
        }),
        (this.handlePointerMove = (f, h) => {
          (this.lastMoveEvent = f),
            (this.lastMoveEventInfo = Ma(h, this.transformPagePoint)),
            Ut.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (f, h) => {
          this.end();
          const { onEnd: d, onSessionEnd: m, resumeAnimation: p } = this.handlers;
          if (
            (this.dragSnapToOrigin && p && p(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const g = Ra(
            f.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ma(h, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(f, g), m && m(f, g);
        }),
        !Ol(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Gs(t),
      a = Ma(o, this.transformPagePoint),
      { point: u } = a,
      { timestamp: l } = ye;
    this.history = [{ ...u, timestamp: l }];
    const { onSessionStart: c } = n;
    c && c(t, Ra(a, this.history)),
      (this.removeListeners = Us(
        ls(this.contextWindow, "pointermove", this.handlePointerMove),
        ls(this.contextWindow, "pointerup", this.handlePointerUp),
        ls(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), br(this.updatePoint);
  }
}
function Ma(e, t) {
  return t ? { point: t(e.point) } : e;
}
function yf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ra({ point: e }, t) {
  return {
    point: e,
    delta: yf(e, Op(t)),
    offset: yf(e, $v(t)),
    velocity: Uv(t, 0.1),
  };
}
function $v(e) {
  return e[0];
}
function Op(e) {
  return e[e.length - 1];
}
function Uv(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Op(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > zn(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  const s = $n(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Wv(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? zt(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? zt(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function _f(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Yv(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: _f(e.x, n, i), y: _f(e.y, t, r) };
}
function vf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Gv(e, t) {
  return { x: vf(e.x, t.x), y: vf(e.y, t.y) };
}
function Xv(e, t) {
  let n = 0.5;
  const r = ze(e),
    i = ze(t);
  return (
    i > r
      ? (n = Ps(t.min, t.max - r, e.min))
      : r > i && (n = Ps(e.min, e.max - i, t.min)),
    nr(0, 1, n)
  );
}
function Hv(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ru = 0.35;
function qv(e = Ru) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ru),
    { x: xf(e, "left", "right"), y: xf(e, "top", "bottom") }
  );
}
function xf(e, t, n) {
  return { min: bf(e, t), max: bf(e, n) };
}
function bf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Kv = new WeakMap();
class Zv {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Kt()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(),
        n && this.snapToCursor(Gs(c).point);
    },
      s = (c, f) => {
        const { drag: h, dragPropagation: d, onDragStart: m } = this.getProps();
        if (
          h &&
          !d &&
          (this.openDragLock && this.openDragLock(),
            (this.openDragLock = f_(h)),
            !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
          ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          pn((g) => {
            let _ = this.getAxisMotionValue(g).get() || 0;
            if (Un.test(_)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const x = w.layout.layoutBox[g];
                x && (_ = ze(x) * (parseFloat(_) / 100));
              }
            }
            this.originPoint[g] = _;
          }),
          m && Ut.postRender(() => m(c, f)),
          Cu(this.visualElement, "transform");
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      o = (c, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: d,
          onDirectionLock: m,
          onDrag: p,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: g } = f;
        if (d && this.currentDirection === null) {
          (this.currentDirection = Qv(g)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, g),
          this.updateAxis("y", f.point, g),
          this.visualElement.render(),
          p && p(c, f);
      },
      a = (c, f) => this.stop(c, f),
      u = () =>
        pn((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new Dp(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l,
        contextWindow: kp(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && Ut.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !no(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = Wv(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    t && hi(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = Yv(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = qv(n)),
      i !== this.constraints &&
      r &&
      this.constraints &&
      !this.hasMutatedConstraints &&
      pn((o) => {
        this.constraints !== !1 &&
          this.getAxisMotionValue(o) &&
          (this.constraints[o] = Hv(r.layoutBox[o], this.constraints[o]));
      });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !hi(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = jv(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Gv(i.layout.layoutBox, s);
    if (n) {
      const a = n(kv(o));
      (this.hasMutatedConstraints = !!a), a && (o = Pp(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
      drag: n,
      dragMomentum: r,
      dragElastic: i,
      dragTransition: s,
      dragSnapToOrigin: o,
      onDragTransitionEnd: a,
    } = this.getProps(),
      u = this.constraints || {},
      l = pn((c) => {
        if (!no(c, n, this.currentDirection)) return;
        let f = (u && u[c]) || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Cu(this.visualElement, t), r.start(Ul(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    pn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    pn((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    pn((n) => {
      const { drag: r } = this.getProps();
      if (!no(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - zt(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!hi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    pn((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const u = a.get();
        i[o] = Xv({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      pn((o) => {
        if (!no(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: u, max: l } = this.constraints[o];
        a.set(zt(u, l, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Kv.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ls(t, "pointerdown", (u) => {
        const { drag: l, dragListener: c = !0 } = this.getProps();
        l && c && this.start(u);
      }),
      r = () => {
        const { dragConstraints: u } = this.getProps();
        hi(u) && u.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      Ut.read(r);
    const o = ks(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: l }) => {
          this.isDragging &&
            l &&
            (pn((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += u[c].translate),
                  f.set(f.get() + u[c].translate));
            }),
              this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Ru,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function no(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Qv(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Jv extends Cr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = xn),
      (this.removeListeners = xn),
      (this.controls = new Zv(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || xn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Tf = (e) => (t, n) => {
  e && Ut.postRender(() => e(t, n));
};
class t1 extends Cr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = xn);
  }
  onPointerDown(t) {
    this.session = new Dp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kp(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Tf(t),
      onStart: Tf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && Ut.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ls(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ao = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function wf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Gi = {
  correct: (e, t) => {
    if (!t.target) return e;
    if (typeof e == "string")
      if (q.test(e)) e = parseFloat(e);
      else return e;
    const n = wf(e, t.target.x),
      r = wf(e, t.target.y);
    return `${n}% ${r}%`;
  },
},
  e1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Tr.parse(e);
      if (i.length > 5) return r;
      const s = Tr.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        u = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= u);
      const l = zt(a, u, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= l),
        typeof i[3 + o] == "number" && (i[3 + o] /= l),
        s(i)
      );
    },
  };
class n1 extends I.Component {
  componentDidMount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
      layoutId: i,
    } = this.props,
      { projection: s } = t;
    j_(r1),
      s &&
      (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ao.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
      layoutDependency: n,
      visualElement: r,
      drag: i,
      isPresent: s,
    } = this.props,
      { projection: o } = r;
    return (
      o &&
      ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
        (s
          ? o.promote()
          : o.relegate() ||
          Ut.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove();
          }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
        Dl.postRender(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
  }
  componentWillUnmount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
    } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Vp(e) {
  const [t, n] = ap(),
    r = I.useContext(ll);
  return tr.jsx(n1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: I.useContext(hp),
    isPresent: t,
    safeToRemove: n,
  });
}
const r1 = {
  borderRadius: {
    ...Gi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Gi,
  borderTopRightRadius: Gi,
  borderBottomLeftRadius: Gi,
  borderBottomRightRadius: Gi,
  boxShadow: e1,
};
function i1(e, t, n) {
  const r = Me(e) ? e : ki(e);
  return r.start(Ul("", r, t, n)), r.animation;
}
const s1 = (e, t) => e.depth - t.depth;
class o1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    hl(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    dl(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(s1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function a1(e, t) {
  const n = Ye.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (br(r), e(s - t));
    };
  return Ut.setup(r, !0), () => br(r);
}
const Fp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  u1 = Fp.length,
  Sf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Pf = (e) => typeof e == "number" || q.test(e);
function l1(e, t, n, r, i, s) {
  i
    ? ((e.opacity = zt(0, n.opacity ?? 1, c1(r))),
      (e.opacityExit = zt(t.opacity ?? 1, 0, f1(r))))
    : s && (e.opacity = zt(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < u1; o++) {
    const a = `border${Fp[o]}Radius`;
    let u = Cf(t, a),
      l = Cf(n, a);
    if (u === void 0 && l === void 0) continue;
    u || (u = 0),
      l || (l = 0),
      u === 0 || l === 0 || Pf(u) === Pf(l)
        ? ((e[a] = Math.max(zt(Sf(u), Sf(l), r), 0)),
          (Un.test(l) || Un.test(u)) && (e[a] += "%"))
        : (e[a] = l);
  }
  (t.rotate || n.rotate) && (e.rotate = zt(t.rotate || 0, n.rotate || 0, r));
}
function Cf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const c1 = Ip(0, 0.5, Ed),
  f1 = Ip(0.5, 0.95, xn);
function Ip(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ps(e, t, r)));
}
function Af(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function dn(e, t) {
  Af(e.x, t.x), Af(e.y, t.y);
}
function Ef(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Mf(e, t, n, r, i) {
  return (
    (e -= t), (e = Yo(e, 1 / n, r)), i !== void 0 && (e = Yo(e, 1 / i, r)), e
  );
}
function h1(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (Un.test(t) &&
      ((t = parseFloat(t)), (t = zt(o.min, o.max, t / 100) - o.min)),
      typeof t != "number")
  )
    return;
  let a = zt(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Mf(e.min, t, n, a, i)),
    (e.max = Mf(e.max, t, n, a, i));
}
function Rf(e, t, [n, r, i], s, o) {
  h1(e, t[n], t[r], t[i], t.scale, s, o);
}
const d1 = ["x", "scaleX", "originX"],
  p1 = ["y", "scaleY", "originY"];
function kf(e, t, n, r) {
  Rf(e.x, t, d1, n ? n.x : void 0, r ? r.x : void 0),
    Rf(e.y, t, p1, n ? n.y : void 0, r ? r.y : void 0);
}
function Df(e) {
  return e.translate === 0 && e.scale === 1;
}
function Lp(e) {
  return Df(e.x) && Df(e.y);
}
function Of(e, t) {
  return e.min === t.min && e.max === t.max;
}
function m1(e, t) {
  return Of(e.x, t.x) && Of(e.y, t.y);
}
function Vf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Bp(e, t) {
  return Vf(e.x, t.x) && Vf(e.y, t.y);
}
function Ff(e) {
  return ze(e.x) / ze(e.y);
}
function If(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class g1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    hl(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (dl(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
        ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function y1(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
      (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
      n)
  ) {
    const {
      transformPerspective: l,
      rotate: c,
      rotateX: f,
      rotateY: h,
      skewX: d,
      skewY: m,
    } = n;
    l && (r = `perspective(${l}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      d && (r += `skewX(${d}deg) `),
      m && (r += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x,
    u = e.y.scale * t.y;
  return (a !== 1 || u !== 1) && (r += `scale(${a}, ${u})`), r || "none";
}
const ka = ["", "X", "Y", "Z"],
  _1 = { visibility: "hidden" },
  v1 = 1e3;
let x1 = 0;
function Da(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Np(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = bp(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ut, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Np(r);
}
function jp({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = x1++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(w1),
            this.nodes.forEach(E1),
            this.nodes.forEach(M1),
            this.nodes.forEach(S1);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new o1());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new gl()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      (this.isSVG = op(o) && !y_(o)), (this.instance = o);
      const { layoutId: a, layout: u, visualElement: l } = this.options;
      if (
        (l && !l.current && l.mount(o),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          this.root.hasTreeAnimated && (u || a) && (this.isLayoutDirty = !0),
          e)
      ) {
        let c;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            c && c(),
            (c = a1(f, 250)),
            Ao.hasAnimatedSinceResize &&
            ((Ao.hasAnimatedSinceResize = !1), this.nodes.forEach(Bf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
        l &&
        (a || u) &&
        this.addEventListener(
          "didUpdate",
          ({
            delta: c,
            hasLayoutChanged: f,
            hasRelativeLayoutChanged: h,
            layout: d,
          }) => {
            if (this.isTreeAnimationBlocked()) {
              (this.target = void 0), (this.relativeTarget = void 0);
              return;
            }
            const m =
              this.options.transition || l.getDefaultTransition() || V1,
              { onLayoutAnimationStart: p, onLayoutAnimationComplete: g } =
                l.getProps(),
              _ = !this.targetLayout || !Bp(this.targetLayout, d),
              w = !f && h;
            if (
              this.options.layoutRoot ||
              this.resumeFrom ||
              w ||
              (f && (_ || !this.currentAnimation))
            ) {
              this.resumeFrom &&
                ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
              const x = { ...Rl(m, "layout"), onPlay: p, onComplete: g };
              (l.shouldReduceMotion || this.options.layoutRoot) &&
                ((x.delay = 0), (x.type = !1)),
                this.startAnimation(x),
                this.setAnimationOrigin(c, w);
            } else
              f || Bf(this),
                this.isLead() &&
                this.options.onExitComplete &&
                this.options.onExitComplete();
            this.targetLayout = d;
          }
        );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        br(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(R1),
          this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Np(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u) return;
      const l = this.getTransformTemplate();
      (this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Lf);
        return;
      }
      this.isUpdating || this.nodes.forEach(C1),
        (this.isUpdating = !1),
        this.nodes.forEach(A1),
        this.nodes.forEach(b1),
        this.nodes.forEach(T1),
        this.clearAllSnapshots();
      const a = Ye.now();
      (ye.delta = nr(0, 1e3 / 60, a - ye.timestamp)),
        (ye.timestamp = a),
        (ye.isProcessing = !0),
        wa.update.process(ye),
        wa.preRender.process(ye),
        wa.render.process(ye),
        (ye.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Dl.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(P1), this.sharedNodes.forEach(k1);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
          Ut.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ut.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
          this.snapshot &&
          !ze(this.snapshot.measuredBox.x) &&
          !ze(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Kt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
          a && this.instance)
      ) {
        const u = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
        this.isLayoutDirty ||
        this.shouldResetTransform ||
        this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Lp(this.projectionDelta),
        u = this.getTransformTemplate(),
        l = u ? u(this.latestValues, "") : void 0,
        c = l !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || Dr(this.latestValues) || c) &&
        (i(this.instance, l),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return (
        o && (u = this.removeTransform(u)),
        F1(u),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: u,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var l;
      const { visualElement: o } = this.options;
      if (!o) return Kt();
      const a = o.measureViewportBox();
      if (
        !(
          ((l = this.scroll) == null ? void 0 : l.wasRoot) || this.path.some(I1)
        )
      ) {
        const { scroll: c } = this.root;
        c && (pi(a.x, c.offset.x), pi(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var u;
      const a = Kt();
      if ((dn(a, o), (u = this.scroll) != null && u.wasRoot)) return a;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: f, options: h } = c;
        c !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && dn(a, o), pi(a.x, f.offset.x), pi(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const u = Kt();
      dn(u, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          mi(u, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Dr(c.latestValues) && mi(u, c.latestValues);
      }
      return Dr(this.latestValues) && mi(u, this.latestValues), u;
    }
    removeTransform(o) {
      const a = Kt();
      dn(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u];
        if (!l.instance || !Dr(l.latestValues)) continue;
        Eu(l.latestValues) && l.updateSnapshot();
        const c = Kt(),
          f = l.measurePageBox();
        dn(c, f),
          kf(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, c);
      }
      return Dr(this.latestValues) && kf(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
        (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!(!this.layout || !(c || f))) {
        if (
          ((this.resolvedRelativeTargetAt = ye.timestamp),
            !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Kt()),
              (this.relativeTargetOrigin = Kt()),
              fs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                d.layout.layoutBox
              ),
              dn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Kt()), (this.targetWithTransforms = Kt())),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Bv(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : dn(this.target, this.layout.layoutBox),
                  Mp(this.target, this.targetDelta))
                : dn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Kt()),
              (this.relativeTargetOrigin = Kt()),
              fs(this.relativeTargetOrigin, this.target, d.target),
              dn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Eu(this.parent.latestValues) ||
          Ep(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var m;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          ((m = this.parent) != null && m.isProjectionDirty)) &&
          (u = !1),
          a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
          this.resolvedRelativeTargetAt === ye.timestamp && (u = !1),
          u)
      )
        return;
      const { layout: l, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
          this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(l || c))
      )
        return;
      dn(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      Nv(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
        !o.target &&
        (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
        ((o.target = o.layout.layoutBox), (o.targetWithTransforms = Kt()));
      const { target: d } = o;
      if (!d) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ef(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ef(this.prevProjectionDelta.y, this.projectionDelta.y)),
        cs(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !If(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !If(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
        ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const u = this.getStack();
        u && u.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = di()),
        (this.projectionDelta = di()),
        (this.projectionDeltaWithTransform = di());
    }
    setAnimationOrigin(o, a = !1) {
      const u = this.snapshot,
        l = u ? u.latestValues : {},
        c = { ...this.latestValues },
        f = di();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = Kt(),
        d = u ? u.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        p = d !== m,
        g = this.getStack(),
        _ = !g || g.members.length <= 1,
        w = !!(p && !_ && this.options.crossfade === !0 && !this.path.some(O1));
      this.animationProgress = 0;
      let x;
      (this.mixTargetDelta = (b) => {
        const T = b / 1e3;
        Nf(f.x, o.x, T),
          Nf(f.y, o.y, T),
          this.setTargetDelta(f),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.layout &&
          this.relativeParent &&
          this.relativeParent.layout &&
          (fs(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            D1(this.relativeTarget, this.relativeTargetOrigin, h, T),
            x && m1(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = Kt()),
            dn(x, this.relativeTarget)),
          p &&
          ((this.animationValues = c), l1(c, l, this.latestValues, T, w, _)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var a, u, l;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (l = (u = this.resumingFrom) == null ? void 0 : u.currentAnimation) ==
        null || l.stop(),
        this.pendingAnimation &&
        (br(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ut.update(() => {
          (Ao.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ki(0)),
            (this.currentAnimation = i1(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c);
              },
              onStop: () => { },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
            (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
          void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(v1),
          this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: u,
        layout: l,
        latestValues: c,
      } = o;
      if (!(!a || !u || !l)) {
        if (
          this !== o &&
          this.layout &&
          l &&
          zp(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          u = this.target || Kt();
          const f = ze(this.layout.layoutBox.x);
          (u.x.min = o.target.x.min), (u.x.max = u.x.min + f);
          const h = ze(this.layout.layoutBox.y);
          (u.y.min = o.target.y.min), (u.y.max = u.y.min + h);
        }
        dn(a, u),
          mi(a, c),
          cs(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new g1()),
        this.sharedNodes.get(o).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity
            ? l.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const l = this.getStack();
      l && l.promote(this, u),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: u } = o;
      if (
        ((u.z ||
          u.rotate ||
          u.rotateX ||
          u.rotateY ||
          u.rotateZ ||
          u.skewX ||
          u.skewY) &&
          (a = !0),
          !a)
      )
        return;
      const l = {};
      u.z && Da("z", o, l, this.animationValues);
      for (let c = 0; c < ka.length; c++)
        Da(`rotate${ka[c]}`, o, l, this.animationValues),
          Da(`skew${ka[c]}`, o, l, this.animationValues);
      o.render();
      for (const c in l)
        o.setStaticValue(c, l[c]),
          this.animationValues && (this.animationValues[c] = l[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return _1;
      const a = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (a.opacity = ""),
          (a.pointerEvents = Co(o == null ? void 0 : o.pointerEvents) || ""),
          (a.transform = u ? u(this.latestValues, "") : "none"),
          a
        );
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        const d = {};
        return (
          this.options.layoutId &&
          ((d.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
            (d.pointerEvents = Co(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
          !Dr(this.latestValues) &&
          ((d.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          d
        );
      }
      const c = l.animationValues || l.latestValues;
      this.applyTransformsToTarget(),
        (a.transform = y1(
          this.projectionDeltaWithTransform,
          this.treeScale,
          c
        )),
        u && (a.transform = u(c, a.transform));
      const { x: f, y: h } = this.projectionDelta;
      (a.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        l.animationValues
          ? (a.opacity =
            l === this
              ? c.opacity ?? this.latestValues.opacity ?? 1
              : this.preserveOpacity
                ? this.latestValues.opacity
                : c.opacityExit)
          : (a.opacity =
            l === this
              ? c.opacity !== void 0
                ? c.opacity
                : ""
              : c.opacityExit !== void 0
                ? c.opacityExit
                : 0);
      for (const d in Ms) {
        if (c[d] === void 0) continue;
        const { correct: m, applyTo: p, isCSSVariable: g } = Ms[d],
          _ = a.transform === "none" ? c[d] : m(c[d], l);
        if (p) {
          const w = p.length;
          for (let x = 0; x < w; x++) a[p[x]] = _;
        } else
          g ? (this.options.visualElement.renderState.vars[d] = _) : (a[d] = _);
      }
      return (
        this.options.layoutId &&
        (a.pointerEvents =
          l === this
            ? Co(o == null ? void 0 : o.pointerEvents) || ""
            : "none"),
        a
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Lf),
        this.root.sharedNodes.clear();
    }
  };
}
function b1(e) {
  e.updateLayout();
}
function T1(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    s === "size"
      ? pn((f) => {
        const h = o ? t.measuredBox[f] : t.layoutBox[f],
          d = ze(h);
        (h.min = r[f].min), (h.max = h.min + d);
      })
      : zp(s, t.layoutBox, r) &&
      pn((f) => {
        const h = o ? t.measuredBox[f] : t.layoutBox[f],
          d = ze(r[f]);
        (h.max = h.min + d),
          e.relativeTarget &&
          !e.currentAnimation &&
          ((e.isProjectionDirty = !0),
            (e.relativeTarget[f].max = e.relativeTarget[f].min + d));
      });
    const a = di();
    cs(a, r, t.layoutBox);
    const u = di();
    o ? cs(u, e.applyTransform(i, !0), t.measuredBox) : cs(u, r, t.layoutBox);
    const l = !Lp(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: d } = f;
        if (h && d) {
          const m = Kt();
          fs(m, t.layoutBox, h.layoutBox);
          const p = Kt();
          fs(p, r, d.layoutBox),
            Bp(m, p) || (c = !0),
            f.options.layoutRoot &&
            ((e.relativeTarget = p),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function w1(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function S1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function P1(e) {
  e.clearSnapshot();
}
function Lf(e) {
  e.clearMeasurements();
}
function C1(e) {
  e.isLayoutDirty = !1;
}
function A1(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Bf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function E1(e) {
  e.resolveTargetDelta();
}
function M1(e) {
  e.calcProjection();
}
function R1(e) {
  e.resetSkewAndRotation();
}
function k1(e) {
  e.removeLeadSnapshot();
}
function Nf(e, t, n) {
  (e.translate = zt(t.translate, 0, n)),
    (e.scale = zt(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function jf(e, t, n, r) {
  (e.min = zt(t.min, n.min, r)), (e.max = zt(t.max, n.max, r));
}
function D1(e, t, n, r) {
  jf(e.x, t.x, n.x, r), jf(e.y, t.y, n.y, r);
}
function O1(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const V1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  $f = zf("applewebkit/") && !zf("chrome/") ? Math.round : xn;
function Uf(e) {
  (e.min = $f(e.min)), (e.max = $f(e.max));
}
function F1(e) {
  Uf(e.x), Uf(e.y);
}
function zp(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Lv(Ff(t), Ff(n), 0.2))
  );
}
function I1(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const L1 = jp({
  attachResizeListener: (e, t) => ks(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop,
  }),
  checkIsScrollRoot: () => !0,
}),
  Oa = { current: void 0 },
  $p = jp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Oa.current) {
        const e = new L1({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Oa.current = e);
      }
      return Oa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  B1 = {
    pan: { Feature: t1 },
    drag: { Feature: Jv, ProjectionNode: $p, MeasureLayout: Vp },
  };
function Wf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && Ut.postRender(() => s(t, Gs(t)));
}
class N1 extends Cr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = h_(
        t,
        (n, r) => (Wf(this.node, r, "Start"), (i) => Wf(this.node, i, "End"))
      ));
  }
  unmount() { }
}
class j1 extends Cr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
  }
  mount() {
    this.unmount = Us(
      ks(this.node.current, "focus", () => this.onFocus()),
      ks(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() { }
}
function Yf(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && Ut.postRender(() => s(t, Gs(t)));
}
class z1 extends Cr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = g_(
        t,
        (n, r) => (
          Yf(this.node, r, "Start"),
          (i, { success: s }) => Yf(this.node, i, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() { }
}
const ku = new WeakMap(),
  Va = new WeakMap(),
  $1 = (e) => {
    const t = ku.get(e.target);
    t && t(e);
  },
  U1 = (e) => {
    e.forEach($1);
  };
function W1({ root: e, ...t }) {
  const n = e || document;
  Va.has(n) || Va.set(n, {});
  const r = Va.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(U1, { root: e, ...t })), r[i];
}
function Y1(e, t, n) {
  const r = W1(t);
  return (
    ku.set(e, n),
    r.observe(e),
    () => {
      ku.delete(e), r.unobserve(e);
    }
  );
}
const G1 = { some: 0, all: 1 };
class X1 extends Cr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : G1[i],
      },
      a = (u) => {
        const { isIntersecting: l } = u;
        if (
          this.isInView === l ||
          ((this.isInView = l), s && !l && this.hasEnteredView)
        )
          return;
        l && (this.hasEnteredView = !0),
          this.node.animationState &&
          this.node.animationState.setActive("whileInView", l);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          h = l ? c : f;
        h && h(u);
      };
    return Y1(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(H1(t, n)) && this.startObserver();
  }
  unmount() { }
}
function H1({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const q1 = {
  inView: { Feature: X1 },
  tap: { Feature: z1 },
  focus: { Feature: j1 },
  hover: { Feature: N1 },
},
  K1 = { layout: { ProjectionNode: $p, MeasureLayout: Vp } },
  Du = { current: null },
  Up = { current: !1 };
function Z1() {
  if (((Up.current = !0), !!fl))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Du.current = e.matches);
      e.addListener(t), t();
    } else Du.current = !1;
}
const Q1 = new WeakMap();
function J1(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (Me(i)) e.addValue(r, i);
    else if (Me(s)) e.addValue(r, ki(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ki(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Gf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class tx {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = El),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = Ye.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), Ut.render(this.render, !1, !0));
      });
    const { latestValues: u, renderState: l } = o;
    (this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = da(n)),
      (this.isVariantNode = cp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const d = f[h];
      u[h] !== void 0 && Me(d) && d.set(u[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Q1.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
      this.isVariantNode &&
      !this.isControllingVariants &&
      (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Up.current || Z1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Du.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      br(this.notifyUpdate),
      br(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Ui.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      (this.latestValues[t] = a),
        this.props.onUpdate && Ut.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0);
    }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Di) {
      const n = Di[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
          this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Kt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Gf.length; r++) {
      const i = Gf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = J1(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
      n !== void 0 &&
      ((r = ki(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
        this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
      (typeof r == "string" && (_d(r) || xd(r))
        ? (r = parseFloat(r))
        : !v_(r) && Tr.test(n) && (r = ep(t, n)),
        this.setBaseTarget(t, Me(r) ? r.get() : r)),
      Me(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = zl(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Me(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new gl()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Wp extends tx {
  constructor() {
    super(...arguments), (this.KeyframeResolver = a_);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Yp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
function ex(e) {
  return window.getComputedStyle(e);
}
class nx extends Wp {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Yp);
  }
  readValueFromInstance(t, n) {
    var r;
    if (Ui.has(n))
      return (r = this.projection) != null && r.isProjecting ? vu(n) : Cy(t, n);
    {
      const i = ex(t),
        s = (vl(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Rp(t, n);
  }
  build(t, n, r) {
    Bl(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $l(t, n, r);
  }
}
const Gp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function rx(e, t, n, r) {
  Yp(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Gp.has(i) ? i : Ll(i), t.attrs[i]);
}
class ix extends Wp {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Kt);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ui.has(n)) {
      const r = tp(n);
      return (r && r.default) || 0;
    }
    return (n = Gp.has(n) ? n : Ll(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xp(t, n, r);
  }
  build(t, n, r) {
    gp(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    rx(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = _p(t.tagName)), super.mount(t);
  }
}
const sx = (e, t) =>
  jl(e) ? new ix(t) : new nx(t, { allowProjection: e !== I.Fragment }),
  ox = rv({ ...Mv, ...q1, ...B1, ...K1 }, sx),
  pT = E_(ox);
var Fa, Xf;
function mT() {
  if (Xf) return Fa;
  Xf = 1;
  var e = "Expected a function",
    t = NaN,
    n = "[object Symbol]",
    r = /^\s+|\s+$/g,
    i = /^[-+]0x[0-9a-f]+$/i,
    s = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    a = parseInt,
    u = typeof Ks == "object" && Ks && Ks.Object === Object && Ks,
    l = typeof self == "object" && self && self.Object === Object && self,
    c = u || l || Function("return this")(),
    f = Object.prototype,
    h = f.toString,
    d = Math.max,
    m = Math.min,
    p = function () {
      return c.Date.now();
    };
  function g(y, v, P) {
    var E,
      M,
      j,
      D,
      z,
      N,
      G = 0,
      k = !1,
      R = !1,
      V = !0;
    if (typeof y != "function") throw new TypeError(e);
    (v = T(v) || 0),
      w(P) &&
      ((k = !!P.leading),
        (R = "maxWait" in P),
        (j = R ? d(T(P.maxWait) || 0, v) : j),
        (V = "trailing" in P ? !!P.trailing : V));
    function L(Z) {
      var pt = E,
        Xt = M;
      return (E = M = void 0), (G = Z), (D = y.apply(Xt, pt)), D;
    }
    function S(Z) {
      return (G = Z), (z = setTimeout(Ct, v)), k ? L(Z) : D;
    }
    function J(Z) {
      var pt = Z - N,
        Xt = Z - G,
        kt = v - pt;
      return R ? m(kt, j - Xt) : kt;
    }
    function ft(Z) {
      var pt = Z - N,
        Xt = Z - G;
      return N === void 0 || pt >= v || pt < 0 || (R && Xt >= j);
    }
    function Ct() {
      var Z = p();
      if (ft(Z)) return tt(Z);
      z = setTimeout(Ct, J(Z));
    }
    function tt(Z) {
      return (z = void 0), V && E ? L(Z) : ((E = M = void 0), D);
    }
    function _t() {
      z !== void 0 && clearTimeout(z), (G = 0), (E = N = M = z = void 0);
    }
    function At() {
      return z === void 0 ? D : tt(p());
    }
    function vt() {
      var Z = p(),
        pt = ft(Z);
      if (((E = arguments), (M = this), (N = Z), pt)) {
        if (z === void 0) return S(N);
        if (R) return (z = setTimeout(Ct, v)), L(N);
      }
      return z === void 0 && (z = setTimeout(Ct, v)), D;
    }
    return (vt.cancel = _t), (vt.flush = At), vt;
  }
  function _(y, v, P) {
    var E = !0,
      M = !0;
    if (typeof y != "function") throw new TypeError(e);
    return (
      w(P) &&
      ((E = "leading" in P ? !!P.leading : E),
        (M = "trailing" in P ? !!P.trailing : M)),
      g(y, v, { leading: E, maxWait: v, trailing: M })
    );
  }
  function w(y) {
    var v = typeof y;
    return !!y && (v == "object" || v == "function");
  }
  function x(y) {
    return !!y && typeof y == "object";
  }
  function b(y) {
    return typeof y == "symbol" || (x(y) && h.call(y) == n);
  }
  function T(y) {
    if (typeof y == "number") return y;
    if (b(y)) return t;
    if (w(y)) {
      var v = typeof y.valueOf == "function" ? y.valueOf() : y;
      y = w(v) ? v + "" : v;
    }
    if (typeof y != "string") return y === 0 ? y : +y;
    y = y.replace(r, "");
    var P = s.test(y);
    return P || o.test(y) ? a(y.slice(2), P ? 2 : 8) : i.test(y) ? t : +y;
  }
  return (Fa = _), Fa;
}
var Ia = { exports: {} },
  La,
  Hf;
function ax() {
  if (Hf) return La;
  Hf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (La = e), La;
}
var Ba, qf;
function ux() {
  if (qf) return Ba;
  qf = 1;
  var e = ax();
  function t() { }
  function n() { }
  return (
    (n.resetWarningCache = t),
    (Ba = function () {
      function r(o, a, u, l, c, f) {
        if (f !== e) {
          var h = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((h.name = "Invariant Violation"), h);
        }
      }
      r.isRequired = r;
      function i() {
        return r;
      }
      var s = {
        array: r,
        bigint: r,
        bool: r,
        func: r,
        number: r,
        object: r,
        string: r,
        symbol: r,
        any: r,
        arrayOf: i,
        element: r,
        elementType: r,
        instanceOf: i,
        node: r,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: n,
        resetWarningCache: t,
      };
      return (s.PropTypes = s), s;
    }),
    Ba
  );
}
var Kf;
function gT() {
  return Kf || ((Kf = 1), (Ia.exports = ux()())), Ia.exports;
}
var Na = { exports: {} },
  ja = {},
  za = { exports: {} },
  $a = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf;
function lx() {
  if (Zf) return $a;
  Zf = 1;
  var e = Gh();
  function t(f, h) {
    return (f === h && (f !== 0 || 1 / f === 1 / h)) || (f !== f && h !== h);
  }
  var n = typeof Object.is == "function" ? Object.is : t,
    r = e.useState,
    i = e.useEffect,
    s = e.useLayoutEffect,
    o = e.useDebugValue;
  function a(f, h) {
    var d = h(),
      m = r({ inst: { value: d, getSnapshot: h } }),
      p = m[0].inst,
      g = m[1];
    return (
      s(
        function () {
          (p.value = d), (p.getSnapshot = h), u(p) && g({ inst: p });
        },
        [f, d, h]
      ),
      i(
        function () {
          return (
            u(p) && g({ inst: p }),
            f(function () {
              u(p) && g({ inst: p });
            })
          );
        },
        [f]
      ),
      o(d),
      d
    );
  }
  function u(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var d = h();
      return !n(f, d);
    } catch {
      return !0;
    }
  }
  function l(f, h) {
    return h();
  }
  var c =
    typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
      ? l
      : a;
  return (
    ($a.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : c),
    $a
  );
}
var Qf;
function cx() {
  return Qf || ((Qf = 1), (za.exports = lx())), za.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf;
function fx() {
  if (Jf) return ja;
  Jf = 1;
  var e = Gh(),
    t = cx();
  function n(l, c) {
    return (l === c && (l !== 0 || 1 / l === 1 / c)) || (l !== l && c !== c);
  }
  var r = typeof Object.is == "function" ? Object.is : n,
    i = t.useSyncExternalStore,
    s = e.useRef,
    o = e.useEffect,
    a = e.useMemo,
    u = e.useDebugValue;
  return (
    (ja.useSyncExternalStoreWithSelector = function (l, c, f, h, d) {
      var m = s(null);
      if (m.current === null) {
        var p = { hasValue: !1, value: null };
        m.current = p;
      } else p = m.current;
      m = a(
        function () {
          function _(y) {
            if (!w) {
              if (((w = !0), (x = y), (y = h(y)), d !== void 0 && p.hasValue)) {
                var v = p.value;
                if (d(v, y)) return (b = v);
              }
              return (b = y);
            }
            if (((v = b), r(x, y))) return v;
            var P = h(y);
            return d !== void 0 && d(v, P) ? ((x = y), v) : ((x = y), (b = P));
          }
          var w = !1,
            x,
            b,
            T = f === void 0 ? null : f;
          return [
            function () {
              return _(c());
            },
            T === null
              ? void 0
              : function () {
                return _(T());
              },
          ];
        },
        [c, f, h, d]
      );
      var g = i(l, m[0], m[1]);
      return (
        o(
          function () {
            (p.hasValue = !0), (p.value = g);
          },
          [g]
        ),
        u(g),
        g
      );
    }),
    ja
  );
}
var th;
function hx() {
  return th || ((th = 1), (Na.exports = fx())), Na.exports;
}
var dx = hx();
const px = xg(dx),
  eh = (e) => {
    let t;
    const n = new Set(),
      r = (l, c) => {
        const f = typeof l == "function" ? l(t) : l;
        if (!Object.is(f, t)) {
          const h = t;
          (t =
            c ?? (typeof f != "object" || f === null)
              ? f
              : Object.assign({}, t, f)),
            n.forEach((d) => d(t, h));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => u,
        subscribe: (l) => (n.add(l), () => n.delete(l)),
      },
      u = (t = e(r, i, a));
    return a;
  },
  mx = (e) => (e ? eh(e) : eh),
  { useSyncExternalStoreWithSelector: gx } = px,
  yx = (e) => e;
function _x(e, t = yx, n) {
  const r = gx(e.subscribe, e.getState, e.getInitialState, t, n);
  return Pi.useDebugValue(r), r;
}
const nh = (e, t) => {
  const n = mx(e),
    r = (i, s = t) => _x(n, i, s);
  return Object.assign(r, n), r;
},
  yT = (e, t) => (e ? nh(e, t) : nh);
var Ua = { exports: {} },
  Wa = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rh;
function vx() {
  return (
    rh ||
    ((rh = 1),
      (function (e) {
        function t(k, R) {
          var V = k.length;
          k.push(R);
          t: for (; 0 < V;) {
            var L = (V - 1) >>> 1,
              S = k[L];
            if (0 < i(S, R)) (k[L] = R), (k[V] = S), (V = L);
            else break t;
          }
        }
        function n(k) {
          return k.length === 0 ? null : k[0];
        }
        function r(k) {
          if (k.length === 0) return null;
          var R = k[0],
            V = k.pop();
          if (V !== R) {
            k[0] = V;
            t: for (var L = 0, S = k.length, J = S >>> 1; L < J;) {
              var ft = 2 * (L + 1) - 1,
                Ct = k[ft],
                tt = ft + 1,
                _t = k[tt];
              if (0 > i(Ct, V))
                tt < S && 0 > i(_t, Ct)
                  ? ((k[L] = _t), (k[tt] = V), (L = tt))
                  : ((k[L] = Ct), (k[ft] = V), (L = ft));
              else if (tt < S && 0 > i(_t, V))
                (k[L] = _t), (k[tt] = V), (L = tt);
              else break t;
            }
          }
          return R;
        }
        function i(k, R) {
          var V = k.sortIndex - R.sortIndex;
          return V !== 0 ? V : k.id - R.id;
        }
        if (
          ((e.unstable_now = void 0),
            typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var s = performance;
          e.unstable_now = function () {
            return s.now();
          };
        } else {
          var o = Date,
            a = o.now();
          e.unstable_now = function () {
            return o.now() - a;
          };
        }
        var u = [],
          l = [],
          c = 1,
          f = null,
          h = 3,
          d = !1,
          m = !1,
          p = !1,
          g = typeof setTimeout == "function" ? setTimeout : null,
          _ = typeof clearTimeout == "function" ? clearTimeout : null,
          w = typeof setImmediate < "u" ? setImmediate : null;
        function x(k) {
          for (var R = n(l); R !== null;) {
            if (R.callback === null) r(l);
            else if (R.startTime <= k)
              r(l), (R.sortIndex = R.expirationTime), t(u, R);
            else break;
            R = n(l);
          }
        }
        function b(k) {
          if (((p = !1), x(k), !m))
            if (n(u) !== null) (m = !0), N();
            else {
              var R = n(l);
              R !== null && G(b, R.startTime - k);
            }
        }
        var T = !1,
          y = -1,
          v = 5,
          P = -1;
        function E() {
          return !(e.unstable_now() - P < v);
        }
        function M() {
          if (T) {
            var k = e.unstable_now();
            P = k;
            var R = !0;
            try {
              t: {
                (m = !1), p && ((p = !1), _(y), (y = -1)), (d = !0);
                var V = h;
                try {
                  e: {
                    for (
                      x(k), f = n(u);
                      f !== null && !(f.expirationTime > k && E());

                    ) {
                      var L = f.callback;
                      if (typeof L == "function") {
                        (f.callback = null), (h = f.priorityLevel);
                        var S = L(f.expirationTime <= k);
                        if (((k = e.unstable_now()), typeof S == "function")) {
                          (f.callback = S), x(k), (R = !0);
                          break e;
                        }
                        f === n(u) && r(u), x(k);
                      } else r(u);
                      f = n(u);
                    }
                    if (f !== null) R = !0;
                    else {
                      var J = n(l);
                      J !== null && G(b, J.startTime - k), (R = !1);
                    }
                  }
                  break t;
                } finally {
                  (f = null), (h = V), (d = !1);
                }
                R = void 0;
              }
            } finally {
              R ? j() : (T = !1);
            }
          }
        }
        var j;
        if (typeof w == "function")
          j = function () {
            w(M);
          };
        else if (typeof MessageChannel < "u") {
          var D = new MessageChannel(),
            z = D.port2;
          (D.port1.onmessage = M),
            (j = function () {
              z.postMessage(null);
            });
        } else
          j = function () {
            g(M, 0);
          };
        function N() {
          T || ((T = !0), j());
        }
        function G(k, R) {
          y = g(function () {
            k(e.unstable_now());
          }, R);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            m || d || ((m = !0), N());
          }),
          (e.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
              : (v = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(u);
          }),
          (e.unstable_next = function (k) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = h;
            }
            var V = h;
            h = R;
            try {
              return k();
            } finally {
              h = V;
            }
          }),
          (e.unstable_pauseExecution = function () { }),
          (e.unstable_requestPaint = function () { }),
          (e.unstable_runWithPriority = function (k, R) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var V = h;
            h = k;
            try {
              return R();
            } finally {
              h = V;
            }
          }),
          (e.unstable_scheduleCallback = function (k, R, V) {
            var L = e.unstable_now();
            switch (
            (typeof V == "object" && V !== null
              ? ((V = V.delay),
                (V = typeof V == "number" && 0 < V ? L + V : L))
              : (V = L),
              k)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = V + S),
              (k = {
                id: c++,
                callback: R,
                priorityLevel: k,
                startTime: V,
                expirationTime: S,
                sortIndex: -1,
              }),
              V > L
                ? ((k.sortIndex = V),
                  t(l, k),
                  n(u) === null &&
                  k === n(l) &&
                  (p ? (_(y), (y = -1)) : (p = !0), G(b, V - L)))
                : ((k.sortIndex = S), t(u, k), m || d || ((m = !0), N())),
              k
            );
          }),
          (e.unstable_shouldYield = E),
          (e.unstable_wrapCallback = function (k) {
            var R = h;
            return function () {
              var V = h;
              h = R;
              try {
                return k.apply(this, arguments);
              } finally {
                h = V;
              }
            };
          });
      })(Wa)),
    Wa
  );
}
var ih;
function xx() {
  return ih || ((ih = 1), (Ua.exports = vx())), Ua.exports;
}
var _T = xx();
function Xp(e, t, n) {
  if (!e) return;
  if (n(e) === !0) return e;
  let r = t ? e.return : e.child;
  for (; r;) {
    const i = Xp(r, t, n);
    if (i) return i;
    r = t ? null : r.sibling;
  }
}
function Hp(e) {
  try {
    return Object.defineProperties(e, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() { },
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() { },
      },
    });
  } catch {
    return e;
  }
}
const Wl = Hp(I.createContext(null));
class bx extends I.Component {
  render() {
    return I.createElement(
      Wl.Provider,
      { value: this._reactInternals },
      this.props.children
    );
  }
}
function Tx() {
  const e = I.useContext(Wl);
  if (e === null)
    throw new Error(
      "its-fine: useFiber must be called within a <FiberProvider />!"
    );
  const t = I.useId();
  return I.useMemo(() => {
    for (const n of [e, e == null ? void 0 : e.alternate]) {
      if (!n) continue;
      const r = Xp(n, !1, (i) => {
        let s = i.memoizedState;
        for (; s;) {
          if (s.memoizedState === t) return !0;
          s = s.next;
        }
      });
      if (r) return r;
    }
  }, [e, t]);
}
const wx = Symbol.for("react.context"),
  Sx = (e) =>
    e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === wx;
function Px() {
  const e = Tx(),
    [t] = I.useState(() => new Map());
  t.clear();
  let n = e;
  for (; n;) {
    const r = n.type;
    Sx(r) && r !== Wl && !t.has(r) && t.set(r, I.use(Hp(r))), (n = n.return);
  }
  return t;
}
function vT() {
  const e = Px();
  return I.useMemo(
    () =>
      Array.from(e.keys()).reduce(
        (t, n) => (r) =>
          I.createElement(
            t,
            null,
            I.createElement(n.Provider, { ...r, value: e.get(n) })
          ),
        (t) => I.createElement(bx, { ...t })
      ),
    [e]
  );
}
function sh() {
  return (
    (sh = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    sh.apply(null, arguments)
  );
}
function Kn(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function qp(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ln = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: { lineHeight: "" },
},
  Oi = { duration: 0.5, overwrite: !1, delay: 0 },
  Yl,
  ve,
  Lt,
  Wn = 1e8,
  Re = 1 / Wn,
  Ou = Math.PI * 2,
  Cx = Ou / 4,
  Ax = 0,
  Kp = Math.sqrt,
  Ex = Math.cos,
  Mx = Math.sin,
  de = function (t) {
    return typeof t == "string";
  },
  Gt = function (t) {
    return typeof t == "function";
  },
  ir = function (t) {
    return typeof t == "number";
  },
  Gl = function (t) {
    return typeof t > "u";
  },
  Gn = function (t) {
    return typeof t == "object";
  },
  Ge = function (t) {
    return t !== !1;
  },
  Xl = function () {
    return typeof window < "u";
  },
  ro = function (t) {
    return Gt(t) || de(t);
  },
  Zp =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () { },
  ke = Array.isArray,
  Vu = /(?:-?\.?\d|\.)+/gi,
  Qp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  gi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ya = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Jp = /[+-]=-?[.\d]+/,
  tm = /[^,'"\[\]\s]+/gi,
  Rx = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  jt,
  Vn,
  Fu,
  Hl,
  cn = {},
  Go = {},
  em,
  nm = function (t) {
    return (Go = Vi(t, cn)) && Ke;
  },
  ql = function (t, n) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Ds = function (t, n) {
    return !n && console.warn(t);
  },
  rm = function (t, n) {
    return (t && (cn[t] = n) && Go && (Go[t] = n)) || cn;
  },
  Os = function () {
    return 0;
  },
  kx = { suppressEvents: !0, isStart: !0, kill: !1 },
  Eo = { suppressEvents: !0, kill: !1 },
  Dx = { suppressEvents: !0 },
  Kl = {},
  _r = [],
  Iu = {},
  im,
  rn = {},
  Ga = {},
  oh = 30,
  Mo = [],
  Zl = "",
  Ql = function (t) {
    var n = t[0],
      r,
      i;
    if ((Gn(n) || Gt(n) || (t = [t]), !(r = (n._gsap || {}).harness))) {
      for (i = Mo.length; i-- && !Mo[i].targetTest(n););
      r = Mo[i];
    }
    for (i = t.length; i--;)
      (t[i] && (t[i]._gsap || (t[i]._gsap = new Em(t[i], r)))) ||
        t.splice(i, 1);
    return t;
  },
  Gr = function (t) {
    return t._gsap || Ql(_n(t))[0]._gsap;
  },
  sm = function (t, n, r) {
    return (r = t[n]) && Gt(r)
      ? t[n]()
      : (Gl(r) && t.getAttribute && t.getAttribute(n)) || r;
  },
  Xe = function (t, n) {
    return (t = t.split(",")).forEach(n) || t;
  },
  Zt = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  ne = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  vi = function (t, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (t = parseFloat(t)),
      r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
    );
  },
  Ox = function (t, n) {
    for (var r = n.length, i = 0; t.indexOf(n[i]) < 0 && ++i < r;);
    return i < r;
  },
  Xo = function () {
    var t = _r.length,
      n = _r.slice(0),
      r,
      i;
    for (Iu = {}, _r.length = 0, r = 0; r < t; r++)
      (i = n[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  Jl = function (t) {
    return !!(t._initted || t._startAt || t.add);
  },
  om = function (t, n, r, i) {
    _r.length && !ve && Xo(),
      t.render(n, r, !!(ve && n < 0 && Jl(t))),
      _r.length && !ve && Xo();
  },
  am = function (t) {
    var n = parseFloat(t);
    return (n || n === 0) && (t + "").match(tm).length < 2
      ? n
      : de(t)
        ? t.trim()
        : t;
  },
  um = function (t) {
    return t;
  },
  fn = function (t, n) {
    for (var r in n) r in t || (t[r] = n[r]);
    return t;
  },
  Vx = function (t) {
    return function (n, r) {
      for (var i in r)
        i in n || (i === "duration" && t) || i === "ease" || (n[i] = r[i]);
    };
  },
  Vi = function (t, n) {
    for (var r in n) t[r] = n[r];
    return t;
  },
  ah = function e(t, n) {
    for (var r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (t[r] = Gn(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  Ho = function (t, n) {
    var r = {},
      i;
    for (i in t) i in n || (r[i] = t[i]);
    return r;
  },
  hs = function (t) {
    var n = t.parent || jt,
      r = t.keyframes ? Vx(ke(t.keyframes)) : fn;
    if (Ge(t.inherit))
      for (; n;) r(t, n.vars.defaults), (n = n.parent || n._dp);
    return t;
  },
  Fx = function (t, n) {
    for (var r = t.length, i = r === n.length; i && r-- && t[r] === n[r];);
    return r < 0;
  },
  lm = function (t, n, r, i, s) {
    var o = t[i],
      a;
    if (s) for (a = n[s]; o && o[s] > a;) o = o._prev;
    return (
      o ? ((n._next = o._next), (o._next = n)) : ((n._next = t[r]), (t[r] = n)),
      n._next ? (n._next._prev = n) : (t[i] = n),
      (n._prev = o),
      (n.parent = n._dp = t),
      n
    );
  },
  pa = function (t, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = n._prev,
      o = n._next;
    s ? (s._next = o) : t[r] === n && (t[r] = o),
      o ? (o._prev = s) : t[i] === n && (t[i] = s),
      (n._next = n._prev = n.parent = null);
  },
  wr = function (t, n) {
    t.parent &&
      (!n || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  },
  Xr = function (t, n) {
    if (t && (!n || n._end > t._dur || n._start < 0))
      for (var r = t; r;) (r._dirty = 1), (r = r.parent);
    return t;
  },
  Ix = function (t) {
    for (var n = t.parent; n && n.parent;)
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return t;
  },
  Lu = function (t, n, r, i) {
    return (
      t._startAt &&
      (ve
        ? t._startAt.revert(Eo)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
        t._startAt.render(n, !0, i))
    );
  },
  Lx = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  uh = function (t) {
    return t._repeat ? Fi(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Fi = function (t, n) {
    var r = Math.floor((t = ne(t / n)));
    return t && r === t ? r - 1 : r;
  },
  qo = function (t, n) {
    return (
      (t - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  ma = function (t) {
    return (t._end = ne(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || Re) || 0)
    ));
  },
  ga = function (t, n) {
    var r = t._dp;
    return (
      r &&
      r.smoothChildTiming &&
      t._ts &&
      ((t._start = ne(
        r._time -
        (t._ts > 0
          ? n / t._ts
          : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)
      )),
        ma(t),
        r._dirty || Xr(r, t)),
      t
    );
  },
  cm = function (t, n) {
    var r;
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < t._time && (n._dur || !n.add))) &&
        ((r = qo(t.rawTime(), n)),
          (!n._dur || Xs(0, n.totalDuration(), r) - n._tTime > Re) &&
          n.render(r, !0)),
        Xr(t, n)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp;)
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -1e-8;
    }
  },
  Bn = function (t, n, r, i) {
    return (
      n.parent && wr(n),
      (n._start = ne(
        (ir(r) ? r : r || t !== jt ? mn(t, r, n) : t._time) + n._delay
      )),
      (n._end = ne(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      lm(t, n, "_first", "_last", t._sort ? "_start" : 0),
      Bu(n) || (t._recent = n),
      i || cm(t, n),
      t._ts < 0 && ga(t, t._tTime),
      t
    );
  },
  fm = function (t, n) {
    return (
      (cn.ScrollTrigger || ql("scrollTrigger", n)) &&
      cn.ScrollTrigger.create(n, t)
    );
  },
  hm = function (t, n, r, i, s) {
    if ((ec(t, n, s), !t._initted)) return 1;
    if (
      !r &&
      t._pt &&
      !ve &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      im !== on.frame
    )
      return _r.push(t), (t._lazy = [s, i]), 1;
  },
  Bx = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  Bu = function (t) {
    var n = t.data;
    return n === "isFromStart" || n === "isStart";
  },
  Nx = function (t, n, r, i) {
    var s = t.ratio,
      o =
        n < 0 ||
          (!n &&
            ((!t._start && Bx(t) && !(!t._initted && Bu(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !Bu(t))))
          ? 0
          : 1,
      a = t._rDelay,
      u = 0,
      l,
      c,
      f;
    if (
      (a &&
        t._repeat &&
        ((u = Xs(0, t._tDur, n)),
          (c = Fi(u, a)),
          t._yoyo && c & 1 && (o = 1 - o),
          c !== Fi(t._tTime, a) &&
          ((s = 1 - o), t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== s || ve || i || t._zTime === Re || (!n && t._zTime))
    ) {
      if (!t._initted && hm(t, n, i, r, u)) return;
      for (
        f = t._zTime,
        t._zTime = n || (r ? Re : 0),
        r || (r = n && !f),
        t.ratio = o,
        t._from && (o = 1 - o),
        t._time = 0,
        t._tTime = u,
        l = t._pt;
        l;

      )
        l.r(o, l.d), (l = l._next);
      n < 0 && Lu(t, n, r, !0),
        t._onUpdate && !r && un(t, "onUpdate"),
        u && t._repeat && !r && t.parent && un(t, "onRepeat"),
        (n >= t._tDur || n < 0) &&
        t.ratio === o &&
        (o && wr(t, 1),
          !r &&
          !ve &&
          (un(t, o ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = n);
  },
  jx = function (t, n, r) {
    var i;
    if (r > n)
      for (i = t._first; i && i._start <= r;) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = t._last; i && i._start >= r;) {
        if (i.data === "isPause" && i._start < n) return i;
        i = i._prev;
      }
  },
  Ii = function (t, n, r, i) {
    var s = t._repeat,
      o = ne(n) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !i && (t._time *= o / t._dur),
      (t._dur = o),
      (t._tDur = s ? (s < 0 ? 1e10 : ne(o * (s + 1) + t._rDelay * s)) : o),
      a > 0 && !i && ga(t, (t._tTime = t._tDur * a)),
      t.parent && ma(t),
      r || Xr(t.parent, t),
      t
    );
  },
  lh = function (t) {
    return t instanceof Ne ? Xr(t) : Ii(t, t._dur);
  },
  zx = { _start: 0, endTime: Os, totalDuration: Os },
  mn = function e(t, n, r) {
    var i = t.labels,
      s = t._recent || zx,
      o = t.duration() >= Wn ? s.endTime(!1) : t._dur,
      a,
      u,
      l;
    return de(n) && (isNaN(n) || n in i)
      ? ((u = n.charAt(0)),
        (l = n.substr(-1) === "%"),
        (a = n.indexOf("=")),
        u === "<" || u === ">"
          ? (a >= 0 && (n = n.replace(/=/, "")),
            (u === "<" ? s._start : s.endTime(s._repeat >= 0)) +
            (parseFloat(n.substr(1)) || 0) *
            (l ? (a < 0 ? s : r).totalDuration() / 100 : 1))
          : a < 0
            ? (n in i || (i[n] = o), i[n])
            : ((u = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
              l && r && (u = (u / 100) * (ke(r) ? r[0] : r).totalDuration()),
              a > 1 ? e(t, n.substr(0, a - 1), r) + u : o + u))
      : n == null
        ? o
        : +n;
  },
  ds = function (t, n, r) {
    var i = ir(n[1]),
      s = (i ? 2 : 1) + (t < 2 ? 0 : 1),
      o = n[s],
      a,
      u;
    if ((i && (o.duration = n[1]), (o.parent = r), t)) {
      for (a = o, u = r; u && !("immediateRender" in a);)
        (a = u.vars.defaults || {}), (u = Ge(u.vars.inherit) && u.parent);
      (o.immediateRender = Ge(a.immediateRender)),
        t < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1]);
    }
    return new ee(n[0], o, n[s + 1]);
  },
  Ar = function (t, n) {
    return t || t === 0 ? n(t) : n;
  },
  Xs = function (t, n, r) {
    return r < t ? t : r > n ? n : r;
  },
  Ae = function (t, n) {
    return !de(t) || !(n = Rx.exec(t)) ? "" : n[1];
  },
  $x = function (t, n, r) {
    return Ar(r, function (i) {
      return Xs(t, n, i);
    });
  },
  Nu = [].slice,
  dm = function (t, n) {
    return (
      t &&
      Gn(t) &&
      "length" in t &&
      ((!n && !t.length) || (t.length - 1 in t && Gn(t[0]))) &&
      !t.nodeType &&
      t !== Vn
    );
  },
  Ux = function (t, n, r) {
    return (
      r === void 0 && (r = []),
      t.forEach(function (i) {
        var s;
        return (de(i) && !n) || dm(i, 1)
          ? (s = r).push.apply(s, _n(i))
          : r.push(i);
      }) || r
    );
  },
  _n = function (t, n, r) {
    return Lt && !n && Lt.selector
      ? Lt.selector(t)
      : de(t) && !r && (Fu || !Li())
        ? Nu.call((n || Hl).querySelectorAll(t), 0)
        : ke(t)
          ? Ux(t, r)
          : dm(t)
            ? Nu.call(t, 0)
            : t
              ? [t]
              : [];
  },
  ju = function (t) {
    return (
      (t = _n(t)[0] || Ds("Invalid scope") || {}),
      function (n) {
        var r = t.current || t.nativeElement || t;
        return _n(
          n,
          r.querySelectorAll
            ? r
            : r === t
              ? Ds("Invalid scope") || Hl.createElement("div")
              : t
        );
      }
    );
  },
  pm = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  mm = function (t) {
    if (Gt(t)) return t;
    var n = Gn(t) ? t : { each: t },
      r = Hr(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      a = i > 0 && i < 1,
      u = isNaN(i) || a,
      l = n.axis,
      c = i,
      f = i;
    return (
      de(i)
        ? (c = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && u && ((c = i[0]), (f = i[1])),
      function (h, d, m) {
        var p = (m || n).length,
          g = o[p],
          _,
          w,
          x,
          b,
          T,
          y,
          v,
          P,
          E;
        if (!g) {
          if (((E = n.grid === "auto" ? 0 : (n.grid || [1, Wn])[1]), !E)) {
            for (
              v = -1e8;
              v < (v = m[E++].getBoundingClientRect().left) && E < p;

            );
            E < p && E--;
          }
          for (
            g = o[p] = [],
            _ = u ? Math.min(E, p) * c - 0.5 : i % E,
            w = E === Wn ? 0 : u ? (p * f) / E - 0.5 : (i / E) | 0,
            v = 0,
            P = Wn,
            y = 0;
            y < p;
            y++
          )
            (x = (y % E) - _),
              (b = w - ((y / E) | 0)),
              (g[y] = T = l ? Math.abs(l === "y" ? b : x) : Kp(x * x + b * b)),
              T > v && (v = T),
              T < P && (P = T);
          i === "random" && pm(g),
            (g.max = v - P),
            (g.min = P),
            (g.v = p =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                (E > p
                  ? p - 1
                  : l
                    ? l === "y"
                      ? p / E
                      : E
                    : Math.max(E, p / E)) ||
                0) * (i === "edges" ? -1 : 1)),
            (g.b = p < 0 ? s - p : s),
            (g.u = Ae(n.amount || n.each) || 0),
            (r = r && p < 0 ? Pm(r) : r);
        }
        return (
          (p = (g[h] - g.min) / g.max || 0),
          ne(g.b + (r ? r(p) : p) * g.v) + g.u
        );
      }
    );
  },
  zu = function (t) {
    var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (r) {
      var i = ne(Math.round(parseFloat(r) / t) * t * n);
      return (i - (i % 1)) / n + (ir(r) ? 0 : Ae(r));
    };
  },
  gm = function (t, n) {
    var r = ke(t),
      i,
      s;
    return (
      !r &&
      Gn(t) &&
      ((i = r = t.radius || Wn),
        t.values
          ? ((t = _n(t.values)), (s = !ir(t[0])) && (i *= i))
          : (t = zu(t.increment))),
      Ar(
        n,
        r
          ? Gt(t)
            ? function (o) {
              return (s = t(o)), Math.abs(s - o) <= i ? s : o;
            }
            : function (o) {
              for (
                var a = parseFloat(s ? o.x : o),
                u = parseFloat(s ? o.y : 0),
                l = Wn,
                c = 0,
                f = t.length,
                h,
                d;
                f--;

              )
                s
                  ? ((h = t[f].x - a), (d = t[f].y - u), (h = h * h + d * d))
                  : (h = Math.abs(t[f] - a)),
                  h < l && ((l = h), (c = f));
              return (
                (c = !i || l <= i ? t[c] : o),
                s || c === o || ir(o) ? c : c + Ae(o)
              );
            }
          : zu(t)
      )
    );
  },
  ym = function (t, n, r, i) {
    return Ar(ke(t) ? !n : r === !0 ? !!(r = 0) : !i, function () {
      return ke(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
        (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
        Math.floor(
          Math.round((t - r / 2 + Math.random() * (n - t + r * 0.99)) / r) *
          r *
          i
        ) / i;
    });
  },
  Wx = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (s, o) {
        return o(s);
      }, i);
    };
  },
  Yx = function (t, n) {
    return function (r) {
      return t(parseFloat(r)) + (n || Ae(r));
    };
  },
  Gx = function (t, n, r) {
    return vm(t, n, 0, 1, r);
  },
  _m = function (t, n, r) {
    return Ar(r, function (i) {
      return t[~~n(i)];
    });
  },
  Xx = function e(t, n, r) {
    var i = n - t;
    return ke(t)
      ? _m(t, e(0, t.length), n)
      : Ar(r, function (s) {
        return ((i + ((s - t) % i)) % i) + t;
      });
  },
  Hx = function e(t, n, r) {
    var i = n - t,
      s = i * 2;
    return ke(t)
      ? _m(t, e(0, t.length - 1), n)
      : Ar(r, function (o) {
        return (o = (s + ((o - t) % s)) % s || 0), t + (o > i ? s - o : o);
      });
  },
  Vs = function (t) {
    for (var n = 0, r = "", i, s, o, a; ~(i = t.indexOf("random(", n));)
      (o = t.indexOf(")", i)),
        (a = t.charAt(i + 7) === "["),
        (s = t.substr(i + 7, o - i - 7).match(a ? tm : Vu)),
        (r +=
          t.substr(n, i - n) + ym(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (n = o + 1);
    return r + t.substr(n, t.length - n);
  },
  vm = function (t, n, r, i, s) {
    var o = n - t,
      a = i - r;
    return Ar(s, function (u) {
      return r + (((u - t) / o) * a || 0);
    });
  },
  qx = function e(t, n, r, i) {
    var s = isNaN(t + n)
      ? 0
      : function (d) {
        return (1 - d) * t + d * n;
      };
    if (!s) {
      var o = de(t),
        a = {},
        u,
        l,
        c,
        f,
        h;
      if ((r === !0 && (i = 1) && (r = null), o))
        (t = { p: t }), (n = { p: n });
      else if (ke(t) && !ke(n)) {
        for (c = [], f = t.length, h = f - 2, l = 1; l < f; l++)
          c.push(e(t[l - 1], t[l]));
        f--,
          (s = function (m) {
            m *= f;
            var p = Math.min(h, ~~m);
            return c[p](m - p);
          }),
          (r = n);
      } else i || (t = Vi(ke(t) ? [] : {}, t));
      if (!c) {
        for (u in n) tc.call(a, t, u, "get", n[u]);
        s = function (m) {
          return ic(m, a) || (o ? t.p : t);
        };
      }
    }
    return Ar(r, s);
  },
  ch = function (t, n, r) {
    var i = t.labels,
      s = Wn,
      o,
      a,
      u;
    for (o in i)
      (a = i[o] - n),
        a < 0 == !!r && a && s > (a = Math.abs(a)) && ((u = o), (s = a));
    return u;
  },
  un = function (t, n, r) {
    var i = t.vars,
      s = i[n],
      o = Lt,
      a = t._ctx,
      u,
      l,
      c;
    if (s)
      return (
        (u = i[n + "Params"]),
        (l = i.callbackScope || t),
        r && _r.length && Xo(),
        a && (Lt = a),
        (c = u ? s.apply(l, u) : s.call(l)),
        (Lt = o),
        c
      );
  },
  Qi = function (t) {
    return (
      wr(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!ve),
      t.progress() < 1 && un(t, "onInterrupt"),
      t
    );
  },
  yi,
  xm = [],
  bm = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), Xl() || t.headless)) {
        var n = t.name,
          r = Gt(t),
          i =
            n && !r && t.init
              ? function () {
                this._props = [];
              }
              : t,
          s = {
            init: Os,
            render: ic,
            add: tc,
            kill: fb,
            modifier: cb,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: rc,
            aliases: {},
            register: 0,
          };
        if ((Li(), t !== i)) {
          if (rn[n]) return;
          fn(i, fn(Ho(t, s), o)),
            Vi(i.prototype, Vi(s, Ho(t, o))),
            (rn[(i.prop = n)] = i),
            t.targetTest && (Mo.push(i), (Kl[n] = 1)),
            (n =
              (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
              "Plugin");
        }
        rm(n, i), t.register && t.register(Ke, i, He);
      } else xm.push(t);
  },
  Rt = 255,
  Ji = {
    aqua: [0, Rt, Rt],
    lime: [0, Rt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Rt],
    navy: [0, 0, 128],
    white: [Rt, Rt, Rt],
    olive: [128, 128, 0],
    yellow: [Rt, Rt, 0],
    orange: [Rt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Rt, 0, 0],
    pink: [Rt, 192, 203],
    cyan: [0, Rt, Rt],
    transparent: [Rt, Rt, Rt, 0],
  },
  Xa = function (t, n, r) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? n + (r - n) * t * 6
        : t < 0.5
          ? r
          : t * 3 < 2
            ? n + (r - n) * (2 / 3 - t) * 6
            : n) *
        Rt +
        0.5) |
      0
    );
  },
  Tm = function (t, n, r) {
    var i = t ? (ir(t) ? [t >> 16, (t >> 8) & Rt, t & Rt] : 0) : Ji.black,
      s,
      o,
      a,
      u,
      l,
      c,
      f,
      h,
      d,
      m;
    if (!i) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ji[t]))
        i = Ji[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((s = t.charAt(1)),
              (o = t.charAt(2)),
              (a = t.charAt(3)),
              (t =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
        )
          return (
            (i = parseInt(t.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & Rt, i & Rt, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (i = [t >> 16, (t >> 8) & Rt, t & Rt]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((i = m = t.match(Vu)), !n))
          (u = (+i[0] % 360) / 360),
            (l = +i[1] / 100),
            (c = +i[2] / 100),
            (o = c <= 0.5 ? c * (l + 1) : c + l - c * l),
            (s = c * 2 - o),
            i.length > 3 && (i[3] *= 1),
            (i[0] = Xa(u + 1 / 3, s, o)),
            (i[1] = Xa(u, s, o)),
            (i[2] = Xa(u - 1 / 3, s, o));
        else if (~t.indexOf("="))
          return (i = t.match(Qp)), r && i.length < 4 && (i[3] = 1), i;
      } else i = t.match(Vu) || Ji.transparent;
      i = i.map(Number);
    }
    return (
      n &&
      !m &&
      ((s = i[0] / Rt),
        (o = i[1] / Rt),
        (a = i[2] / Rt),
        (f = Math.max(s, o, a)),
        (h = Math.min(s, o, a)),
        (c = (f + h) / 2),
        f === h
          ? (u = l = 0)
          : ((d = f - h),
            (l = c > 0.5 ? d / (2 - f - h) : d / (f + h)),
            (u =
              f === s
                ? (o - a) / d + (o < a ? 6 : 0)
                : f === o
                  ? (a - s) / d + 2
                  : (s - o) / d + 4),
            (u *= 60)),
        (i[0] = ~~(u + 0.5)),
        (i[1] = ~~(l * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  wm = function (t) {
    var n = [],
      r = [],
      i = -1;
    return (
      t.split(vr).forEach(function (s) {
        var o = s.match(gi) || [];
        n.push.apply(n, o), r.push((i += o.length + 1));
      }),
      (n.c = r),
      n
    );
  },
  fh = function (t, n, r) {
    var i = "",
      s = (t + i).match(vr),
      o = n ? "hsla(" : "rgba(",
      a = 0,
      u,
      l,
      c,
      f;
    if (!s) return t;
    if (
      ((s = s.map(function (h) {
        return (
          (h = Tm(h, n, 1)) &&
          o +
          (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
          ")"
        );
      })),
        r && ((c = wm(t)), (u = r.c), u.join(i) !== c.c.join(i)))
    )
      for (l = t.replace(vr, "1").split(gi), f = l.length - 1; a < f; a++)
        i +=
          l[a] +
          (~u.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : r).shift());
    if (!l)
      for (l = t.split(vr), f = l.length - 1; a < f; a++) i += l[a] + s[a];
    return i + l[f];
  },
  vr = (function () {
    var e =
      "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in Ji) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi");
  })(),
  Kx = /hsl[a]?\(/,
  Sm = function (t) {
    var n = t.join(" "),
      r;
    if (((vr.lastIndex = 0), vr.test(n)))
      return (
        (r = Kx.test(n)),
        (t[1] = fh(t[1], r)),
        (t[0] = fh(t[0], r, wm(t[1]))),
        !0
      );
  },
  Fs,
  on = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      u,
      l,
      c,
      f,
      h,
      d,
      m = function p(g) {
        var _ = e() - i,
          w = g === !0,
          x,
          b,
          T,
          y;
        if (
          ((_ > t || _ < 0) && (r += _ - n),
            (i += _),
            (T = i - r),
            (x = T - o),
            (x > 0 || w) &&
            ((y = ++f.frame),
              (h = T - f.time * 1e3),
              (f.time = T = T / 1e3),
              (o += x + (x >= s ? 4 : s - x)),
              (b = 1)),
            w || (u = l(p)),
            b)
        )
          for (d = 0; d < a.length; d++) a[d](T, h, y, g);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (g) {
          return h / (1e3 / (g || 60));
        },
        wake: function () {
          em &&
            (!Fu &&
              Xl() &&
              ((Vn = Fu = window),
                (Hl = Vn.document || {}),
                (cn.gsap = Ke),
                (Vn.gsapVersions || (Vn.gsapVersions = [])).push(Ke.version),
                nm(Go || Vn.GreenSockGlobals || (!Vn.gsap && Vn) || {}),
                xm.forEach(bm)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              u && f.sleep(),
              (l =
                c ||
                function (g) {
                  return setTimeout(g, (o - f.time * 1e3 + 1) | 0);
                }),
              (Fs = 1),
              m(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(u), (Fs = 0), (l = Os);
        },
        lagSmoothing: function (g, _) {
          (t = g || 1 / 0), (n = Math.min(_ || 33, t));
        },
        fps: function (g) {
          (s = 1e3 / (g || 240)), (o = f.time * 1e3 + s);
        },
        add: function (g, _, w) {
          var x = _
            ? function (b, T, y, v) {
              g(b, T, y, v), f.remove(x);
            }
            : g;
          return f.remove(g), a[w ? "unshift" : "push"](x), Li(), x;
        },
        remove: function (g, _) {
          ~(_ = a.indexOf(g)) && a.splice(_, 1) && d >= _ && d--;
        },
        _listeners: a,
      }),
      f
    );
  })(),
  Li = function () {
    return !Fs && on.wake();
  },
  yt = {},
  Zx = /^[\d.\-M][\d.\-,\s]/,
  Qx = /["']/g,
  Jx = function (t) {
    for (
      var n = {},
      r = t.substr(1, t.length - 3).split(":"),
      i = r[0],
      s = 1,
      o = r.length,
      a,
      u,
      l;
      s < o;
      s++
    )
      (u = r[s]),
        (a = s !== o - 1 ? u.lastIndexOf(",") : u.length),
        (l = u.substr(0, a)),
        (n[i] = isNaN(l) ? l.replace(Qx, "").trim() : +l),
        (i = u.substr(a + 1).trim());
    return n;
  },
  tb = function (t) {
    var n = t.indexOf("(") + 1,
      r = t.indexOf(")"),
      i = t.indexOf("(", n);
    return t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r);
  },
  eb = function (t) {
    var n = (t + "").split("("),
      r = yt[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
        null,
        ~t.indexOf("{") ? [Jx(n[1])] : tb(t).split(",").map(am)
      )
      : yt._CE && Zx.test(t)
        ? yt._CE("", t)
        : r;
  },
  Pm = function (t) {
    return function (n) {
      return 1 - t(1 - n);
    };
  },
  Cm = function e(t, n) {
    for (var r = t._first, i; r;)
      r instanceof Ne
        ? e(r, n)
        : r.vars.yoyoEase &&
        (!r._yoyo || !r._repeat) &&
        r._yoyo !== n &&
        (r.timeline
          ? e(r.timeline, n)
          : ((i = r._ease),
            (r._ease = r._yEase),
            (r._yEase = i),
            (r._yoyo = n))),
        (r = r._next);
  },
  Hr = function (t, n) {
    return (t && (Gt(t) ? t : yt[t] || eb(t))) || n;
  },
  ri = function (t, n, r, i) {
    r === void 0 &&
      (r = function (u) {
        return 1 - n(1 - u);
      }),
      i === void 0 &&
      (i = function (u) {
        return u < 0.5 ? n(u * 2) / 2 : 1 - n((1 - u) * 2) / 2;
      });
    var s = { easeIn: n, easeOut: r, easeInOut: i },
      o;
    return (
      Xe(t, function (a) {
        (yt[a] = cn[a] = s), (yt[(o = a.toLowerCase())] = r);
        for (var u in s)
          yt[
            o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
          ] = yt[a + "." + u] = s[u];
      }),
      s
    );
  },
  Am = function (t) {
    return function (n) {
      return n < 0.5 ? (1 - t(1 - n * 2)) / 2 : 0.5 + t((n - 0.5) * 2) / 2;
    };
  },
  Ha = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (s / Ou) * (Math.asin(1 / i) || 0),
      a = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Mx((c - o) * s) + 1;
      },
      u =
        t === "out"
          ? a
          : t === "in"
            ? function (l) {
              return 1 - a(1 - l);
            }
            : Am(a);
    return (
      (s = Ou / s),
      (u.config = function (l, c) {
        return e(t, l, c);
      }),
      u
    );
  },
  qa = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (o) {
      return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
    },
      i =
        t === "out"
          ? r
          : t === "in"
            ? function (s) {
              return 1 - r(1 - s);
            }
            : Am(r);
    return (
      (i.config = function (s) {
        return e(t, s);
      }),
      i
    );
  };
Xe("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
  var n = t < 5 ? t + 1 : t;
  ri(
    e + ",Power" + (n - 1),
    t
      ? function (r) {
        return Math.pow(r, n);
      }
      : function (r) {
        return r;
      },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    }
  );
});
yt.Linear.easeNone = yt.none = yt.Linear.easeIn;
ri("Elastic", Ha("in"), Ha("out"), Ha());
(function (e, t) {
  var n = 1 / t,
    r = 2 * n,
    i = 2.5 * n,
    s = function (a) {
      return a < n
        ? e * a * a
        : a < r
          ? e * Math.pow(a - 1.5 / t, 2) + 0.75
          : a < i
            ? e * (a -= 2.25 / t) * a + 0.9375
            : e * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  ri(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
ri("Expo", function (e) {
  return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
});
ri("Circ", function (e) {
  return -(Kp(1 - e * e) - 1);
});
ri("Sine", function (e) {
  return e === 1 ? 1 : -Ex(e * Cx) + 1;
});
ri("Back", qa("in"), qa("out"), qa());
yt.SteppedEase =
  yt.steps =
  cn.SteppedEase =
  {
    config: function (t, n) {
      t === void 0 && (t = 1);
      var r = 1 / t,
        i = t + (n ? 0 : 1),
        s = n ? 1 : 0,
        o = 1 - Re;
      return function (a) {
        return (((i * Xs(0, o, a)) | 0) + s) * r;
      };
    },
  };
Oi.ease = yt["quad.out"];
Xe(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (e) {
    return (Zl += e + "," + e + "Params,");
  }
);
var Em = function (t, n) {
  (this.id = Ax++),
    (t._gsap = this),
    (this.target = t),
    (this.harness = n),
    (this.get = n ? n.get : sm),
    (this.set = n ? n.getSetter : rc);
},
  Is = (function () {
    function e(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
        ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        Ii(this, +n.duration, 1, 1),
        (this.data = n.data),
        Lt && ((this._ctx = Lt), Lt.data.push(this)),
        Fs || on.wake();
    }
    var t = e.prototype;
    return (
      (t.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
            this.parent.smoothChildTiming &&
            this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (t.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
            this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
          )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Ii(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (r, i) {
        if ((Li(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (ga(this, r), !s._dp || s.parent || cm(s, this); s && s.parent;)
            s.parent._time !==
              s._start +
              (s._ts >= 0
                ? s._tTime / s._ts
                : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            Bn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === Re) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
          (this._ts || (this._pTime = r), om(this, r, i)),
          this
        );
      }),
      (t.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
            Math.min(this.totalDuration(), r + uh(this)) %
            (this._dur + this._rDelay) || (r ? this._dur : 0),
            i
          )
          : this._time;
      }),
      (t.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
            this.duration() *
            (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
            uh(this),
            i
          )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (t.iteration = function (r, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * s, i)
          : this._repeat
            ? Fi(this._tTime, s) + 1
            : 1;
      }),
      (t.timeScale = function (r, i) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === r) return this;
        var s =
          this.parent && this._ts ? qo(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
          this.totalTime(
            Xs(-Math.abs(this._delay), this.totalDuration(), s),
            i !== !1
          ),
          ma(this),
          Ix(this)
        );
      }),
      (t.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
            ((this._ps = r),
              r
                ? ((this._pTime =
                  this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Li(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                    Math.abs(this._zTime) !== Re &&
                    (this._tTime -= Re)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && Bn(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (r) {
        return (
          this._start +
          (Ge(r) ? this.totalDuration() : this.duration()) /
          Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? qo(i.rawTime(r), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (r) {
        r === void 0 && (r = Dx);
        var i = ve;
        return (
          (ve = r),
          Jl(this) &&
          (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (ve = i),
          this
        );
      }),
      (t.globalTime = function (r) {
        for (var i = this, s = arguments.length ? r : i.rawTime(); i;)
          (s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(r) : s;
      }),
      (t.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), lh(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), lh(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (t.seek = function (r, i) {
        return this.totalTime(mn(this, r), Ge(i));
      }),
      (t.restart = function (r, i) {
        return (
          this.play().totalTime(r ? -this._delay : 0, Ge(i)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }),
      (t.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
            this.timeScale(-this._rts || (r ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (t.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          s;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (s = r.rawTime(!0)) >= i &&
            s < this.endTime(!0) - Re)
        );
      }),
      (t.eventCallback = function (r, i, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (i
            ? ((o[r] = i),
              s && (o[r + "Params"] = s),
              r === "onUpdate" && (this._onUpdate = i))
            : delete o[r],
            this)
          : o[r];
      }),
      (t.then = function (r) {
        var i = this;
        return new Promise(function (s) {
          var o = Gt(r) ? r : um,
            a = function () {
              var l = i.then;
              (i.then = null),
                Gt(o) && (o = o(i)) && (o.then || o === i) && (i.then = l),
                s(o),
                (i.then = l);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
            ? a()
            : (i._prom = a);
        });
      }),
      (t.kill = function () {
        Qi(this);
      }),
      e
    );
  })();
fn(Is.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Ne = (function (e) {
  qp(t, e);
  function t(r, i) {
    var s;
    return (
      r === void 0 && (r = {}),
      (s = e.call(this, r) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!r.smoothChildTiming),
      (s.autoRemoveChildren = !!r.autoRemoveChildren),
      (s._sort = Ge(r.sortChildren)),
      jt && Bn(r.parent || jt, Kn(s), i),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && fm(Kn(s), r.scrollTrigger),
      s
    );
  }
  var n = t.prototype;
  return (
    (n.to = function (i, s, o) {
      return ds(0, arguments, this), this;
    }),
    (n.from = function (i, s, o) {
      return ds(1, arguments, this), this;
    }),
    (n.fromTo = function (i, s, o, a) {
      return ds(2, arguments, this), this;
    }),
    (n.set = function (i, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        hs(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new ee(i, s, mn(this, o), 1),
        this
      );
    }),
    (n.call = function (i, s, o) {
      return Bn(this, ee.delayedCall(0, i, s), o);
    }),
    (n.staggerTo = function (i, s, o, a, u, l, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = l),
        (o.onCompleteParams = c),
        (o.parent = this),
        new ee(i, o, mn(this, u)),
        this
      );
    }),
    (n.staggerFrom = function (i, s, o, a, u, l, c) {
      return (
        (o.runBackwards = 1),
        (hs(o).immediateRender = Ge(o.immediateRender)),
        this.staggerTo(i, s, o, a, u, l, c)
      );
    }),
    (n.staggerFromTo = function (i, s, o, a, u, l, c, f) {
      return (
        (a.startAt = o),
        (hs(a).immediateRender = Ge(a.immediateRender)),
        this.staggerTo(i, s, a, u, l, c, f)
      );
    }),
    (n.render = function (i, s, o) {
      var a = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        l = this._dur,
        c = i <= 0 ? 0 : ne(i),
        f = this._zTime < 0 != i < 0 && (this._initted || !l),
        h,
        d,
        m,
        p,
        g,
        _,
        w,
        x,
        b,
        T,
        y,
        v;
      if (
        (this !== jt && c > u && i >= 0 && (c = u), c !== this._tTime || o || f)
      ) {
        if (
          (a !== this._time &&
            l &&
            ((c += this._time - a), (i += this._time - a)),
            (h = c),
            (b = this._start),
            (x = this._ts),
            (_ = !x),
            f && (l || (a = this._zTime), (i || !s) && (this._zTime = i)),
            this._repeat)
        ) {
          if (
            ((y = this._yoyo),
              (g = l + this._rDelay),
              this._repeat < -1 && i < 0)
          )
            return this.totalTime(g * 100 + i, s, o);
          if (
            ((h = ne(c % g)),
              c === u
                ? ((p = this._repeat), (h = l))
                : ((T = ne(c / g)),
                  (p = ~~T),
                  p && p === T && ((h = l), p--),
                  h > l && (h = l)),
              (T = Fi(this._tTime, g)),
              !a &&
              this._tTime &&
              T !== p &&
              this._tTime - T * g - this._dur <= 0 &&
              (T = p),
              y && p & 1 && ((h = l - h), (v = 1)),
              p !== T && !this._lock)
          ) {
            var P = y && T & 1,
              E = P === (y && p & 1);
            if (
              (p < T && (P = !P),
                (a = P ? 0 : c % l ? l : c),
                (this._lock = 1),
                (this.render(a || (v ? 0 : ne(p * g)), s, !l)._lock = 0),
                (this._tTime = c),
                !s && this.parent && un(this, "onRepeat"),
                this.vars.repeatRefresh && !v && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((l = this._dur),
                (u = this._tDur),
                E &&
                ((this._lock = 2),
                  (a = P ? l : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !v && this.invalidate()),
                (this._lock = 0),
                !this._ts && !_)
            )
              return this;
            Cm(this, v);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((w = jx(this, ne(a), ne(h))), w && (c -= h - (h = w._start))),
            (this._tTime = c),
            (this._time = h),
            (this._act = !x),
            this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (a = 0)),
            !a && c && !s && !T && (un(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (h >= a && i >= 0)
          for (d = this._first; d;) {
            if (
              ((m = d._next), (d._act || h >= d._start) && d._ts && w !== d)
            ) {
              if (d.parent !== this) return this.render(i, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (h - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                    (h - d._start) * d._ts,
                  s,
                  o
                ),
                  h !== this._time || (!this._ts && !_))
              ) {
                (w = 0), m && (c += this._zTime = -1e-8);
                break;
              }
            }
            d = m;
          }
        else {
          d = this._last;
          for (var M = i < 0 ? i : h; d;) {
            if (((m = d._prev), (d._act || M <= d._end) && d._ts && w !== d)) {
              if (d.parent !== this) return this.render(i, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (M - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                    (M - d._start) * d._ts,
                  s,
                  o || (ve && Jl(d))
                ),
                  h !== this._time || (!this._ts && !_))
              ) {
                (w = 0), m && (c += this._zTime = M ? -1e-8 : Re);
                break;
              }
            }
            d = m;
          }
        }
        if (
          w &&
          !s &&
          (this.pause(),
            (w.render(h >= a ? 0 : -1e-8)._zTime = h >= a ? 1 : -1),
            this._ts)
        )
          return (this._start = b), ma(this), this.render(i, s, o);
        this._onUpdate && !s && un(this, "onUpdate", !0),
          ((c === u && this._tTime >= this.totalDuration()) || (!c && a)) &&
          (b === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
          (this._lock ||
            ((i || !l) &&
              ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
              wr(this, 1),
              !s &&
              !(i < 0 && !a) &&
              (c || a || !u) &&
              (un(
                this,
                c === u && i >= 0 ? "onComplete" : "onReverseComplete",
                !0
              ),
                this._prom &&
                !(c < u && this.timeScale() > 0) &&
                this._prom())));
      }
      return this;
    }),
    (n.add = function (i, s) {
      var o = this;
      if ((ir(s) || (s = mn(this, s, i)), !(i instanceof Is))) {
        if (ke(i))
          return (
            i.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (de(i)) return this.addLabel(i, s);
        if (Gt(i)) i = ee.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Bn(this, i, s) : this;
    }),
    (n.getChildren = function (i, s, o, a) {
      i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -1e8);
      for (var u = [], l = this._first; l;)
        l._start >= a &&
          (l instanceof ee
            ? s && u.push(l)
            : (o && u.push(l), i && u.push.apply(u, l.getChildren(!0, s, o)))),
          (l = l._next);
      return u;
    }),
    (n.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
        if (s[o].vars.id === i) return s[o];
    }),
    (n.remove = function (i) {
      return de(i)
        ? this.removeLabel(i)
        : Gt(i)
          ? this.killTweensOf(i)
          : (i.parent === this && pa(this, i),
            i === this._recent && (this._recent = this._last),
            Xr(this));
    }),
    (n.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
          this._ts &&
          (this._start = ne(
            on.time -
            (this._ts > 0
              ? i / this._ts
              : (this.totalDuration() - i) / -this._ts)
          )),
          e.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, s) {
      return (this.labels[i] = mn(this, s)), this;
    }),
    (n.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (n.addPause = function (i, s, o) {
      var a = ee.delayedCall(0, s || Os, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), Bn(this, a, mn(this, i))
      );
    }),
    (n.removePause = function (i) {
      var s = this._first;
      for (i = mn(this, i); s;)
        s._start === i && s.data === "isPause" && wr(s), (s = s._next);
    }),
    (n.killTweensOf = function (i, s, o) {
      for (var a = this.getTweensOf(i, o), u = a.length; u--;)
        dr !== a[u] && a[u].kill(i, s);
      return this;
    }),
    (n.getTweensOf = function (i, s) {
      for (var o = [], a = _n(i), u = this._first, l = ir(s), c; u;)
        u instanceof ee
          ? Ox(u._targets, a) &&
          (l
            ? (!dr || (u._initted && u._ts)) &&
            u.globalTime(0) <= s &&
            u.globalTime(u.totalDuration()) > s
            : !s || u.isActive()) &&
          o.push(u)
          : (c = u.getTweensOf(a, s)).length && o.push.apply(o, c),
          (u = u._next);
      return o;
    }),
    (n.tweenTo = function (i, s) {
      s = s || {};
      var o = this,
        a = mn(o, i),
        u = s,
        l = u.startAt,
        c = u.onStart,
        f = u.onStartParams,
        h = u.immediateRender,
        d,
        m = ee.to(
          o,
          fn(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (l && "time" in l ? l.time : o._time)) / o.timeScale()
                ) ||
                Re,
              onStart: function () {
                if ((o.pause(), !d)) {
                  var g =
                    s.duration ||
                    Math.abs(
                      (a - (l && "time" in l ? l.time : o._time)) /
                      o.timeScale()
                    );
                  m._dur !== g && Ii(m, g, 0, 1).render(m._time, !0, !0),
                    (d = 1);
                }
                c && c.apply(m, f || []);
              },
            },
            s
          )
        );
      return h ? m.render(0) : m;
    }),
    (n.tweenFromTo = function (i, s, o) {
      return this.tweenTo(s, fn({ startAt: { time: mn(this, i) } }, o));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return i === void 0 && (i = this._time), ch(this, mn(this, i));
    }),
    (n.previousLabel = function (i) {
      return i === void 0 && (i = this._time), ch(this, mn(this, i), 1);
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + Re);
    }),
    (n.shiftChildren = function (i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, u = this.labels, l; a;)
        a._start >= o && ((a._start += i), (a._end += i)), (a = a._next);
      if (s) for (l in u) u[l] >= o && (u[l] += i);
      return Xr(this);
    }),
    (n.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s;) s.invalidate(i), (s = s._next);
      return e.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, o; s;) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Xr(this)
      );
    }),
    (n.totalDuration = function (i) {
      var s = 0,
        o = this,
        a = o._last,
        u = Wn,
        l,
        c,
        f;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
          (o.reversed() ? -i : i)
        );
      if (o._dirty) {
        for (f = o.parent; a;)
          (l = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > u && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (Bn(o, a, c - a._delay, 1)._lock = 0))
              : (u = c),
            c < 0 &&
            a._ts &&
            ((s -= c),
              ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
              ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (u = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = l);
        Ii(o, o === jt && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (t.updateRoot = function (i) {
      if ((jt._ts && (om(jt, qo(i, jt)), (im = on.frame)), on.frame >= oh)) {
        oh += ln.autoSleep || 120;
        var s = jt._first;
        if ((!s || !s._ts) && ln.autoSleep && on._listeners.length < 2) {
          for (; s && !s._ts;) s = s._next;
          s || on.sleep();
        }
      }
    }),
    t
  );
})(Is);
fn(Ne.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var nb = function (t, n, r, i, s, o, a) {
  var u = new He(this._pt, t, n, 0, 1, Vm, null, s),
    l = 0,
    c = 0,
    f,
    h,
    d,
    m,
    p,
    g,
    _,
    w;
  for (
    u.b = r,
    u.e = i,
    r += "",
    i += "",
    (_ = ~i.indexOf("random(")) && (i = Vs(i)),
    o && ((w = [r, i]), o(w, t, n), (r = w[0]), (i = w[1])),
    h = r.match(Ya) || [];
    (f = Ya.exec(i));

  )
    (m = f[0]),
      (p = i.substring(l, f.index)),
      d ? (d = (d + 1) % 5) : p.substr(-5) === "rgba(" && (d = 1),
      m !== h[c++] &&
      ((g = parseFloat(h[c - 1]) || 0),
        (u._pt = {
          _next: u._pt,
          p: p || c === 1 ? p : ",",
          s: g,
          c: m.charAt(1) === "=" ? vi(g, m) - g : parseFloat(m) - g,
          m: d && d < 4 ? Math.round : 0,
        }),
        (l = Ya.lastIndex));
  return (
    (u.c = l < i.length ? i.substring(l, i.length) : ""),
    (u.fp = a),
    (Jp.test(i) || _) && (u.e = 0),
    (this._pt = u),
    u
  );
},
  tc = function (t, n, r, i, s, o, a, u, l, c) {
    Gt(i) && (i = i(s || 0, t, o));
    var f = t[n],
      h =
        r !== "get"
          ? r
          : Gt(f)
            ? l
              ? t[
                n.indexOf("set") || !Gt(t["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](l)
              : t[n]()
            : f,
      d = Gt(f) ? (l ? ab : Dm) : nc,
      m;
    if (
      (de(i) &&
        (~i.indexOf("random(") && (i = Vs(i)),
          i.charAt(1) === "=" &&
          ((m = vi(h, i) + (Ae(h) || 0)), (m || m === 0) && (i = m))),
        !c || h !== i || $u)
    )
      return !isNaN(h * i) && i !== ""
        ? ((m = new He(
          this._pt,
          t,
          n,
          +h || 0,
          i - (h || 0),
          typeof f == "boolean" ? lb : Om,
          0,
          d
        )),
          l && (m.fp = l),
          a && m.modifier(a, this, t),
          (this._pt = m))
        : (!f && !(n in t) && ql(n, i),
          nb.call(this, t, n, h, i, d, u || ln.stringFilter, l));
  },
  rb = function (t, n, r, i, s) {
    if (
      (Gt(t) && (t = ps(t, s, n, r, i)),
        !Gn(t) || (t.style && t.nodeType) || ke(t) || Zp(t))
    )
      return de(t) ? ps(t, s, n, r, i) : t;
    var o = {},
      a;
    for (a in t) o[a] = ps(t[a], s, n, r, i);
    return o;
  },
  Mm = function (t, n, r, i, s, o) {
    var a, u, l, c;
    if (
      rn[t] &&
      (a = new rn[t]()).init(
        s,
        a.rawVars ? n[t] : rb(n[t], i, s, o, r),
        r,
        i,
        o
      ) !== !1 &&
      ((r._pt = u = new He(r._pt, s, t, 0, 1, a.render, a, 0, a.priority)),
        r !== yi)
    )
      for (l = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--;)
        l[a._props[c]] = u;
    return a;
  },
  dr,
  $u,
  ec = function e(t, n, r) {
    var i = t.vars,
      s = i.ease,
      o = i.startAt,
      a = i.immediateRender,
      u = i.lazy,
      l = i.onUpdate,
      c = i.runBackwards,
      f = i.yoyoEase,
      h = i.keyframes,
      d = i.autoRevert,
      m = t._dur,
      p = t._startAt,
      g = t._targets,
      _ = t.parent,
      w = _ && _.data === "nested" ? _.vars.targets : g,
      x = t._overwrite === "auto" && !Yl,
      b = t.timeline,
      T,
      y,
      v,
      P,
      E,
      M,
      j,
      D,
      z,
      N,
      G,
      k,
      R;
    if (
      (b && (!h || !s) && (s = "none"),
        (t._ease = Hr(s, Oi.ease)),
        (t._yEase = f ? Pm(Hr(f === !0 ? s : f, Oi.ease)) : 0),
        f &&
        t._yoyo &&
        !t._repeat &&
        ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !b && !!i.runBackwards),
        !b || (h && !i.stagger))
    ) {
      if (
        ((D = g[0] ? Gr(g[0]).harness : 0),
          (k = D && i[D.prop]),
          (T = Ho(i, Kl)),
          p &&
          (p._zTime < 0 && p.progress(1),
            n < 0 && c && a && !d ? p.render(-1, !0) : p.revert(c && m ? Eo : kx),
            (p._lazy = 0)),
          o)
      ) {
        if (
          (wr(
            (t._startAt = ee.set(
              g,
              fn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !p && Ge(u),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return un(t, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (ve || (!a && !d)) && t._startAt.revert(Eo),
            a && m && n <= 0 && r <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (c && m && !p) {
        if (
          (n && (a = !1),
            (v = fn(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && Ge(u),
                immediateRender: a,
                stagger: 0,
                parent: _,
              },
              T
            )),
            k && (v[D.prop] = k),
            wr((t._startAt = ee.set(g, v))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (ve ? t._startAt.revert(Eo) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            !a)
        )
          e(t._startAt, Re, Re);
        else if (!n) return;
      }
      for (
        t._pt = t._ptCache = 0, u = (m && Ge(u)) || (u && !m), y = 0;
        y < g.length;
        y++
      ) {
        if (
          ((E = g[y]),
            (j = E._gsap || Ql(g)[y]._gsap),
            (t._ptLookup[y] = N = {}),
            Iu[j.id] && _r.length && Xo(),
            (G = w === g ? y : w.indexOf(E)),
            D &&
            (z = new D()).init(E, k || T, t, G, w) !== !1 &&
            ((t._pt = P =
              new He(t._pt, E, z.name, 0, 1, z.render, z, 0, z.priority)),
              z._props.forEach(function (V) {
                N[V] = P;
              }),
              z.priority && (M = 1)),
            !D || k)
        )
          for (v in T)
            rn[v] && (z = Mm(v, T, t, G, E, w))
              ? z.priority && (M = 1)
              : (N[v] = P =
                tc.call(t, E, v, "get", T[v], G, w, 0, i.stringFilter));
        t._op && t._op[y] && t.kill(E, t._op[y]),
          x &&
          t._pt &&
          ((dr = t),
            jt.killTweensOf(E, N, t.globalTime(n)),
            (R = !t.parent),
            (dr = 0)),
          t._pt && u && (Iu[j.id] = 1);
      }
      M && Fm(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = l),
      (t._initted = (!t._op || t._pt) && !R),
      h && n <= 0 && b.render(Wn, !0, !0);
  },
  ib = function (t, n, r, i, s, o, a, u) {
    var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[n],
      c,
      f,
      h,
      d;
    if (!l)
      for (
        l = t._ptCache[n] = [], h = t._ptLookup, d = t._targets.length;
        d--;

      ) {
        if (((c = h[d][n]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== n && c.fp !== n;) c = c._next;
        if (!c)
          return (
            ($u = 1),
            (t.vars[n] = "+=0"),
            ec(t, a),
            ($u = 0),
            u ? Ds(n + " not eligible for reset") : 1
          );
        l.push(c);
      }
    for (d = l.length; d--;)
      (f = l[d]),
        (c = f._pt || f),
        (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
        (c.c = r - c.s),
        f.e && (f.e = Zt(r) + Ae(f.e)),
        f.b && (f.b = c.s + Ae(f.b));
  },
  sb = function (t, n) {
    var r = t[0] ? Gr(t[0]).harness : 0,
      i = r && r.aliases,
      s,
      o,
      a,
      u;
    if (!i) return n;
    s = Vi({}, n);
    for (o in i)
      if (o in s) for (u = i[o].split(","), a = u.length; a--;) s[u[a]] = s[o];
    return s;
  },
  ob = function (t, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o,
      a;
    if (ke(n))
      (a = r[t] || (r[t] = [])),
        n.forEach(function (u, l) {
          return a.push({ t: (l / (n.length - 1)) * 100, v: u, e: s });
        });
    else
      for (o in n)
        (a = r[o] || (r[o] = [])),
          o === "ease" || a.push({ t: parseFloat(t), v: n[o], e: s });
  },
  ps = function (t, n, r, i, s) {
    return Gt(t)
      ? t.call(n, r, i, s)
      : de(t) && ~t.indexOf("random(")
        ? Vs(t)
        : t;
  },
  Rm = Zl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  km = {};
Xe(Rm + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
  return (km[e] = 1);
});
var ee = (function (e) {
  qp(t, e);
  function t(r, i, s, o) {
    var a;
    typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
      (a = e.call(this, o ? i : hs(i)) || this);
    var u = a.vars,
      l = u.duration,
      c = u.delay,
      f = u.immediateRender,
      h = u.stagger,
      d = u.overwrite,
      m = u.keyframes,
      p = u.defaults,
      g = u.scrollTrigger,
      _ = u.yoyoEase,
      w = i.parent || jt,
      x = (ke(r) || Zp(r) ? ir(r[0]) : "length" in i) ? [r] : _n(r),
      b,
      T,
      y,
      v,
      P,
      E,
      M,
      j;
    if (
      ((a._targets = x.length
        ? Ql(x)
        : Ds(
          "GSAP target " + r + " not found. https://gsap.com",
          !ln.nullTargetWarn
        ) || []),
        (a._ptLookup = []),
        (a._overwrite = d),
        m || h || ro(l) || ro(c))
    ) {
      if (
        ((i = a.vars),
          (b = a.timeline =
            new Ne({
              data: "nested",
              defaults: p || {},
              targets: w && w.data === "nested" ? w.vars.targets : x,
            })),
          b.kill(),
          (b.parent = b._dp = Kn(a)),
          (b._start = 0),
          h || ro(l) || ro(c))
      ) {
        if (((v = x.length), (M = h && mm(h)), Gn(h)))
          for (P in h) ~Rm.indexOf(P) && (j || (j = {}), (j[P] = h[P]));
        for (T = 0; T < v; T++)
          (y = Ho(i, km)),
            (y.stagger = 0),
            _ && (y.yoyoEase = _),
            j && Vi(y, j),
            (E = x[T]),
            (y.duration = +ps(l, Kn(a), T, E, x)),
            (y.delay = (+ps(c, Kn(a), T, E, x) || 0) - a._delay),
            !h &&
            v === 1 &&
            y.delay &&
            ((a._delay = c = y.delay), (a._start += c), (y.delay = 0)),
            b.to(E, y, M ? M(T, E, x) : 0),
            (b._ease = yt.none);
        b.duration() ? (l = c = 0) : (a.timeline = 0);
      } else if (m) {
        hs(fn(b.vars.defaults, { ease: "none" })),
          (b._ease = Hr(m.ease || i.ease || "none"));
        var D = 0,
          z,
          N,
          G;
        if (ke(m))
          m.forEach(function (k) {
            return b.to(x, k, ">");
          }),
            b.duration();
        else {
          y = {};
          for (P in m)
            P === "ease" || P === "easeEach" || ob(P, m[P], y, m.easeEach);
          for (P in y)
            for (
              z = y[P].sort(function (k, R) {
                return k.t - R.t;
              }),
              D = 0,
              T = 0;
              T < z.length;
              T++
            )
              (N = z[T]),
                (G = {
                  ease: N.e,
                  duration: ((N.t - (T ? z[T - 1].t : 0)) / 100) * l,
                }),
                (G[P] = N.v),
                b.to(x, G, D),
                (D += G.duration);
          b.duration() < l && b.to({}, { duration: l - b.duration() });
        }
      }
      l || a.duration((l = b.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !Yl && ((dr = Kn(a)), jt.killTweensOf(x), (dr = 0)),
      Bn(w, Kn(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (f ||
        (!l &&
          !m &&
          a._start === ne(w._time) &&
          Ge(f) &&
          Lx(Kn(a)) &&
          w.data !== "nested")) &&
      ((a._tTime = -1e-8), a.render(Math.max(0, -c) || 0)),
      g && fm(Kn(a), g),
      a
    );
  }
  var n = t.prototype;
  return (
    (n.render = function (i, s, o) {
      var a = this._time,
        u = this._tDur,
        l = this._dur,
        c = i < 0,
        f = i > u - Re && !c ? u : i < Re ? 0 : i,
        h,
        d,
        m,
        p,
        g,
        _,
        w,
        x,
        b;
      if (!l) Nx(this, i, s, o);
      else if (
        f !== this._tTime ||
        !i ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((h = f), (x = this.timeline), this._repeat)) {
          if (((p = l + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(p * 100 + i, s, o);
          if (
            ((h = ne(f % p)),
              f === u
                ? ((m = this._repeat), (h = l))
                : ((g = ne(f / p)),
                  (m = ~~g),
                  m && m === g ? ((h = l), m--) : h > l && (h = l)),
              (_ = this._yoyo && m & 1),
              _ && ((b = this._yEase), (h = l - h)),
              (g = Fi(this._tTime, p)),
              h === a && !o && this._initted && m === g)
          )
            return (this._tTime = f), this;
          m !== g &&
            (x && this._yEase && Cm(x, _),
              this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              h !== p &&
              this._initted &&
              ((this._lock = o = 1),
                (this.render(ne(p * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (hm(this, c ? i : h, o, s, f)) return (this._tTime = 0), this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && m !== g))
            return this;
          if (l !== this._dur) return this.render(i, s, o);
        }
        if (
          ((this._tTime = f),
            (this._time = h),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = w = (b || this._ease)(h / l)),
            this._from && (this.ratio = w = 1 - w),
            !a && f && !s && !g && (un(this, "onStart"), this._tTime !== f))
        )
          return this;
        for (d = this._pt; d;) d.r(w, d.d), (d = d._next);
        (x && x.render(i < 0 ? i : x._dur * x._ease(h / this._dur), s, o)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
          !s &&
          (c && Lu(this, i, s, o), un(this, "onUpdate")),
          this._repeat &&
          m !== g &&
          this.vars.onRepeat &&
          !s &&
          this.parent &&
          un(this, "onRepeat"),
          (f === this._tDur || !f) &&
          this._tTime === f &&
          (c && !this._onUpdate && Lu(this, i, !0, !0),
            (i || !l) &&
            ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
            wr(this, 1),
            !s &&
            !(c && !a) &&
            (f || a || _) &&
            (un(this, f === u ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(f < u && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        e.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, s, o, a, u) {
      Fs || on.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || ec(this, l),
        (c = this._ease(l / this._dur)),
        ib(this, i, s, o, a, c, l, u)
          ? this.resetTo(i, s, o, a, 1)
          : (ga(this, 0),
            this.parent ||
            lm(
              this._dp,
              this,
              "_first",
              "_last",
              this._dp._sort ? "_start" : 0
            ),
            this.render(0))
      );
    }),
    (n.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Qi(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!ve),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, dr && dr.vars.overwrite !== !0)
            ._first || Qi(this),
          this.parent &&
          o !== this.timeline.totalDuration() &&
          Ii(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        u = i ? _n(i) : a,
        l = this._ptLookup,
        c = this._pt,
        f,
        h,
        d,
        m,
        p,
        g,
        _;
      if ((!s || s === "all") && Fx(a, u))
        return s === "all" && (this._pt = 0), Qi(this);
      for (
        f = this._op = this._op || [],
        s !== "all" &&
        (de(s) &&
          ((p = {}),
            Xe(s, function (w) {
              return (p[w] = 1);
            }),
            (s = p)),
          (s = sb(a, s))),
        _ = a.length;
        _--;

      )
        if (~u.indexOf(a[_])) {
          (h = l[_]),
            s === "all"
              ? ((f[_] = s), (m = h), (d = {}))
              : ((d = f[_] = f[_] || {}), (m = s));
          for (p in m)
            (g = h && h[p]),
              g &&
              ((!("kill" in g.d) || g.d.kill(p) === !0) && pa(this, g, "_pt"),
                delete h[p]),
              d !== "all" && (d[p] = 1);
        }
      return this._initted && !this._pt && c && Qi(this), this;
    }),
    (t.to = function (i, s) {
      return new t(i, s, arguments[2]);
    }),
    (t.from = function (i, s) {
      return ds(1, arguments);
    }),
    (t.delayedCall = function (i, s, o, a) {
      return new t(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (t.fromTo = function (i, s, o) {
      return ds(2, arguments);
    }),
    (t.set = function (i, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new t(i, s);
    }),
    (t.killTweensOf = function (i, s, o) {
      return jt.killTweensOf(i, s, o);
    }),
    t
  );
})(Is);
fn(ee.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Xe("staggerTo,staggerFrom,staggerFromTo", function (e) {
  ee[e] = function () {
    var t = new Ne(),
      n = Nu.call(arguments, 0);
    return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
  };
});
var nc = function (t, n, r) {
  return (t[n] = r);
},
  Dm = function (t, n, r) {
    return t[n](r);
  },
  ab = function (t, n, r, i) {
    return t[n](i.fp, r);
  },
  ub = function (t, n, r) {
    return t.setAttribute(n, r);
  },
  rc = function (t, n) {
    return Gt(t[n]) ? Dm : Gl(t[n]) && t.setAttribute ? ub : nc;
  },
  Om = function (t, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n);
  },
  lb = function (t, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * t), n);
  },
  Vm = function (t, n) {
    var r = n._pt,
      i = "";
    if (!t && n.b) i = n.b;
    else if (t === 1 && n.e) i = n.e;
    else {
      for (; r;)
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  ic = function (t, n) {
    for (var r = n._pt; r;) r.r(t, r.d), (r = r._next);
  },
  cb = function (t, n, r, i) {
    for (var s = this._pt, o; s;)
      (o = s._next), s.p === i && s.modifier(t, n, r), (s = o);
  },
  fb = function (t) {
    for (var n = this._pt, r, i; n;)
      (i = n._next),
        (n.p === t && !n.op) || n.op === t
          ? pa(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i);
    return !r;
  },
  hb = function (t, n, r, i) {
    i.mSet(t, n, i.m.call(i.tween, r, i.mt), i);
  },
  Fm = function (t) {
    for (var n = t._pt, r, i, s, o; n;) {
      for (r = n._next, i = s; i && i.pr > n.pr;) i = i._next;
      (n._prev = i ? i._prev : o) ? (n._prev._next = n) : (s = n),
        (n._next = i) ? (i._prev = n) : (o = n),
        (n = r);
    }
    t._pt = s;
  },
  He = (function () {
    function e(n, r, i, s, o, a, u, l, c) {
      (this.t = r),
        (this.s = s),
        (this.c = o),
        (this.p = i),
        (this.r = a || Om),
        (this.d = u || this),
        (this.set = l || nc),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    var t = e.prototype;
    return (
      (t.modifier = function (r, i, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = hb),
          (this.m = r),
          (this.mt = s),
          (this.tween = i);
      }),
      e
    );
  })();
Xe(
  Zl +
  "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (e) {
    return (Kl[e] = 1);
  }
);
cn.TweenMax = cn.TweenLite = ee;
cn.TimelineLite = cn.TimelineMax = Ne;
jt = new Ne({
  sortChildren: !1,
  defaults: Oi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
ln.stringFilter = Sm;
var qr = [],
  Ro = {},
  db = [],
  hh = 0,
  pb = 0,
  Ka = function (t) {
    return (Ro[t] || db).map(function (n) {
      return n();
    });
  },
  Uu = function () {
    var t = Date.now(),
      n = [];
    t - hh > 2 &&
      (Ka("matchMediaInit"),
        qr.forEach(function (r) {
          var i = r.queries,
            s = r.conditions,
            o,
            a,
            u,
            l;
          for (a in i)
            (o = Vn.matchMedia(i[a]).matches),
              o && (u = 1),
              o !== s[a] && ((s[a] = o), (l = 1));
          l && (r.revert(), u && n.push(r));
        }),
        Ka("matchMediaRevert"),
        n.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (hh = t),
        Ka("matchMedia"));
  },
  Im = (function () {
    function e(n, r) {
      (this.selector = r && ju(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = pb++),
        n && this.add(n);
    }
    var t = e.prototype;
    return (
      (t.add = function (r, i, s) {
        Gt(r) && ((s = i), (i = r), (r = Gt));
        var o = this,
          a = function () {
            var l = Lt,
              c = o.selector,
              f;
            return (
              l && l !== o && l.data.push(o),
              s && (o.selector = ju(s)),
              (Lt = o),
              (f = i.apply(o, arguments)),
              Gt(f) && o._r.push(f),
              (Lt = l),
              (o.selector = c),
              (o.isReverted = !1),
              f
            );
          };
        return (
          (o.last = a),
          r === Gt
            ? a(o, function (u) {
              return o.add(null, u);
            })
            : r
              ? (o[r] = a)
              : a
        );
      }),
      (t.ignore = function (r) {
        var i = Lt;
        (Lt = null), r(this), (Lt = i);
      }),
      (t.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof e
              ? r.push.apply(r, i.getTweens())
              : i instanceof ee &&
              !(i.parent && i.parent.data === "nested") &&
              r.push(i);
          }),
          r
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (r, i) {
        var s = this;
        if (
          (r
            ? (function () {
              for (var a = s.getTweens(), u = s.data.length, l; u--;)
                (l = s.data[u]),
                  l.data === "isFlip" &&
                  (l.revert(),
                    l.getChildren(!0, !0, !1).forEach(function (c) {
                      return a.splice(a.indexOf(c), 1);
                    }));
              for (
                a
                  .map(function (c) {
                    return {
                      g:
                        c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                          ? c.globalTime(0)
                          : -1 / 0,
                      t: c,
                    };
                  })
                  .sort(function (c, f) {
                    return f.g - c.g || -1 / 0;
                  })
                  .forEach(function (c) {
                    return c.t.revert(r);
                  }),
                u = s.data.length;
                u--;

              )
                (l = s.data[u]),
                  l instanceof Ne
                    ? l.data !== "nested" &&
                    (l.scrollTrigger && l.scrollTrigger.revert(), l.kill())
                    : !(l instanceof ee) && l.revert && l.revert(r);
              s._r.forEach(function (c) {
                return c(r, s);
              }),
                (s.isReverted = !0);
            })()
            : this.data.forEach(function (a) {
              return a.kill && a.kill();
            }),
            this.clear(),
            i)
        )
          for (var o = qr.length; o--;)
            qr[o].id === this.id && qr.splice(o, 1);
      }),
      (t.revert = function (r) {
        this.kill(r || {});
      }),
      e
    );
  })(),
  mb = (function () {
    function e(n) {
      (this.contexts = []), (this.scope = n), Lt && Lt.data.push(this);
    }
    var t = e.prototype;
    return (
      (t.add = function (r, i, s) {
        Gn(r) || (r = { matches: r });
        var o = new Im(0, s || this.scope),
          a = (o.conditions = {}),
          u,
          l,
          c;
        Lt && !o.selector && (o.selector = Lt.selector),
          this.contexts.push(o),
          (i = o.add("onMatch", i)),
          (o.queries = r);
        for (l in r)
          l === "all"
            ? (c = 1)
            : ((u = Vn.matchMedia(r[l])),
              u &&
              (qr.indexOf(o) < 0 && qr.push(o),
                (a[l] = u.matches) && (c = 1),
                u.addListener
                  ? u.addListener(Uu)
                  : u.addEventListener("change", Uu)));
        return (
          c &&
          i(o, function (f) {
            return o.add(null, f);
          }),
          this
        );
      }),
      (t.revert = function (r) {
        this.kill(r || {});
      }),
      (t.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      e
    );
  })(),
  Ko = {
    registerPlugin: function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return bm(i);
      });
    },
    timeline: function (t) {
      return new Ne(t);
    },
    getTweensOf: function (t, n) {
      return jt.getTweensOf(t, n);
    },
    getProperty: function (t, n, r, i) {
      de(t) && (t = _n(t)[0]);
      var s = Gr(t || {}).get,
        o = r ? um : am;
      return (
        r === "native" && (r = ""),
        t &&
        (n
          ? o(((rn[n] && rn[n].get) || s)(t, n, r, i))
          : function (a, u, l) {
            return o(((rn[a] && rn[a].get) || s)(t, a, u, l));
          })
      );
    },
    quickSetter: function (t, n, r) {
      if (((t = _n(t)), t.length > 1)) {
        var i = t.map(function (c) {
          return Ke.quickSetter(c, n, r);
        }),
          s = i.length;
        return function (c) {
          for (var f = s; f--;) i[f](c);
        };
      }
      t = t[0] || {};
      var o = rn[n],
        a = Gr(t),
        u = (a.harness && (a.harness.aliases || {})[n]) || n,
        l = o
          ? function (c) {
            var f = new o();
            (yi._pt = 0),
              f.init(t, r ? c + r : c, yi, 0, [t]),
              f.render(1, f),
              yi._pt && ic(1, yi);
          }
          : a.set(t, u);
      return o
        ? l
        : function (c) {
          return l(t, u, r ? c + r : c, a, 1);
        };
    },
    quickTo: function (t, n, r) {
      var i,
        s = Ke.to(
          t,
          fn(
            ((i = {}), (i[n] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
            r || {}
          )
        ),
        o = function (u, l, c) {
          return s.resetTo(n, u, l, c);
        };
      return (o.tween = s), o;
    },
    isTweening: function (t) {
      return jt.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Hr(t.ease, Oi.ease)), ah(Oi, t || {});
    },
    config: function (t) {
      return ah(ln, t || {});
    },
    registerEffect: function (t) {
      var n = t.name,
        r = t.effect,
        i = t.plugins,
        s = t.defaults,
        o = t.extendTimeline;
      (i || "").split(",").forEach(function (a) {
        return (
          a && !rn[a] && !cn[a] && Ds(n + " effect requires " + a + " plugin.")
        );
      }),
        (Ga[n] = function (a, u, l) {
          return r(_n(a), fn(u || {}, s), l);
        }),
        o &&
        (Ne.prototype[n] = function (a, u, l) {
          return this.add(Ga[n](a, Gn(u) ? u : (l = u) && {}, this), l);
        });
    },
    registerEase: function (t, n) {
      yt[t] = Hr(n);
    },
    parseEase: function (t, n) {
      return arguments.length ? Hr(t, n) : yt;
    },
    getById: function (t) {
      return jt.getById(t);
    },
    exportRoot: function (t, n) {
      t === void 0 && (t = {});
      var r = new Ne(t),
        i,
        s;
      for (
        r.smoothChildTiming = Ge(t.smoothChildTiming),
        jt.remove(r),
        r._dp = 0,
        r._time = r._tTime = jt._time,
        i = jt._first;
        i;

      )
        (s = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof ee &&
              i.vars.onComplete === i._targets[0]
            )) &&
          Bn(r, i, i._start - i._delay),
          (i = s);
      return Bn(jt, r, 0), r;
    },
    context: function (t, n) {
      return t ? new Im(t, n) : Lt;
    },
    matchMedia: function (t) {
      return new mb(t);
    },
    matchMediaRefresh: function () {
      return (
        qr.forEach(function (t) {
          var n = t.conditions,
            r,
            i;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && t.revert();
        }) || Uu()
      );
    },
    addEventListener: function (t, n) {
      var r = Ro[t] || (Ro[t] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (t, n) {
      var r = Ro[t],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: Xx,
      wrapYoyo: Hx,
      distribute: mm,
      random: ym,
      snap: gm,
      normalize: Gx,
      getUnit: Ae,
      clamp: $x,
      splitColor: Tm,
      toArray: _n,
      selector: ju,
      mapRange: vm,
      pipe: Wx,
      unitize: Yx,
      interpolate: qx,
      shuffle: pm,
    },
    install: nm,
    effects: Ga,
    ticker: on,
    updateRoot: Ne.updateRoot,
    plugins: rn,
    globalTimeline: jt,
    core: {
      PropTween: He,
      globals: rm,
      Tween: ee,
      Timeline: Ne,
      Animation: Is,
      getCache: Gr,
      _removeLinkedListItem: pa,
      reverting: function () {
        return ve;
      },
      context: function (t) {
        return t && Lt && (Lt.data.push(t), (t._ctx = Lt)), Lt;
      },
      suppressOverwrites: function (t) {
        return (Yl = t);
      },
    },
  };
Xe("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
  return (Ko[e] = ee[e]);
});
on.add(Ne.updateRoot);
yi = Ko.to({}, { duration: 0 });
var gb = function (t, n) {
  for (var r = t._pt; r && r.p !== n && r.op !== n && r.fp !== n;)
    r = r._next;
  return r;
},
  yb = function (t, n) {
    var r = t._targets,
      i,
      s,
      o;
    for (i in n)
      for (s = r.length; s--;)
        (o = t._ptLookup[s][i]),
          o &&
          (o = o.d) &&
          (o._pt && (o = gb(o, i)),
            o && o.modifier && o.modifier(n[i], t, r[s], i));
  },
  Za = function (t, n) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (i, s, o) {
        o._onInit = function (a) {
          var u, l;
          if (
            (de(s) &&
              ((u = {}),
                Xe(s, function (c) {
                  return (u[c] = 1);
                }),
                (s = u)),
              n)
          ) {
            u = {};
            for (l in s) u[l] = n(s[l]);
            s = u;
          }
          yb(a, s);
        };
      },
    };
  },
  Ke =
    Ko.registerPlugin(
      {
        name: "attr",
        init: function (t, n, r, i, s) {
          var o, a, u;
          this.tween = r;
          for (o in n)
            (u = t.getAttribute(o) || ""),
              (a = this.add(
                t,
                "setAttribute",
                (u || 0) + "",
                n[o],
                i,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = u),
              this._props.push(o);
        },
        render: function (t, n) {
          for (var r = n._pt; r;)
            ve ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (t, n) {
          for (var r = n.length; r--;)
            this.add(t, r, t[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Za("roundProps", zu),
      Za("modifiers"),
      Za("snap", gm)
    ) || Ko;
ee.version = Ne.version = Ke.version = "3.13.0";
em = 1;
Xl() && Li();
yt.Power0;
yt.Power1;
yt.Power2;
var xT = yt.Power3;
yt.Power4;
yt.Linear;
yt.Quad;
yt.Cubic;
yt.Quart;
yt.Quint;
yt.Strong;
yt.Elastic;
yt.Back;
yt.SteppedEase;
yt.Bounce;
yt.Sine;
yt.Expo;
yt.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var dh,
  pr,
  xi,
  sc,
  jr,
  ph,
  oc,
  _b = function () {
    return typeof window < "u";
  },
  sr = {},
  Or = 180 / Math.PI,
  bi = Math.PI / 180,
  si = Math.atan2,
  mh = 1e8,
  ac = /([A-Z])/g,
  vb = /(left|right|width|margin|padding|x)/i,
  xb = /[\s,\(]\S/,
  Nn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Wu = function (t, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n);
  },
  bb = function (t, n) {
    return n.set(
      n.t,
      n.p,
      t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u,
      n
    );
  },
  Tb = function (t, n) {
    return n.set(
      n.t,
      n.p,
      t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b,
      n
    );
  },
  wb = function (t, n) {
    var r = n.s + n.c * t;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  Lm = function (t, n) {
    return n.set(n.t, n.p, t ? n.e : n.b, n);
  },
  Bm = function (t, n) {
    return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n);
  },
  Sb = function (t, n, r) {
    return (t.style[n] = r);
  },
  Pb = function (t, n, r) {
    return t.style.setProperty(n, r);
  },
  Cb = function (t, n, r) {
    return (t._gsap[n] = r);
  },
  Ab = function (t, n, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  },
  Eb = function (t, n, r, i, s) {
    var o = t._gsap;
    (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
  },
  Mb = function (t, n, r, i, s) {
    var o = t._gsap;
    (o[n] = r), o.renderTransform(s, o);
  },
  $t = "transform",
  qe = $t + "Origin",
  Rb = function e(t, n) {
    var r = this,
      i = this.target,
      s = i.style,
      o = i._gsap;
    if (t in sr && s) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        (t = Nn[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
              return (r.tfm[a] = Zn(i, a));
            })
            : (this.tfm[t] = o.x ? o[t] : Zn(i, t)),
          t === qe && (this.tfm.zOrigin = o.zOrigin);
      else
        return Nn.transform.split(",").forEach(function (a) {
          return e.call(r, a, n);
        });
      if (this.props.indexOf($t) >= 0) return;
      o.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(qe, n, "")),
        (t = $t);
    }
    (s || n) && this.props.push(t, n, s[t]);
  },
  Nm = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
  },
  kb = function () {
    var t = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s,
      o;
    for (s = 0; s < t.length; s += 3)
      t[s + 1]
        ? t[s + 1] === 2
          ? n[t[s]](t[s + 2])
          : (n[t[s]] = t[s + 2])
        : t[s + 2]
          ? (r[t[s]] = t[s + 2])
          : r.removeProperty(
            t[s].substr(0, 2) === "--"
              ? t[s]
              : t[s].replace(ac, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg &&
        (i.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
        (s = oc()),
        (!s || !s.isStart) &&
        !r[$t] &&
        (Nm(r),
          i.zOrigin &&
          r[qe] &&
          ((r[qe] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  jm = function (t, n) {
    var r = { target: t, props: [], revert: kb, save: Rb };
    return (
      t._gsap || Ke.core.getCache(t),
      n &&
      t.style &&
      t.nodeType &&
      n.split(",").forEach(function (i) {
        return r.save(i);
      }),
      r
    );
  },
  zm,
  Yu = function (t, n) {
    var r = pr.createElementNS
      ? pr.createElementNS(
        (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
        t
      )
      : pr.createElement(t);
    return r && r.style ? r : pr.createElement(t);
  },
  vn = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(ac, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, Bi(n) || n, 1)) ||
      ""
    );
  },
  gh = "O,Moz,ms,Ms,Webkit".split(","),
  Bi = function (t, n, r) {
    var i = n || jr,
      s = i.style,
      o = 5;
    if (t in s && !r) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      o-- && !(gh[o] + t in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? gh[o] : "") + t;
  },
  Gu = function () {
    _b() &&
      window.document &&
      ((dh = window),
        (pr = dh.document),
        (xi = pr.documentElement),
        (jr = Yu("div") || { style: {} }),
        Yu("div"),
        ($t = Bi($t)),
        (qe = $t + "Origin"),
        (jr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (zm = !!Bi("perspective")),
        (oc = Ke.core.reverting),
        (sc = 1));
  },
  yh = function (t) {
    var n = t.ownerSVGElement,
      r = Yu(
        "svg",
        (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      i = t.cloneNode(!0),
      s;
    (i.style.display = "block"), r.appendChild(i), xi.appendChild(r);
    try {
      s = i.getBBox();
    } catch { }
    return r.removeChild(i), xi.removeChild(r), s;
  },
  _h = function (t, n) {
    for (var r = n.length; r--;)
      if (t.hasAttribute(n[r])) return t.getAttribute(n[r]);
  },
  $m = function (t) {
    var n, r;
    try {
      n = t.getBBox();
    } catch {
      (n = yh(t)), (r = 1);
    }
    return (
      (n && (n.width || n.height)) || r || (n = yh(t)),
      n && !n.width && !n.x && !n.y
        ? {
          x: +_h(t, ["x", "cx", "x1"]) || 0,
          y: +_h(t, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0,
        }
        : n
    );
  },
  Um = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && $m(t));
  },
  Jr = function (t, n) {
    if (n) {
      var r = t.style,
        i;
      n in sr && n !== qe && (n = $t),
        r.removeProperty
          ? ((i = n.substr(0, 2)),
            (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
            r.removeProperty(
              i === "--" ? n : n.replace(ac, "-$1").toLowerCase()
            ))
          : r.removeAttribute(n);
    }
  },
  mr = function (t, n, r, i, s, o) {
    var a = new He(t._pt, n, r, 0, 1, o ? Bm : Lm);
    return (t._pt = a), (a.b = i), (a.e = s), t._props.push(r), a;
  },
  vh = { deg: 1, rad: 1, turn: 1 },
  Db = { grid: 1, flex: 1 },
  Sr = function e(t, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = jr.style,
      u = vb.test(n),
      l = t.tagName.toLowerCase() === "svg",
      c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
      f = 100,
      h = i === "px",
      d = i === "%",
      m,
      p,
      g,
      _;
    if (i === o || !s || vh[i] || vh[o]) return s;
    if (
      (o !== "px" && !h && (s = e(t, n, r, "px")),
        (_ = t.getCTM && Um(t)),
        (d || o === "%") && (sr[n] || ~n.indexOf("adius")))
    )
      return (
        (m = _ ? t.getBBox()[u ? "width" : "height"] : t[c]),
        Zt(d ? (s / m) * f : (s / 100) * m)
      );
    if (
      ((a[u ? "width" : "height"] = f + (h ? o : i)),
        (p =
          (i !== "rem" && ~n.indexOf("adius")) ||
            (i === "em" && t.appendChild && !l)
            ? t
            : t.parentNode),
        _ && (p = (t.ownerSVGElement || {}).parentNode),
        (!p || p === pr || !p.appendChild) && (p = pr.body),
        (g = p._gsap),
        g && d && g.width && u && g.time === on.time && !g.uncache)
    )
      return Zt((s / g.width) * f);
    if (d && (n === "height" || n === "width")) {
      var w = t.style[n];
      (t.style[n] = f + i), (m = t[c]), w ? (t.style[n] = w) : Jr(t, n);
    } else
      (d || o === "%") &&
        !Db[vn(p, "display")] &&
        (a.position = vn(t, "position")),
        p === t && (a.position = "static"),
        p.appendChild(jr),
        (m = jr[c]),
        p.removeChild(jr),
        (a.position = "absolute");
    return (
      u && d && ((g = Gr(p)), (g.time = on.time), (g.width = p[c])),
      Zt(h ? (m * s) / f : m && s ? (f / m) * s : 0)
    );
  },
  Zn = function (t, n, r, i) {
    var s;
    return (
      sc || Gu(),
      n in Nn &&
      n !== "transform" &&
      ((n = Nn[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      sr[n] && n !== "transform"
        ? ((s = Bs(t, i)),
          (s =
            n !== "transformOrigin"
              ? s[n]
              : s.svg
                ? s.origin
                : Qo(vn(t, qe)) + " " + s.zOrigin + "px"))
        : ((s = t.style[n]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
          (s =
            (Zo[n] && Zo[n](t, n, r)) ||
            vn(t, n) ||
            sm(t, n) ||
            (n === "opacity" ? 1 : 0))),
      r && !~(s + "").trim().indexOf(" ") ? Sr(t, n, s, r) + r : s
    );
  },
  Ob = function (t, n, r, i) {
    if (!r || r === "none") {
      var s = Bi(n, t, 1),
        o = s && vn(t, s, 1);
      o && o !== r
        ? ((n = s), (r = o))
        : n === "borderColor" && (r = vn(t, "borderTopColor"));
    }
    var a = new He(this._pt, t.style, n, 0, 1, Vm),
      u = 0,
      l = 0,
      c,
      f,
      h,
      d,
      m,
      p,
      g,
      _,
      w,
      x,
      b,
      T;
    if (
      ((a.b = r),
        (a.e = i),
        (r += ""),
        (i += ""),
        i.substring(0, 6) === "var(--" &&
        (i = vn(t, i.substring(4, i.indexOf(")")))),
        i === "auto" &&
        ((p = t.style[n]),
          (t.style[n] = i),
          (i = vn(t, n) || i),
          p ? (t.style[n] = p) : Jr(t, n)),
        (c = [r, i]),
        Sm(c),
        (r = c[0]),
        (i = c[1]),
        (h = r.match(gi) || []),
        (T = i.match(gi) || []),
        T.length)
    ) {
      for (; (f = gi.exec(i));)
        (g = f[0]),
          (w = i.substring(u, f.index)),
          m
            ? (m = (m + 1) % 5)
            : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (m = 1),
          g !== (p = h[l++] || "") &&
          ((d = parseFloat(p) || 0),
            (b = p.substr((d + "").length)),
            g.charAt(1) === "=" && (g = vi(d, g) + b),
            (_ = parseFloat(g)),
            (x = g.substr((_ + "").length)),
            (u = gi.lastIndex - x.length),
            x ||
            ((x = x || ln.units[n] || b),
              u === i.length && ((i += x), (a.e += x))),
            b !== x && (d = Sr(t, n, p, x) || 0),
            (a._pt = {
              _next: a._pt,
              p: w || l === 1 ? w : ",",
              s: d,
              c: _ - d,
              m: (m && m < 4) || n === "zIndex" ? Math.round : 0,
            }));
      a.c = u < i.length ? i.substring(u, i.length) : "";
    } else a.r = n === "display" && i === "none" ? Bm : Lm;
    return Jp.test(i) && (a.e = 0), (this._pt = a), a;
  },
  xh = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Vb = function (t) {
    var n = t.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
      ((t = r), (r = i), (i = t)),
      (n[0] = xh[r] || r),
      (n[1] = xh[i] || i),
      n.join(" ")
    );
  },
  Fb = function (t, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        a,
        u,
        l;
      if (s === "all" || s === !0) (i.cssText = ""), (u = 1);
      else
        for (s = s.split(","), l = s.length; --l > -1;)
          (a = s[l]),
            sr[a] && ((u = 1), (a = a === "transformOrigin" ? qe : $t)),
            Jr(r, a);
      u &&
        (Jr(r, $t),
          o &&
          (o.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            Bs(r, 1),
            (o.uncache = 1),
            Nm(i)));
    }
  },
  Zo = {
    clearProps: function (t, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = (t._pt = new He(t._pt, n, r, 0, 0, Fb));
        return (o.u = i), (o.pr = -10), (o.tween = s), t._props.push(r), 1;
      }
    },
  },
  Ls = [1, 0, 0, 1, 0, 0],
  Wm = {},
  Ym = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  bh = function (t) {
    var n = vn(t, $t);
    return Ym(n) ? Ls : n.substr(7).match(Qp).map(Zt);
  },
  uc = function (t, n) {
    var r = t._gsap || Gr(t),
      i = t.style,
      s = bh(t),
      o,
      a,
      u,
      l;
    return r.svg && t.getAttribute("transform")
      ? ((u = t.transform.baseVal.consolidate().matrix),
        (s = [u.a, u.b, u.c, u.d, u.e, u.f]),
        s.join(",") === "1,0,0,1,0,0" ? Ls : s)
      : (s === Ls &&
        !t.offsetParent &&
        t !== xi &&
        !r.svg &&
        ((u = i.display),
          (i.display = "block"),
          (o = t.parentNode),
          (!o || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
          ((l = 1), (a = t.nextElementSibling), xi.appendChild(t)),
          (s = bh(t)),
          u ? (i.display = u) : Jr(t, "display"),
          l &&
          (a
            ? o.insertBefore(t, a)
            : o
              ? o.appendChild(t)
              : xi.removeChild(t))),
        n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Xu = function (t, n, r, i, s, o) {
    var a = t._gsap,
      u = s || uc(t, !0),
      l = a.xOrigin || 0,
      c = a.yOrigin || 0,
      f = a.xOffset || 0,
      h = a.yOffset || 0,
      d = u[0],
      m = u[1],
      p = u[2],
      g = u[3],
      _ = u[4],
      w = u[5],
      x = n.split(" "),
      b = parseFloat(x[0]) || 0,
      T = parseFloat(x[1]) || 0,
      y,
      v,
      P,
      E;
    r
      ? u !== Ls &&
      (v = d * g - m * p) &&
      ((P = b * (g / v) + T * (-p / v) + (p * w - g * _) / v),
        (E = b * (-m / v) + T * (d / v) - (d * w - m * _) / v),
        (b = P),
        (T = E))
      : ((y = $m(t)),
        (b = y.x + (~x[0].indexOf("%") ? (b / 100) * y.width : b)),
        (T = y.y + (~(x[1] || x[0]).indexOf("%") ? (T / 100) * y.height : T))),
      i || (i !== !1 && a.smooth)
        ? ((_ = b - l),
          (w = T - c),
          (a.xOffset = f + (_ * d + w * p) - _),
          (a.yOffset = h + (_ * m + w * g) - w))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = b),
      (a.yOrigin = T),
      (a.smooth = !!i),
      (a.origin = n),
      (a.originIsAbsolute = !!r),
      (t.style[qe] = "0px 0px"),
      o &&
      (mr(o, a, "xOrigin", l, b),
        mr(o, a, "yOrigin", c, T),
        mr(o, a, "xOffset", f, a.xOffset),
        mr(o, a, "yOffset", h, a.yOffset)),
      t.setAttribute("data-svg-origin", b + " " + T);
  },
  Bs = function (t, n) {
    var r = t._gsap || new Em(t);
    if ("x" in r && !n && !r.uncache) return r;
    var i = t.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      u = getComputedStyle(t),
      l = vn(t, qe) || "0",
      c,
      f,
      h,
      d,
      m,
      p,
      g,
      _,
      w,
      x,
      b,
      T,
      y,
      v,
      P,
      E,
      M,
      j,
      D,
      z,
      N,
      G,
      k,
      R,
      V,
      L,
      S,
      J,
      ft,
      Ct,
      tt,
      _t;
    return (
      (c = f = h = p = g = _ = w = x = b = 0),
      (d = m = 1),
      (r.svg = !!(t.getCTM && Um(t))),
      u.translate &&
      ((u.translate !== "none" ||
        u.scale !== "none" ||
        u.rotate !== "none") &&
        (i[$t] =
          (u.translate !== "none"
            ? "translate3d(" +
            (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
            ") "
            : "") +
          (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
          (u.scale !== "none"
            ? "scale(" + u.scale.split(" ").join(",") + ") "
            : "") +
          (u[$t] !== "none" ? u[$t] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (v = uc(t, r.svg)),
      r.svg &&
      (r.uncache
        ? ((V = t.getBBox()),
          (l = r.xOrigin - V.x + "px " + (r.yOrigin - V.y) + "px"),
          (R = ""))
        : (R = !n && t.getAttribute("data-svg-origin")),
        Xu(t, R || l, !!R || r.originIsAbsolute, r.smooth !== !1, v)),
      (T = r.xOrigin || 0),
      (y = r.yOrigin || 0),
      v !== Ls &&
      ((j = v[0]),
        (D = v[1]),
        (z = v[2]),
        (N = v[3]),
        (c = G = v[4]),
        (f = k = v[5]),
        v.length === 6
          ? ((d = Math.sqrt(j * j + D * D)),
            (m = Math.sqrt(N * N + z * z)),
            (p = j || D ? si(D, j) * Or : 0),
            (w = z || N ? si(z, N) * Or + p : 0),
            w && (m *= Math.abs(Math.cos(w * bi))),
            r.svg && ((c -= T - (T * j + y * z)), (f -= y - (T * D + y * N))))
          : ((_t = v[6]),
            (Ct = v[7]),
            (S = v[8]),
            (J = v[9]),
            (ft = v[10]),
            (tt = v[11]),
            (c = v[12]),
            (f = v[13]),
            (h = v[14]),
            (P = si(_t, ft)),
            (g = P * Or),
            P &&
            ((E = Math.cos(-P)),
              (M = Math.sin(-P)),
              (R = G * E + S * M),
              (V = k * E + J * M),
              (L = _t * E + ft * M),
              (S = G * -M + S * E),
              (J = k * -M + J * E),
              (ft = _t * -M + ft * E),
              (tt = Ct * -M + tt * E),
              (G = R),
              (k = V),
              (_t = L)),
            (P = si(-z, ft)),
            (_ = P * Or),
            P &&
            ((E = Math.cos(-P)),
              (M = Math.sin(-P)),
              (R = j * E - S * M),
              (V = D * E - J * M),
              (L = z * E - ft * M),
              (tt = N * M + tt * E),
              (j = R),
              (D = V),
              (z = L)),
            (P = si(D, j)),
            (p = P * Or),
            P &&
            ((E = Math.cos(P)),
              (M = Math.sin(P)),
              (R = j * E + D * M),
              (V = G * E + k * M),
              (D = D * E - j * M),
              (k = k * E - G * M),
              (j = R),
              (G = V)),
            g &&
            Math.abs(g) + Math.abs(p) > 359.9 &&
            ((g = p = 0), (_ = 180 - _)),
            (d = Zt(Math.sqrt(j * j + D * D + z * z))),
            (m = Zt(Math.sqrt(k * k + _t * _t))),
            (P = si(G, k)),
            (w = Math.abs(P) > 2e-4 ? P * Or : 0),
            (b = tt ? 1 / (tt < 0 ? -tt : tt) : 0)),
        r.svg &&
        ((R = t.getAttribute("transform")),
          (r.forceCSS = t.setAttribute("transform", "") || !Ym(vn(t, $t))),
          R && t.setAttribute("transform", R))),
      Math.abs(w) > 90 &&
      Math.abs(w) < 270 &&
      (s
        ? ((d *= -1), (w += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
        : ((m *= -1), (w += w <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (t.offsetWidth * r.xPercent) / 100
          : 0) +
        o),
      (r.y =
        f -
        ((r.yPercent =
          f &&
          ((!n && r.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (t.offsetHeight * r.yPercent) / 100
          : 0) +
        o),
      (r.z = h + o),
      (r.scaleX = Zt(d)),
      (r.scaleY = Zt(m)),
      (r.rotation = Zt(p) + a),
      (r.rotationX = Zt(g) + a),
      (r.rotationY = Zt(_) + a),
      (r.skewX = w + a),
      (r.skewY = x + a),
      (r.transformPerspective = b + o),
      (r.zOrigin = parseFloat(l.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
      (i[qe] = Qo(l)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = ln.force3D),
      (r.renderTransform = r.svg ? Lb : zm ? Gm : Ib),
      (r.uncache = 0),
      r
    );
  },
  Qo = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Qa = function (t, n, r) {
    var i = Ae(n);
    return Zt(parseFloat(n) + parseFloat(Sr(t, "x", r + "px", i))) + i;
  },
  Ib = function (t, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      Gm(t, n);
  },
  Rr = "0deg",
  Xi = "0px",
  kr = ") ",
  Gm = function (t, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      u = r.z,
      l = r.rotation,
      c = r.rotationY,
      f = r.rotationX,
      h = r.skewX,
      d = r.skewY,
      m = r.scaleX,
      p = r.scaleY,
      g = r.transformPerspective,
      _ = r.force3D,
      w = r.target,
      x = r.zOrigin,
      b = "",
      T = (_ === "auto" && t && t !== 1) || _ === !0;
    if (x && (f !== Rr || c !== Rr)) {
      var y = parseFloat(c) * bi,
        v = Math.sin(y),
        P = Math.cos(y),
        E;
      (y = parseFloat(f) * bi),
        (E = Math.cos(y)),
        (o = Qa(w, o, v * E * -x)),
        (a = Qa(w, a, -Math.sin(y) * -x)),
        (u = Qa(w, u, P * E * -x + x));
    }
    g !== Xi && (b += "perspective(" + g + kr),
      (i || s) && (b += "translate(" + i + "%, " + s + "%) "),
      (T || o !== Xi || a !== Xi || u !== Xi) &&
      (b +=
        u !== Xi || T
          ? "translate3d(" + o + ", " + a + ", " + u + ") "
          : "translate(" + o + ", " + a + kr),
      l !== Rr && (b += "rotate(" + l + kr),
      c !== Rr && (b += "rotateY(" + c + kr),
      f !== Rr && (b += "rotateX(" + f + kr),
      (h !== Rr || d !== Rr) && (b += "skew(" + h + ", " + d + kr),
      (m !== 1 || p !== 1) && (b += "scale(" + m + ", " + p + kr),
      (w.style[$t] = b || "translate(0, 0)");
  },
  Lb = function (t, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      u = r.rotation,
      l = r.skewX,
      c = r.skewY,
      f = r.scaleX,
      h = r.scaleY,
      d = r.target,
      m = r.xOrigin,
      p = r.yOrigin,
      g = r.xOffset,
      _ = r.yOffset,
      w = r.forceCSS,
      x = parseFloat(o),
      b = parseFloat(a),
      T,
      y,
      v,
      P,
      E;
    (u = parseFloat(u)),
      (l = parseFloat(l)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (l += c), (u += c)),
      u || l
        ? ((u *= bi),
          (l *= bi),
          (T = Math.cos(u) * f),
          (y = Math.sin(u) * f),
          (v = Math.sin(u - l) * -h),
          (P = Math.cos(u - l) * h),
          l &&
          ((c *= bi),
            (E = Math.tan(l - c)),
            (E = Math.sqrt(1 + E * E)),
            (v *= E),
            (P *= E),
            c &&
            ((E = Math.tan(c)),
              (E = Math.sqrt(1 + E * E)),
              (T *= E),
              (y *= E))),
          (T = Zt(T)),
          (y = Zt(y)),
          (v = Zt(v)),
          (P = Zt(P)))
        : ((T = f), (P = h), (y = v = 0)),
      ((x && !~(o + "").indexOf("px")) || (b && !~(a + "").indexOf("px"))) &&
      ((x = Sr(d, "x", o, "px")), (b = Sr(d, "y", a, "px"))),
      (m || p || g || _) &&
      ((x = Zt(x + m - (m * T + p * v) + g)),
        (b = Zt(b + p - (m * y + p * P) + _))),
      (i || s) &&
      ((E = d.getBBox()),
        (x = Zt(x + (i / 100) * E.width)),
        (b = Zt(b + (s / 100) * E.height))),
      (E =
        "matrix(" + T + "," + y + "," + v + "," + P + "," + x + "," + b + ")"),
      d.setAttribute("transform", E),
      w && (d.style[$t] = E);
  },
  Bb = function (t, n, r, i, s) {
    var o = 360,
      a = de(s),
      u = parseFloat(s) * (a && ~s.indexOf("rad") ? Or : 1),
      l = u - i,
      c = i + l + "deg",
      f,
      h;
    return (
      a &&
      ((f = s.split("_")[1]),
        f === "short" &&
        ((l %= o), l !== l % (o / 2) && (l += l < 0 ? o : -360)),
        f === "cw" && l < 0
          ? (l = ((l + o * mh) % o) - ~~(l / o) * o)
          : f === "ccw" && l > 0 && (l = ((l - o * mh) % o) - ~~(l / o) * o)),
      (t._pt = h = new He(t._pt, n, r, i, l, bb)),
      (h.e = c),
      (h.u = "deg"),
      t._props.push(r),
      h
    );
  },
  Th = function (t, n) {
    for (var r in n) t[r] = n[r];
    return t;
  },
  Nb = function (t, n, r) {
    var i = Th({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a,
      u,
      l,
      c,
      f,
      h,
      d,
      m;
    i.svg
      ? ((l = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (o[$t] = n),
        (a = Bs(r, 1)),
        Jr(r, $t),
        r.setAttribute("transform", l))
      : ((l = getComputedStyle(r)[$t]),
        (o[$t] = n),
        (a = Bs(r, 1)),
        (o[$t] = l));
    for (u in sr)
      (l = i[u]),
        (c = a[u]),
        l !== c &&
        s.indexOf(u) < 0 &&
        ((d = Ae(l)),
          (m = Ae(c)),
          (f = d !== m ? Sr(r, u, l, m) : parseFloat(l)),
          (h = parseFloat(c)),
          (t._pt = new He(t._pt, a, u, f, h - f, Wu)),
          (t._pt.u = m || 0),
          t._props.push(u));
    Th(a, i);
  };
Xe("padding,margin,Width,Radius", function (e, t) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (t < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (a) {
      return t < 2 ? e + a : "border" + a + e;
    });
  Zo[t > 1 ? "border" + e : e] = function (a, u, l, c, f) {
    var h, d;
    if (arguments.length < 4)
      return (
        (h = o.map(function (m) {
          return Zn(a, m, l);
        })),
        (d = h.join(" ")),
        d.split(h[0]).length === 5 ? h[0] : d
      );
    (h = (c + "").split(" ")),
      (d = {}),
      o.forEach(function (m, p) {
        return (d[m] = h[p] = h[p] || h[((p - 1) / 2) | 0]);
      }),
      a.init(u, d, f);
  };
});
var Xm = {
  name: "css",
  register: Gu,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, n, r, i, s) {
    var o = this._props,
      a = t.style,
      u = r.vars.startAt,
      l,
      c,
      f,
      h,
      d,
      m,
      p,
      g,
      _,
      w,
      x,
      b,
      T,
      y,
      v,
      P;
    sc || Gu(),
      (this.styles = this.styles || jm(t)),
      (P = this.styles.props),
      (this.tween = r);
    for (p in n)
      if (p !== "autoRound" && ((c = n[p]), !(rn[p] && Mm(p, n, r, i, t, s)))) {
        if (
          ((d = typeof c),
            (m = Zo[p]),
            d === "function" && ((c = c.call(r, i, t, s)), (d = typeof c)),
            d === "string" && ~c.indexOf("random(") && (c = Vs(c)),
            m)
        )
          m(this, t, p, c, r) && (v = 1);
        else if (p.substr(0, 2) === "--")
          (l = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
            (c += ""),
            (vr.lastIndex = 0),
            vr.test(l) || ((g = Ae(l)), (_ = Ae(c))),
            _ ? g !== _ && (l = Sr(t, p, l, _) + _) : g && (c += g),
            this.add(a, "setProperty", l, c, i, s, 0, 0, p),
            o.push(p),
            P.push(p, 0, a[p]);
        else if (d !== "undefined") {
          if (
            (u && p in u
              ? ((l = typeof u[p] == "function" ? u[p].call(r, i, t, s) : u[p]),
                de(l) && ~l.indexOf("random(") && (l = Vs(l)),
                Ae(l + "") ||
                l === "auto" ||
                (l += ln.units[p] || Ae(Zn(t, p)) || ""),
                (l + "").charAt(1) === "=" && (l = Zn(t, p)))
              : (l = Zn(t, p)),
              (h = parseFloat(l)),
              (w = d === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              w && (c = c.substr(2)),
              (f = parseFloat(c)),
              p in Nn &&
              (p === "autoAlpha" &&
                (h === 1 && Zn(t, "visibility") === "hidden" && f && (h = 0),
                  P.push("visibility", 0, a.visibility),
                  mr(
                    this,
                    a,
                    "visibility",
                    h ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                p !== "scale" &&
                p !== "transform" &&
                ((p = Nn[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (x = p in sr),
              x)
          ) {
            if (
              (this.styles.save(p),
                d === "string" &&
                c.substring(0, 6) === "var(--" &&
                ((c = vn(t, c.substring(4, c.indexOf(")")))),
                  (f = parseFloat(c))),
                b ||
                ((T = t._gsap),
                  (T.renderTransform && !n.parseTransform) ||
                  Bs(t, n.parseTransform),
                  (y = n.smoothOrigin !== !1 && T.smooth),
                  (b = this._pt =
                    new He(this._pt, a, $t, 0, 1, T.renderTransform, T, 0, -1)),
                  (b.dep = 1)),
                p === "scale")
            )
              (this._pt = new He(
                this._pt,
                T,
                "scaleY",
                T.scaleY,
                (w ? vi(T.scaleY, w + f) : f) - T.scaleY || 0,
                Wu
              )),
                (this._pt.u = 0),
                o.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              P.push(qe, 0, a[qe]),
                (c = Vb(c)),
                T.svg
                  ? Xu(t, c, 0, y, 0, this)
                  : ((_ = parseFloat(c.split(" ")[2]) || 0),
                    _ !== T.zOrigin && mr(this, T, "zOrigin", T.zOrigin, _),
                    mr(this, a, p, Qo(l), Qo(c)));
              continue;
            } else if (p === "svgOrigin") {
              Xu(t, c, 1, y, 0, this);
              continue;
            } else if (p in Wm) {
              Bb(this, T, p, h, w ? vi(h, w + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              mr(this, T, "smooth", T.smooth, c);
              continue;
            } else if (p === "force3D") {
              T[p] = c;
              continue;
            } else if (p === "transform") {
              Nb(this, c, t);
              continue;
            }
          } else p in a || (p = Bi(p) || p);
          if (x || ((f || f === 0) && (h || h === 0) && !xb.test(c) && p in a))
            (g = (l + "").substr((h + "").length)),
              f || (f = 0),
              (_ = Ae(c) || (p in ln.units ? ln.units[p] : g)),
              g !== _ && (h = Sr(t, p, l, _)),
              (this._pt = new He(
                this._pt,
                x ? T : a,
                p,
                h,
                (w ? vi(h, w + f) : f) - h,
                !x && (_ === "px" || p === "zIndex") && n.autoRound !== !1
                  ? wb
                  : Wu
              )),
              (this._pt.u = _ || 0),
              g !== _ && _ !== "%" && ((this._pt.b = l), (this._pt.r = Tb));
          else if (p in a) Ob.call(this, t, p, l, w ? w + c : c);
          else if (p in t) this.add(t, p, l || t[p], w ? w + c : c, i, s);
          else if (p !== "parseTransform") {
            ql(p, c);
            continue;
          }
          x ||
            (p in a
              ? P.push(p, 0, a[p])
              : typeof t[p] == "function"
                ? P.push(p, 2, t[p]())
                : P.push(p, 1, l || t[p])),
            o.push(p);
        }
      }
    v && Fm(this);
  },
  render: function (t, n) {
    if (n.tween._time || !oc())
      for (var r = n._pt; r;) r.r(t, r.d), (r = r._next);
    else n.styles.revert();
  },
  get: Zn,
  aliases: Nn,
  getSetter: function (t, n, r) {
    var i = Nn[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in sr && n !== qe && (t._gsap.x || Zn(t, "x"))
        ? r && ph === r
          ? n === "scale"
            ? Ab
            : Cb
          : (ph = r || {}) && (n === "scale" ? Eb : Mb)
        : t.style && !Gl(t.style[n])
          ? Sb
          : ~n.indexOf("-")
            ? Pb
            : rc(t, n)
    );
  },
  core: { _removeProperty: Jr, _getMatrix: uc },
};
Ke.utils.checkPrefix = Bi;
Ke.core.getStyleSaver = jm;
(function (e, t, n, r) {
  var i = Xe(e + "," + t + "," + n, function (s) {
    sr[s] = 1;
  });
  Xe(t, function (s) {
    (ln.units[s] = "deg"), (Wm[s] = 1);
  }),
    (Nn[i[13]] = e + "," + t),
    Xe(r, function (s) {
      var o = s.split(":");
      Nn[o[1]] = i[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Xe(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (e) {
    ln.units[e] = "px";
  }
);
Ke.registerPlugin(Xm);
var jb = Ke.registerPlugin(Xm) || Ke;
jb.core.Tween;
function zb(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function $b(e, t, n) {
  return t && zb(e.prototype, t), e;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var _e,
  ko,
  an,
  gr,
  yr,
  Ti,
  Hm,
  Vr,
  ms,
  qm,
  Jn,
  An,
  Km,
  Zm = function () {
    return (
      _e ||
      (typeof window < "u" && (_e = window.gsap) && _e.registerPlugin && _e)
    );
  },
  Qm = 1,
  _i = [],
  ct = [],
  Yn = [],
  gs = Date.now,
  Hu = function (t, n) {
    return n;
  },
  Ub = function () {
    var t = ms.core,
      n = t.bridge || {},
      r = t._scrollers,
      i = t._proxies;
    r.push.apply(r, ct),
      i.push.apply(i, Yn),
      (ct = r),
      (Yn = i),
      (Hu = function (o, a) {
        return n[o](a);
      });
  },
  xr = function (t, n) {
    return ~Yn.indexOf(t) && Yn[Yn.indexOf(t) + 1][n];
  },
  ys = function (t) {
    return !!~qm.indexOf(t);
  },
  Ve = function (t, n, r, i, s) {
    return t.addEventListener(n, r, { passive: i !== !1, capture: !!s });
  },
  Oe = function (t, n, r, i) {
    return t.removeEventListener(n, r, !!i);
  },
  io = "scrollLeft",
  so = "scrollTop",
  qu = function () {
    return (Jn && Jn.isPressed) || ct.cache++;
  },
  Jo = function (t, n) {
    var r = function i(s) {
      if (s || s === 0) {
        Qm && (an.history.scrollRestoration = "manual");
        var o = Jn && Jn.isPressed;
        (s = i.v = Math.round(s) || (Jn && Jn.iOS ? 1 : 0)),
          t(s),
          (i.cacheID = ct.cache),
          o && Hu("ss", s);
      } else
        (n || ct.cache !== i.cacheID || Hu("ref")) &&
          ((i.cacheID = ct.cache), (i.v = t()));
      return i.v + i.offset;
    };
    return (r.offset = 0), t && r;
  },
  je = {
    s: io,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Jo(function (e) {
      return arguments.length
        ? an.scrollTo(e, ae.sc())
        : an.pageXOffset || gr[io] || yr[io] || Ti[io] || 0;
    }),
  },
  ae = {
    s: so,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: je,
    sc: Jo(function (e) {
      return arguments.length
        ? an.scrollTo(je.sc(), e)
        : an.pageYOffset || gr[so] || yr[so] || Ti[so] || 0;
    }),
  },
  Ue = function (t, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || _e.utils.toArray)(t)[0] ||
      (typeof t == "string" && _e.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", t)
        : null)
    );
  },
  Wb = function (t, n) {
    for (var r = n.length; r--;) if (n[r] === t || n[r].contains(t)) return !0;
    return !1;
  },
  Pr = function (t, n) {
    var r = n.s,
      i = n.sc;
    ys(t) && (t = gr.scrollingElement || yr);
    var s = ct.indexOf(t),
      o = i === ae.sc ? 1 : 2;
    !~s && (s = ct.push(t) - 1), ct[s + o] || Ve(t, "scroll", qu);
    var a = ct[s + o],
      u =
        a ||
        (ct[s + o] =
          Jo(xr(t, r), !0) ||
          (ys(t)
            ? i
            : Jo(function (l) {
              return arguments.length ? (t[r] = l) : t[r];
            })));
    return (
      (u.target = t),
      a || (u.smooth = _e.getProperty(t, "scrollBehavior") === "smooth"),
      u
    );
  },
  Ku = function (t, n, r) {
    var i = t,
      s = t,
      o = gs(),
      a = o,
      u = n || 50,
      l = Math.max(500, u * 3),
      c = function (m, p) {
        var g = gs();
        p || g - o > u
          ? ((s = i), (i = m), (a = o), (o = g))
          : r
            ? (i += m)
            : (i = s + ((m - s) / (g - a)) * (o - a));
      },
      f = function () {
        (s = i = r ? 0 : i), (a = o = 0);
      },
      h = function (m) {
        var p = a,
          g = s,
          _ = gs();
        return (
          (m || m === 0) && m !== i && c(m),
          o === a || _ - a > l
            ? 0
            : ((i + (r ? g : -g)) / ((r ? _ : o) - p)) * 1e3
        );
      };
    return { update: c, reset: f, getVelocity: h };
  },
  Hi = function (t, n) {
    return (
      n && !t._gsapAllow && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  },
  wh = function (t) {
    var n = Math.max.apply(Math, t),
      r = Math.min.apply(Math, t);
    return Math.abs(n) >= Math.abs(r) ? n : r;
  },
  Jm = function () {
    (ms = _e.core.globals().ScrollTrigger), ms && ms.core && Ub();
  },
  tg = function (t) {
    return (
      (_e = t || Zm()),
      !ko &&
      _e &&
      typeof document < "u" &&
      document.body &&
      ((an = window),
        (gr = document),
        (yr = gr.documentElement),
        (Ti = gr.body),
        (qm = [an, gr, yr, Ti]),
        _e.utils.clamp,
        (Km = _e.core.context || function () { }),
        (Vr = "onpointerenter" in Ti ? "pointer" : "mouse"),
        (Hm = Qt.isTouch =
          an.matchMedia &&
            an.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in an ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (An = Qt.eventTypes =
          (
            "ontouchstart" in yr
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in yr
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Qm = 0);
        }, 500),
        Jm(),
        (ko = 1)),
      ko
    );
  };
je.op = ae;
ct.cache = 0;
var Qt = (function () {
  function e(n) {
    this.init(n);
  }
  var t = e.prototype;
  return (
    (t.init = function (r) {
      ko || tg(_e) || console.warn("Please gsap.registerPlugin(Observer)"),
        ms || Jm();
      var i = r.tolerance,
        s = r.dragMinimum,
        o = r.type,
        a = r.target,
        u = r.lineHeight,
        l = r.debounce,
        c = r.preventDefault,
        f = r.onStop,
        h = r.onStopDelay,
        d = r.ignore,
        m = r.wheelSpeed,
        p = r.event,
        g = r.onDragStart,
        _ = r.onDragEnd,
        w = r.onDrag,
        x = r.onPress,
        b = r.onRelease,
        T = r.onRight,
        y = r.onLeft,
        v = r.onUp,
        P = r.onDown,
        E = r.onChangeX,
        M = r.onChangeY,
        j = r.onChange,
        D = r.onToggleX,
        z = r.onToggleY,
        N = r.onHover,
        G = r.onHoverEnd,
        k = r.onMove,
        R = r.ignoreCheck,
        V = r.isNormalizer,
        L = r.onGestureStart,
        S = r.onGestureEnd,
        J = r.onWheel,
        ft = r.onEnable,
        Ct = r.onDisable,
        tt = r.onClick,
        _t = r.scrollSpeed,
        At = r.capture,
        vt = r.allowClicks,
        Z = r.lockAxis,
        pt = r.onLockAxis;
      (this.target = a = Ue(a) || yr),
        (this.vars = r),
        d && (d = _e.utils.toArray(d)),
        (i = i || 1e-9),
        (s = s || 0),
        (m = m || 1),
        (_t = _t || 1),
        (o = o || "wheel,touch,pointer"),
        (l = l !== !1),
        u || (u = parseFloat(an.getComputedStyle(Ti).lineHeight) || 22);
      var Xt,
        kt,
        Et,
        mt,
        Bt,
        pe,
        De,
        A = this,
        xe = 0,
        F = 0,
        C = r.passive || (!c && r.passive !== !1),
        O = Pr(a, je),
        W = Pr(a, ae),
        H = O(),
        et = W(),
        ut =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          An[0] === "pointerdown",
        Ht = ys(a),
        it = a.ownerDocument || gr,
        Dt = [0, 0, 0],
        xt = [0, 0, 0],
        ht = 0,
        ie = function () {
          return (ht = gs());
        },
        U = function (X, bt) {
          return (
            ((A.event = X) && d && Wb(X.target, d)) ||
            (bt && ut && X.pointerType !== "touch") ||
            (R && R(X, bt))
          );
        },
        or = function () {
          A._vx.reset(), A._vy.reset(), kt.pause(), f && f(A);
        },
        $e = function () {
          var X = (A.deltaX = wh(Dt)),
            bt = (A.deltaY = wh(xt)),
            B = Math.abs(X) >= i,
            nt = Math.abs(bt) >= i;
          j && (B || nt) && j(A, X, bt, Dt, xt),
            B &&
            (T && A.deltaX > 0 && T(A),
              y && A.deltaX < 0 && y(A),
              E && E(A),
              D && A.deltaX < 0 != xe < 0 && D(A),
              (xe = A.deltaX),
              (Dt[0] = Dt[1] = Dt[2] = 0)),
            nt &&
            (P && A.deltaY > 0 && P(A),
              v && A.deltaY < 0 && v(A),
              M && M(A),
              z && A.deltaY < 0 != F < 0 && z(A),
              (F = A.deltaY),
              (xt[0] = xt[1] = xt[2] = 0)),
            (mt || Et) &&
            (k && k(A),
              Et && (g && Et === 1 && g(A), w && w(A), (Et = 0)),
              (mt = !1)),
            pe && !(pe = !1) && pt && pt(A),
            Bt && (J(A), (Bt = !1)),
            (Xt = 0);
        },
        Ze = function (X, bt, B) {
          (Dt[B] += X),
            (xt[B] += bt),
            A._vx.update(X),
            A._vy.update(bt),
            l ? Xt || (Xt = requestAnimationFrame($e)) : $e();
        },
        Xn = function (X, bt) {
          Z &&
            !De &&
            ((A.axis = De = Math.abs(X) > Math.abs(bt) ? "x" : "y"), (pe = !0)),
            De !== "y" && ((Dt[2] += X), A._vx.update(X, !0)),
            De !== "x" && ((xt[2] += bt), A._vy.update(bt, !0)),
            l ? Xt || (Xt = requestAnimationFrame($e)) : $e();
        },
        hn = function (X) {
          if (!U(X, 1)) {
            X = Hi(X, c);
            var bt = X.clientX,
              B = X.clientY,
              nt = bt - A.x,
              Y = B - A.y,
              rt = A.isDragging;
            (A.x = bt),
              (A.y = B),
              (rt ||
                ((nt || Y) &&
                  (Math.abs(A.startX - bt) >= s ||
                    Math.abs(A.startY - B) >= s))) &&
              ((Et = rt ? 2 : 1), rt || (A.isDragging = !0), Xn(nt, Y));
          }
        },
        wn = (A.onPress = function (K) {
          U(K, 1) ||
            (K && K.button) ||
            ((A.axis = De = null),
              kt.pause(),
              (A.isPressed = !0),
              (K = Hi(K)),
              (xe = F = 0),
              (A.startX = A.x = K.clientX),
              (A.startY = A.y = K.clientY),
              A._vx.reset(),
              A._vy.reset(),
              Ve(V ? a : it, An[1], hn, C, !0),
              (A.deltaX = A.deltaY = 0),
              x && x(A));
        }),
        Q = (A.onRelease = function (K) {
          if (!U(K, 1)) {
            Oe(V ? a : it, An[1], hn, !0);
            var X = !isNaN(A.y - A.startY),
              bt = A.isDragging,
              B =
                bt &&
                (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3),
              nt = Hi(K);
            !B &&
              X &&
              (A._vx.reset(),
                A._vy.reset(),
                c &&
                vt &&
                _e.delayedCall(0.08, function () {
                  if (gs() - ht > 300 && !K.defaultPrevented) {
                    if (K.target.click) K.target.click();
                    else if (it.createEvent) {
                      var Y = it.createEvent("MouseEvents");
                      Y.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        an,
                        1,
                        nt.screenX,
                        nt.screenY,
                        nt.clientX,
                        nt.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        K.target.dispatchEvent(Y);
                    }
                  }
                })),
              (A.isDragging = A.isGesturing = A.isPressed = !1),
              f && bt && !V && kt.restart(!0),
              Et && $e(),
              _ && bt && _(A),
              b && b(A, B);
          }
        }),
        Rn = function (X) {
          return (
            X.touches &&
            X.touches.length > 1 &&
            (A.isGesturing = !0) &&
            L(X, A.isDragging)
          );
        },
        ue = function () {
          return (A.isGesturing = !1) || S(A);
        },
        Tt = function (X) {
          if (!U(X)) {
            var bt = O(),
              B = W();
            Ze((bt - H) * _t, (B - et) * _t, 1),
              (H = bt),
              (et = B),
              f && kt.restart(!0);
          }
        },
        Ft = function (X) {
          if (!U(X)) {
            (X = Hi(X, c)), J && (Bt = !0);
            var bt =
              (X.deltaMode === 1 ? u : X.deltaMode === 2 ? an.innerHeight : 1) *
              m;
            Ze(X.deltaX * bt, X.deltaY * bt, 0), f && !V && kt.restart(!0);
          }
        },
        Qe = function (X) {
          if (!U(X)) {
            var bt = X.clientX,
              B = X.clientY,
              nt = bt - A.x,
              Y = B - A.y;
            (A.x = bt),
              (A.y = B),
              (mt = !0),
              f && kt.restart(!0),
              (nt || Y) && Xn(nt, Y);
          }
        },
        Sn = function (X) {
          (A.event = X), N(A);
        },
        Jt = function (X) {
          (A.event = X), G(A);
        },
        Pn = function (X) {
          return U(X) || (Hi(X, c) && tt(A));
        };
      (kt = A._dc = _e.delayedCall(h || 0.25, or).pause()),
        (A.deltaX = A.deltaY = 0),
        (A._vx = Ku(0, 50, !0)),
        (A._vy = Ku(0, 50, !0)),
        (A.scrollX = O),
        (A.scrollY = W),
        (A.isDragging = A.isGesturing = A.isPressed = !1),
        Km(this),
        (A.enable = function (K) {
          return (
            A.isEnabled ||
            (Ve(Ht ? it : a, "scroll", qu),
              o.indexOf("scroll") >= 0 && Ve(Ht ? it : a, "scroll", Tt, C, At),
              o.indexOf("wheel") >= 0 && Ve(a, "wheel", Ft, C, At),
              ((o.indexOf("touch") >= 0 && Hm) || o.indexOf("pointer") >= 0) &&
              (Ve(a, An[0], wn, C, At),
                Ve(it, An[2], Q),
                Ve(it, An[3], Q),
                vt && Ve(a, "click", ie, !0, !0),
                tt && Ve(a, "click", Pn),
                L && Ve(it, "gesturestart", Rn),
                S && Ve(it, "gestureend", ue),
                N && Ve(a, Vr + "enter", Sn),
                G && Ve(a, Vr + "leave", Jt),
                k && Ve(a, Vr + "move", Qe)),
              (A.isEnabled = !0),
              (A.isDragging = A.isGesturing = A.isPressed = mt = Et = !1),
              A._vx.reset(),
              A._vy.reset(),
              (H = O()),
              (et = W()),
              K && K.type && wn(K),
              ft && ft(A)),
            A
          );
        }),
        (A.disable = function () {
          A.isEnabled &&
            (_i.filter(function (K) {
              return K !== A && ys(K.target);
            }).length || Oe(Ht ? it : a, "scroll", qu),
              A.isPressed &&
              (A._vx.reset(), A._vy.reset(), Oe(V ? a : it, An[1], hn, !0)),
              Oe(Ht ? it : a, "scroll", Tt, At),
              Oe(a, "wheel", Ft, At),
              Oe(a, An[0], wn, At),
              Oe(it, An[2], Q),
              Oe(it, An[3], Q),
              Oe(a, "click", ie, !0),
              Oe(a, "click", Pn),
              Oe(it, "gesturestart", Rn),
              Oe(it, "gestureend", ue),
              Oe(a, Vr + "enter", Sn),
              Oe(a, Vr + "leave", Jt),
              Oe(a, Vr + "move", Qe),
              (A.isEnabled = A.isPressed = A.isDragging = !1),
              Ct && Ct(A));
        }),
        (A.kill = A.revert =
          function () {
            A.disable();
            var K = _i.indexOf(A);
            K >= 0 && _i.splice(K, 1), Jn === A && (Jn = 0);
          }),
        _i.push(A),
        V && ys(a) && (Jn = A),
        A.enable(p);
    }),
    $b(e, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    e
  );
})();
Qt.version = "3.13.0";
Qt.create = function (e) {
  return new Qt(e);
};
Qt.register = tg;
Qt.getAll = function () {
  return _i.slice();
};
Qt.getById = function (e) {
  return _i.filter(function (t) {
    return t.vars.id === e;
  })[0];
};
Zm() && _e.registerPlugin(Qt);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var $,
  ui,
  lt,
  Ot,
  sn,
  Pt,
  lc,
  ta,
  Ns,
  _s,
  ts,
  oo,
  Se,
  ya,
  Zu,
  Le,
  Sh,
  Ph,
  li,
  eg,
  Ja,
  ng,
  Ie,
  Qu,
  rg,
  ig,
  fr,
  Ju,
  cc,
  wi,
  fc,
  ea,
  tl,
  tu,
  ao = 1,
  Ce = Date.now,
  eu = Ce(),
  bn = 0,
  es = 0,
  Ch = function (t, n, r) {
    var i = nn(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return (r["_" + n + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
  },
  Ah = function (t, n) {
    return n && (!nn(t) || t.substr(0, 6) !== "clamp(")
      ? "clamp(" + t + ")"
      : t;
  },
  Yb = function e() {
    return es && requestAnimationFrame(e);
  },
  Eh = function () {
    return (ya = 1);
  },
  Mh = function () {
    return (ya = 0);
  },
  Fn = function (t) {
    return t;
  },
  ns = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  sg = function () {
    return typeof window < "u";
  },
  og = function () {
    return $ || (sg() && ($ = window.gsap) && $.registerPlugin && $);
  },
  ti = function (t) {
    return !!~lc.indexOf(t);
  },
  ag = function (t) {
    return (
      (t === "Height" ? fc : lt["inner" + t]) ||
      sn["client" + t] ||
      Pt["client" + t]
    );
  },
  ug = function (t) {
    return (
      xr(t, "getBoundingClientRect") ||
      (ti(t)
        ? function () {
          return (Io.width = lt.innerWidth), (Io.height = fc), Io;
        }
        : function () {
          return Qn(t);
        })
    );
  },
  Gb = function (t, n, r) {
    var i = r.d,
      s = r.d2,
      o = r.a;
    return (o = xr(t, "getBoundingClientRect"))
      ? function () {
        return o()[i];
      }
      : function () {
        return (n ? ag(s) : t["client" + s]) || 0;
      };
  },
  Xb = function (t, n) {
    return !n || ~Yn.indexOf(t)
      ? ug(t)
      : function () {
        return Io;
      };
  },
  jn = function (t, n) {
    var r = n.s,
      i = n.d2,
      s = n.d,
      o = n.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (o = xr(t, r))
        ? o() - ug(t)()[s]
        : ti(t)
          ? (sn[r] || Pt[r]) - ag(i)
          : t[r] - t["offset" + i]
    );
  },
  uo = function (t, n) {
    for (var r = 0; r < li.length; r += 3)
      (!n || ~n.indexOf(li[r + 1])) && t(li[r], li[r + 1], li[r + 2]);
  },
  nn = function (t) {
    return typeof t == "string";
  },
  Ee = function (t) {
    return typeof t == "function";
  },
  rs = function (t) {
    return typeof t == "number";
  },
  Fr = function (t) {
    return typeof t == "object";
  },
  qi = function (t, n, r) {
    return t && t.progress(n ? 0 : 1) && r && t.pause();
  },
  nu = function (t, n) {
    if (t.enabled) {
      var r = t._ctx
        ? t._ctx.add(function () {
          return n(t);
        })
        : n(t);
      r && r.totalTime && (t.callbackAnimation = r);
    }
  },
  oi = Math.abs,
  lg = "left",
  cg = "top",
  hc = "right",
  dc = "bottom",
  Kr = "width",
  Zr = "height",
  vs = "Right",
  xs = "Left",
  bs = "Top",
  Ts = "Bottom",
  te = "padding",
  gn = "margin",
  Ni = "Width",
  pc = "Height",
  oe = "px",
  yn = function (t) {
    return lt.getComputedStyle(t);
  },
  Hb = function (t) {
    var n = yn(t).position;
    t.style.position = n === "absolute" || n === "fixed" ? n : "relative";
  },
  Rh = function (t, n) {
    for (var r in n) r in t || (t[r] = n[r]);
    return t;
  },
  Qn = function (t, n) {
    var r =
      n &&
      yn(t)[Zu] !== "matrix(1, 0, 0, 1, 0, 0)" &&
      $.to(t, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
      }).progress(1),
      i = t.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  na = function (t, n) {
    var r = n.d2;
    return t["offset" + r] || t["client" + r] || 0;
  },
  fg = function (t) {
    var n = [],
      r = t.labels,
      i = t.duration(),
      s;
    for (s in r) n.push(r[s] / i);
    return n;
  },
  qb = function (t) {
    return function (n) {
      return $.utils.snap(fg(t), n);
    };
  },
  mc = function (t) {
    var n = $.utils.snap(t),
      r =
        Array.isArray(t) &&
        t.slice(0).sort(function (i, s) {
          return i - s;
        });
    return r
      ? function (i, s, o) {
        o === void 0 && (o = 0.001);
        var a;
        if (!s) return n(i);
        if (s > 0) {
          for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
          return r[a - 1];
        } else for (a = r.length, i += o; a--;) if (r[a] <= i) return r[a];
        return r[0];
      }
      : function (i, s, o) {
        o === void 0 && (o = 0.001);
        var a = n(i);
        return !s || Math.abs(a - i) < o || a - i < 0 == s < 0
          ? a
          : n(s < 0 ? i - t : i + t);
      };
  },
  Kb = function (t) {
    return function (n, r) {
      return mc(fg(t))(n, r.direction);
    };
  },
  lo = function (t, n, r, i) {
    return r.split(",").forEach(function (s) {
      return t(n, s, i);
    });
  },
  fe = function (t, n, r, i, s) {
    return t.addEventListener(n, r, { passive: !i, capture: !!s });
  },
  ce = function (t, n, r, i) {
    return t.removeEventListener(n, r, !!i);
  },
  co = function (t, n, r) {
    (r = r && r.wheelHandler), r && (t(n, "wheel", r), t(n, "touchmove", r));
  },
  kh = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  fo = { toggleActions: "play", anticipatePin: 0 },
  ra = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Do = function (t, n) {
    if (nn(t)) {
      var r = t.indexOf("="),
        i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
      ~r && (t.indexOf("%") > r && (i *= n / 100), (t = t.substr(0, r - 1))),
        (t =
          i +
          (t in ra
            ? ra[t] * n
            : ~t.indexOf("%")
              ? (parseFloat(t) * n) / 100
              : parseFloat(t) || 0));
    }
    return t;
  },
  ho = function (t, n, r, i, s, o, a, u) {
    var l = s.startColor,
      c = s.endColor,
      f = s.fontSize,
      h = s.indent,
      d = s.fontWeight,
      m = Ot.createElement("div"),
      p = ti(r) || xr(r, "pinType") === "fixed",
      g = t.indexOf("scroller") !== -1,
      _ = p ? Pt : r,
      w = t.indexOf("start") !== -1,
      x = w ? l : c,
      b =
        "border-color:" +
        x +
        ";font-size:" +
        f +
        ";color:" +
        x +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + ((g || u) && p ? "fixed;" : "absolute;")),
      (g || u || !p) &&
      (b += (i === ae ? hc : dc) + ":" + (o + parseFloat(h)) + "px;"),
      a &&
      (b +=
        "box-sizing:border-box;text-align:left;width:" +
        a.offsetWidth +
        "px;"),
      (m._isStart = w),
      m.setAttribute("class", "gsap-marker-" + t + (n ? " marker-" + n : "")),
      (m.style.cssText = b),
      (m.innerText = n || n === 0 ? t + "-" + n : t),
      _.children[0] ? _.insertBefore(m, _.children[0]) : _.appendChild(m),
      (m._offset = m["offset" + i.op.d2]),
      Oo(m, 0, i, w),
      m
    );
  },
  Oo = function (t, n, r, i) {
    var s = { display: "block" },
      o = r[i ? "os2" : "p2"],
      a = r[i ? "p2" : "os2"];
    (t._isFlipped = i),
      (s[r.a + "Percent"] = i ? -100 : 0),
      (s[r.a] = i ? "1px" : 0),
      (s["border" + o + Ni] = 1),
      (s["border" + a + Ni] = 0),
      (s[r.p] = n + "px"),
      $.set(t, s);
  },
  at = [],
  el = {},
  js,
  Dh = function () {
    return Ce() - bn > 34 && (js || (js = requestAnimationFrame(er)));
  },
  ai = function () {
    (!Ie || !Ie.isPressed || Ie.startX > Pt.clientWidth) &&
      (ct.cache++,
        Ie ? js || (js = requestAnimationFrame(er)) : er(),
        bn || ni("scrollStart"),
        (bn = Ce()));
  },
  ru = function () {
    (ig = lt.innerWidth), (rg = lt.innerHeight);
  },
  is = function (t) {
    ct.cache++,
      (t === !0 ||
        (!Se &&
          !ng &&
          !Ot.fullscreenElement &&
          !Ot.webkitFullscreenElement &&
          (!Qu ||
            ig !== lt.innerWidth ||
            Math.abs(lt.innerHeight - rg) > lt.innerHeight * 0.25))) &&
      ta.restart(!0);
  },
  ei = {},
  Zb = [],
  hg = function e() {
    return ce(dt, "scrollEnd", e) || zr(!0);
  },
  ni = function (t) {
    return (
      (ei[t] &&
        ei[t].map(function (n) {
          return n();
        })) ||
      Zb
    );
  },
  en = [],
  dg = function (t) {
    for (var n = 0; n < en.length; n += 5)
      (!t || (en[n + 4] && en[n + 4].query === t)) &&
        ((en[n].style.cssText = en[n + 1]),
          en[n].getBBox && en[n].setAttribute("transform", en[n + 2] || ""),
          (en[n + 3].uncache = 1));
  },
  gc = function (t, n) {
    var r;
    for (Le = 0; Le < at.length; Le++)
      (r = at[Le]),
        r && (!n || r._ctx === n) && (t ? r.kill(1) : r.revert(!0, !0));
    (ea = !0), n && dg(n), n || ni("revert");
  },
  pg = function (t, n) {
    ct.cache++,
      (n || !Be) &&
      ct.forEach(function (r) {
        return Ee(r) && r.cacheID++ && (r.rec = 0);
      }),
      nn(t) && (lt.history.scrollRestoration = cc = t);
  },
  Be,
  Qr = 0,
  Oh,
  Qb = function () {
    if (Oh !== Qr) {
      var t = (Oh = Qr);
      requestAnimationFrame(function () {
        return t === Qr && zr(!0);
      });
    }
  },
  mg = function () {
    Pt.appendChild(wi),
      (fc = (!Ie && wi.offsetHeight) || lt.innerHeight),
      Pt.removeChild(wi);
  },
  Vh = function (t) {
    return Ns(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (n) {
      return (n.style.display = t ? "none" : "block");
    });
  },
  zr = function (t, n) {
    if (
      ((sn = Ot.documentElement),
        (Pt = Ot.body),
        (lc = [lt, Ot, sn, Pt]),
        bn && !t && !ea)
    ) {
      fe(dt, "scrollEnd", hg);
      return;
    }
    mg(),
      (Be = dt.isRefreshing = !0),
      ct.forEach(function (i) {
        return Ee(i) && ++i.cacheID && (i.rec = i());
      });
    var r = ni("refreshInit");
    eg && dt.sort(),
      n || gc(),
      ct.forEach(function (i) {
        Ee(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      at.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      (ea = !1),
      at.forEach(function (i) {
        if (i._subPinOffset && i.pin) {
          var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = i.pin[s];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
        }
      }),
      (tl = 1),
      Vh(!0),
      at.forEach(function (i) {
        var s = jn(i.scroller, i._dir),
          o = i.vars.end === "max" || (i._endClamp && i.end > s),
          a = i._startClamp && i.start >= s;
        (o || a) &&
          i.setPositions(
            a ? s - 1 : i.start,
            o ? Math.max(a ? s : i.start + 1, s) : i.end,
            !0
          );
      }),
      Vh(!1),
      (tl = 0),
      r.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      ct.forEach(function (i) {
        Ee(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
            i.rec && i(i.rec));
      }),
      pg(cc, 1),
      ta.pause(),
      Qr++,
      (Be = 2),
      er(2),
      at.forEach(function (i) {
        return Ee(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (Be = dt.isRefreshing = !1),
      ni("refresh");
  },
  nl = 0,
  Vo = 1,
  ws,
  er = function (t) {
    if (t === 2 || (!Be && !ea)) {
      (dt.isUpdating = !0), ws && ws.update(0);
      var n = at.length,
        r = Ce(),
        i = r - eu >= 50,
        s = n && at[0].scroll();
      if (
        ((Vo = nl > s ? -1 : 1),
          Be || (nl = s),
          i &&
          (bn && !ya && r - bn > 200 && ((bn = 0), ni("scrollEnd")),
            (ts = eu),
            (eu = r)),
          Vo < 0)
      ) {
        for (Le = n; Le-- > 0;) at[Le] && at[Le].update(0, i);
        Vo = 1;
      } else for (Le = 0; Le < n; Le++) at[Le] && at[Le].update(0, i);
      dt.isUpdating = !1;
    }
    js = 0;
  },
  rl = [
    lg,
    cg,
    dc,
    hc,
    gn + Ts,
    gn + vs,
    gn + bs,
    gn + xs,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Fo = rl.concat([
    Kr,
    Zr,
    "boxSizing",
    "max" + Ni,
    "max" + pc,
    "position",
    gn,
    te,
    te + bs,
    te + vs,
    te + Ts,
    te + xs,
  ]),
  Jb = function (t, n, r) {
    Si(r);
    var i = t._gsap;
    if (i.spacerIsNative) Si(i.spacerState);
    else if (t._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(t, n), s.removeChild(n));
    }
    t._gsap.swappedIn = !1;
  },
  iu = function (t, n, r, i) {
    if (!t._gsap.swappedIn) {
      for (var s = rl.length, o = n.style, a = t.style, u; s--;)
        (u = rl[s]), (o[u] = r[u]);
      (o.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (o.display = "inline-block"),
        (a[dc] = a[hc] = "auto"),
        (o.flexBasis = r.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Kr] = na(t, je) + oe),
        (o[Zr] = na(t, ae) + oe),
        (o[te] = a[gn] = a[cg] = a[lg] = "0"),
        Si(i),
        (a[Kr] = a["max" + Ni] = r[Kr]),
        (a[Zr] = a["max" + pc] = r[Zr]),
        (a[te] = r[te]),
        t.parentNode !== n &&
        (t.parentNode.insertBefore(n, t), n.appendChild(t)),
        (t._gsap.swappedIn = !0);
    }
  },
  tT = /([A-Z])/g,
  Si = function (t) {
    if (t) {
      var n = t.t.style,
        r = t.length,
        i = 0,
        s,
        o;
      for ((t.t._gsap || $.core.getCache(t.t)).uncache = 1; i < r; i += 2)
        (o = t[i + 1]),
          (s = t[i]),
          o
            ? (n[s] = o)
            : n[s] && n.removeProperty(s.replace(tT, "-$1").toLowerCase());
    }
  },
  po = function (t) {
    for (var n = Fo.length, r = t.style, i = [], s = 0; s < n; s++)
      i.push(Fo[s], r[Fo[s]]);
    return (i.t = t), i;
  },
  eT = function (t, n, r) {
    for (var i = [], s = t.length, o = r ? 8 : 0, a; o < s; o += 2)
      (a = t[o]), i.push(a, a in n ? n[a] : t[o + 1]);
    return (i.t = t.t), i;
  },
  Io = { left: 0, top: 0 },
  Fh = function (t, n, r, i, s, o, a, u, l, c, f, h, d, m) {
    Ee(t) && (t = t(u)),
      nn(t) &&
      t.substr(0, 3) === "max" &&
      (t = h + (t.charAt(4) === "=" ? Do("0" + t.substr(3), r) : 0));
    var p = d ? d.time() : 0,
      g,
      _,
      w;
    if ((d && d.seek(0), isNaN(t) || (t = +t), rs(t)))
      d &&
        (t = $.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          h,
          t
        )),
        a && Oo(a, r, i, !0);
    else {
      Ee(n) && (n = n(u));
      var x = (t || "0").split(" "),
        b,
        T,
        y,
        v;
      (w = Ue(n, u) || Pt),
        (b = Qn(w) || {}),
        (!b || (!b.left && !b.top)) &&
        yn(w).display === "none" &&
        ((v = w.style.display),
          (w.style.display = "block"),
          (b = Qn(w)),
          v ? (w.style.display = v) : w.style.removeProperty("display")),
        (T = Do(x[0], b[i.d])),
        (y = Do(x[1] || "0", r)),
        (t = b[i.p] - l[i.p] - c + T + s - y),
        a && Oo(a, y, i, r - y < 20 || (a._isStart && y > 20)),
        (r -= r - y);
    }
    if ((m && ((u[m] = t || -0.001), t < 0 && (t = 0)), o)) {
      var P = t + r,
        E = o._isStart;
      (g = "scroll" + i.d2),
        Oo(
          o,
          P,
          i,
          (E && P > 20) ||
          (!E && (f ? Math.max(Pt[g], sn[g]) : o.parentNode[g]) <= P + 1)
        ),
        f &&
        ((l = Qn(a)),
          f && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + oe));
    }
    return (
      d &&
      w &&
      ((g = Qn(w)),
        d.seek(h),
        (_ = Qn(w)),
        (d._caScrollDist = g[i.p] - _[i.p]),
        (t = (t / d._caScrollDist) * h)),
      d && d.seek(p),
      d ? t : Math.round(t)
    );
  },
  nT = /(webkit|moz|length|cssText|inset)/i,
  Ih = function (t, n, r, i) {
    if (t.parentNode !== n) {
      var s = t.style,
        o,
        a;
      if (n === Pt) {
        (t._stOrig = s.cssText), (a = yn(t));
        for (o in a)
          !+o &&
            !nT.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = r), (s.left = i);
      } else s.cssText = t._stOrig;
      ($.core.getCache(t).uncache = 1), n.appendChild(t);
    }
  },
  gg = function (t, n, r) {
    var i = n,
      s = i;
    return function (o) {
      var a = Math.round(t());
      return (
        a !== i &&
        a !== s &&
        Math.abs(a - i) > 3 &&
        Math.abs(a - s) > 3 &&
        ((o = a), r && r()),
        (s = i),
        (i = Math.round(o)),
        i
      );
    };
  },
  mo = function (t, n, r) {
    var i = {};
    (i[n.p] = "+=" + r), $.set(t, i);
  },
  Lh = function (t, n) {
    var r = Pr(t, n),
      i = "_scroll" + n.p2,
      s = function o(a, u, l, c, f) {
        var h = o.tween,
          d = u.onComplete,
          m = {};
        l = l || r();
        var p = gg(r, l, function () {
          h.kill(), (o.tween = 0);
        });
        return (
          (f = (c && f) || 0),
          (c = c || a - l),
          h && h.kill(),
          (u[i] = a),
          (u.inherit = !1),
          (u.modifiers = m),
          (m[i] = function () {
            return p(l + c * h.ratio + f * h.ratio * h.ratio);
          }),
          (u.onUpdate = function () {
            ct.cache++, o.tween && er();
          }),
          (u.onComplete = function () {
            (o.tween = 0), d && d.call(h);
          }),
          (h = o.tween = $.to(t, u)),
          h
        );
      };
    return (
      (t[i] = r),
      (r.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      fe(t, "wheel", r.wheelHandler),
      dt.isTouch && fe(t, "touchmove", r.wheelHandler),
      s
    );
  },
  dt = (function () {
    function e(n, r) {
      ui ||
        e.register($) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Ju(this),
        this.init(n, r);
    }
    var t = e.prototype;
    return (
      (t.init = function (r, i) {
        if (
          ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !es)
        ) {
          this.update = this.refresh = this.kill = Fn;
          return;
        }
        r = Rh(nn(r) || rs(r) || r.nodeType ? { trigger: r } : r, fo);
        var s = r,
          o = s.onUpdate,
          a = s.toggleClass,
          u = s.id,
          l = s.onToggle,
          c = s.onRefresh,
          f = s.scrub,
          h = s.trigger,
          d = s.pin,
          m = s.pinSpacing,
          p = s.invalidateOnRefresh,
          g = s.anticipatePin,
          _ = s.onScrubComplete,
          w = s.onSnapComplete,
          x = s.once,
          b = s.snap,
          T = s.pinReparent,
          y = s.pinSpacer,
          v = s.containerAnimation,
          P = s.fastScrollEnd,
          E = s.preventOverlaps,
          M =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? je
              : ae,
          j = !f && f !== 0,
          D = Ue(r.scroller || lt),
          z = $.core.getCache(D),
          N = ti(D),
          G =
            ("pinType" in r
              ? r.pinType
              : xr(D, "pinType") || (N && "fixed")) === "fixed",
          k = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          R = j && r.toggleActions.split(" "),
          V = "markers" in r ? r.markers : fo.markers,
          L = N ? 0 : parseFloat(yn(D)["border" + M.p2 + Ni]) || 0,
          S = this,
          J =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(S);
            },
          ft = Gb(D, N, M),
          Ct = Xb(D, N),
          tt = 0,
          _t = 0,
          At = 0,
          vt = Pr(D, M),
          Z,
          pt,
          Xt,
          kt,
          Et,
          mt,
          Bt,
          pe,
          De,
          A,
          xe,
          F,
          C,
          O,
          W,
          H,
          et,
          ut,
          Ht,
          it,
          Dt,
          xt,
          ht,
          ie,
          U,
          or,
          $e,
          Ze,
          Xn,
          hn,
          wn,
          Q,
          Rn,
          ue,
          Tt,
          Ft,
          Qe,
          Sn,
          Jt;
        if (
          ((S._startClamp = S._endClamp = !1),
            (S._dir = M),
            (g *= 45),
            (S.scroller = D),
            (S.scroll = v ? v.time.bind(v) : vt),
            (kt = vt()),
            (S.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
            ((eg = 1), r.refreshPriority === -9999 && (ws = S)),
            (z.tweenScroll = z.tweenScroll || {
              top: Lh(D, ae),
              left: Lh(D, je),
            }),
            (S.tweenTo = Z = z.tweenScroll[M.p]),
            (S.scrubDuration = function (B) {
              (Rn = rs(B) && B),
                Rn
                  ? Q
                    ? Q.duration(B)
                    : (Q = $.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Rn,
                      paused: !0,
                      onComplete: function () {
                        return _ && _(S);
                      },
                    }))
                  : (Q && Q.progress(1).kill(), (Q = 0));
            }),
            i &&
            ((i.vars.lazy = !1),
              (i._initted && !S.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
              (S.animation = i.pause()),
              (i.scrollTrigger = S),
              S.scrubDuration(f),
              (hn = 0),
              u || (u = i.vars.id)),
            b &&
            ((!Fr(b) || b.push) && (b = { snapTo: b }),
              "scrollBehavior" in Pt.style &&
              $.set(N ? [Pt, sn] : D, { scrollBehavior: "auto" }),
              ct.forEach(function (B) {
                return (
                  Ee(B) &&
                  B.target === (N ? Ot.scrollingElement || sn : D) &&
                  (B.smooth = !1)
                );
              }),
              (Xt = Ee(b.snapTo)
                ? b.snapTo
                : b.snapTo === "labels"
                  ? qb(i)
                  : b.snapTo === "labelsDirectional"
                    ? Kb(i)
                    : b.directional !== !1
                      ? function (B, nt) {
                        return mc(b.snapTo)(B, Ce() - _t < 500 ? 0 : nt.direction);
                      }
                      : $.utils.snap(b.snapTo)),
              (ue = b.duration || { min: 0.1, max: 2 }),
              (ue = Fr(ue) ? _s(ue.min, ue.max) : _s(ue, ue)),
              (Tt = $.delayedCall(b.delay || Rn / 2 || 0.1, function () {
                var B = vt(),
                  nt = Ce() - _t < 500,
                  Y = Z.tween;
                if (
                  (nt || Math.abs(S.getVelocity()) < 10) &&
                  !Y &&
                  !ya &&
                  tt !== B
                ) {
                  var rt = (B - mt) / O,
                    le = i && !j ? i.totalProgress() : rt,
                    gt = nt ? 0 : ((le - wn) / (Ce() - ts)) * 1e3 || 0,
                    qt = $.utils.clamp(-rt, 1 - rt, (oi(gt / 2) * gt) / 0.185),
                    be = rt + (b.inertia === !1 ? 0 : qt),
                    Wt,
                    It,
                    Mt = b,
                    Cn = Mt.onStart,
                    Nt = Mt.onInterrupt,
                    Je = Mt.onComplete;
                  if (
                    ((Wt = Xt(be, S)),
                      rs(Wt) || (Wt = be),
                      (It = Math.max(0, Math.round(mt + Wt * O))),
                      B <= Bt && B >= mt && It !== B)
                  ) {
                    if (Y && !Y._initted && Y.data <= oi(It - B)) return;
                    b.inertia === !1 && (qt = Wt - rt),
                      Z(
                        It,
                        {
                          duration: ue(
                            oi(
                              (Math.max(oi(be - le), oi(Wt - le)) * 0.185) /
                              gt /
                              0.05 || 0
                            )
                          ),
                          ease: b.ease || "power3",
                          data: oi(It - B),
                          onInterrupt: function () {
                            return Tt.restart(!0) && Nt && Nt(S);
                          },
                          onComplete: function () {
                            S.update(),
                              (tt = vt()),
                              i &&
                              !j &&
                              (Q
                                ? Q.resetTo(
                                  "totalProgress",
                                  Wt,
                                  i._tTime / i._tDur
                                )
                                : i.progress(Wt)),
                              (hn = wn =
                                i && !j ? i.totalProgress() : S.progress),
                              w && w(S),
                              Je && Je(S);
                          },
                        },
                        B,
                        qt * O,
                        It - B - qt * O
                      ),
                      Cn && Cn(S, Z.tween);
                  }
                } else S.isActive && tt !== B && Tt.restart(!0);
              }).pause())),
            u && (el[u] = S),
            (h = S.trigger = Ue(h || (d !== !0 && d))),
            (Jt = h && h._gsap && h._gsap.stRevert),
            Jt && (Jt = Jt(S)),
            (d = d === !0 ? h : Ue(d)),
            nn(a) && (a = { targets: h, className: a }),
            d &&
            (m === !1 ||
              m === gn ||
              (m =
                !m &&
                  d.parentNode &&
                  d.parentNode.style &&
                  yn(d.parentNode).display === "flex"
                  ? !1
                  : te),
              (S.pin = d),
              (pt = $.core.getCache(d)),
              pt.spacer
                ? (W = pt.pinState)
                : (y &&
                  ((y = Ue(y)),
                    y && !y.nodeType && (y = y.current || y.nativeElement),
                    (pt.spacerIsNative = !!y),
                    y && (pt.spacerState = po(y))),
                  (pt.spacer = ut = y || Ot.createElement("div")),
                  ut.classList.add("pin-spacer"),
                  u && ut.classList.add("pin-spacer-" + u),
                  (pt.pinState = W = po(d))),
              r.force3D !== !1 && $.set(d, { force3D: !0 }),
              (S.spacer = ut = pt.spacer),
              (Xn = yn(d)),
              (ie = Xn[m + M.os2]),
              (it = $.getProperty(d)),
              (Dt = $.quickSetter(d, M.a, oe)),
              iu(d, ut, Xn),
              (et = po(d))),
            V)
        ) {
          (F = Fr(V) ? Rh(V, kh) : kh),
            (A = ho("scroller-start", u, D, M, F, 0)),
            (xe = ho("scroller-end", u, D, M, F, 0, A)),
            (Ht = A["offset" + M.op.d2]);
          var Pn = Ue(xr(D, "content") || D);
          (pe = this.markerStart = ho("start", u, Pn, M, F, Ht, 0, v)),
            (De = this.markerEnd = ho("end", u, Pn, M, F, Ht, 0, v)),
            v && (Sn = $.quickSetter([pe, De], M.a, oe)),
            !G &&
            !(Yn.length && xr(D, "fixedMarkers") === !0) &&
            (Hb(N ? Pt : D),
              $.set([A, xe], { force3D: !0 }),
              (or = $.quickSetter(A, M.a, oe)),
              (Ze = $.quickSetter(xe, M.a, oe)));
        }
        if (v) {
          var K = v.vars.onUpdate,
            X = v.vars.onUpdateParams;
          v.eventCallback("onUpdate", function () {
            S.update(0, 0, 1), K && K.apply(v, X || []);
          });
        }
        if (
          ((S.previous = function () {
            return at[at.indexOf(S) - 1];
          }),
            (S.next = function () {
              return at[at.indexOf(S) + 1];
            }),
            (S.revert = function (B, nt) {
              if (!nt) return S.kill(!0);
              var Y = B !== !1 || !S.enabled,
                rt = Se;
              Y !== S.isReverted &&
                (Y &&
                  ((Ft = Math.max(vt(), S.scroll.rec || 0)),
                    (At = S.progress),
                    (Qe = i && i.progress())),
                  pe &&
                  [pe, De, A, xe].forEach(function (le) {
                    return (le.style.display = Y ? "none" : "block");
                  }),
                  Y && ((Se = S), S.update(Y)),
                  d &&
                  (!T || !S.isActive) &&
                  (Y ? Jb(d, ut, W) : iu(d, ut, yn(d), U)),
                  Y || S.update(Y),
                  (Se = rt),
                  (S.isReverted = Y));
            }),
            (S.refresh = function (B, nt, Y, rt) {
              if (!((Se || !S.enabled) && !nt)) {
                if (d && B && bn) {
                  fe(e, "scrollEnd", hg);
                  return;
                }
                !Be && J && J(S),
                  (Se = S),
                  Z.tween && !Y && (Z.tween.kill(), (Z.tween = 0)),
                  Q && Q.pause(),
                  p &&
                  i &&
                  (i.revert({ kill: !1 }).invalidate(),
                    i.getChildren &&
                    i.getChildren(!0, !0, !1).forEach(function (ar) {
                      return ar.vars.immediateRender && ar.render(0, !0, !0);
                    })),
                  S.isReverted || S.revert(!0, !0),
                  (S._subPinOffset = !1);
                var le = ft(),
                  gt = Ct(),
                  qt = v ? v.duration() : jn(D, M),
                  be = O <= 0.01 || !O,
                  Wt = 0,
                  It = rt || 0,
                  Mt = Fr(Y) ? Y.end : r.end,
                  Cn = r.endTrigger || h,
                  Nt = Fr(Y)
                    ? Y.start
                    : r.start || (r.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"),
                  Je = (S.pinnedContainer =
                    r.pinnedContainer && Ue(r.pinnedContainer, S)),
                  kn = (h && Math.max(0, at.indexOf(S))) || 0,
                  me = kn,
                  ge,
                  Te,
                  Er,
                  Hs,
                  we,
                  se,
                  Dn,
                  _a,
                  yc,
                  Wi,
                  On,
                  Yi,
                  qs;
                for (
                  V &&
                  Fr(Y) &&
                  ((Yi = $.getProperty(A, M.p)), (qs = $.getProperty(xe, M.p)));
                  me-- > 0;

                )
                  (se = at[me]),
                    se.end || se.refresh(0, 1) || (Se = S),
                    (Dn = se.pin),
                    Dn &&
                    (Dn === h || Dn === d || Dn === Je) &&
                    !se.isReverted &&
                    (Wi || (Wi = []), Wi.unshift(se), se.revert(!0, !0)),
                    se !== at[me] && (kn--, me--);
                for (
                  Ee(Nt) && (Nt = Nt(S)),
                  Nt = Ch(Nt, "start", S),
                  mt =
                  Fh(
                    Nt,
                    h,
                    le,
                    M,
                    vt(),
                    pe,
                    A,
                    S,
                    gt,
                    L,
                    G,
                    qt,
                    v,
                    S._startClamp && "_startClamp"
                  ) || (d ? -0.001 : 0),
                  Ee(Mt) && (Mt = Mt(S)),
                  nn(Mt) &&
                  !Mt.indexOf("+=") &&
                  (~Mt.indexOf(" ")
                    ? (Mt = (nn(Nt) ? Nt.split(" ")[0] : "") + Mt)
                    : ((Wt = Do(Mt.substr(2), le)),
                      (Mt = nn(Nt)
                        ? Nt
                        : (v
                          ? $.utils.mapRange(
                            0,
                            v.duration(),
                            v.scrollTrigger.start,
                            v.scrollTrigger.end,
                            mt
                          )
                          : mt) + Wt),
                      (Cn = h))),
                  Mt = Ch(Mt, "end", S),
                  Bt =
                  Math.max(
                    mt,
                    Fh(
                      Mt || (Cn ? "100% 0" : qt),
                      Cn,
                      le,
                      M,
                      vt() + Wt,
                      De,
                      xe,
                      S,
                      gt,
                      L,
                      G,
                      qt,
                      v,
                      S._endClamp && "_endClamp"
                    )
                  ) || -0.001,
                  Wt = 0,
                  me = kn;
                  me--;

                )
                  (se = at[me]),
                    (Dn = se.pin),
                    Dn &&
                    se.start - se._pinPush <= mt &&
                    !v &&
                    se.end > 0 &&
                    ((ge =
                      se.end -
                      (S._startClamp ? Math.max(0, se.start) : se.start)),
                      ((Dn === h && se.start - se._pinPush < mt) || Dn === Je) &&
                      isNaN(Nt) &&
                      (Wt += ge * (1 - se.progress)),
                      Dn === d && (It += ge));
                if (
                  ((mt += Wt),
                    (Bt += Wt),
                    S._startClamp && (S._startClamp += Wt),
                    S._endClamp &&
                    !Be &&
                    ((S._endClamp = Bt || -0.001), (Bt = Math.min(Bt, jn(D, M)))),
                    (O = Bt - mt || ((mt -= 0.01) && 0.001)),
                    be && (At = $.utils.clamp(0, 1, $.utils.normalize(mt, Bt, Ft))),
                    (S._pinPush = It),
                    pe &&
                    Wt &&
                    ((ge = {}),
                      (ge[M.a] = "+=" + Wt),
                      Je && (ge[M.p] = "-=" + vt()),
                      $.set([pe, De], ge)),
                    d && !(tl && S.end >= jn(D, M)))
                )
                  (ge = yn(d)),
                    (Hs = M === ae),
                    (Er = vt()),
                    (xt = parseFloat(it(M.a)) + It),
                    !qt &&
                    Bt > 1 &&
                    ((On = (N ? Ot.scrollingElement || sn : D).style),
                      (On = {
                        style: On,
                        value: On["overflow" + M.a.toUpperCase()],
                      }),
                      N &&
                      yn(Pt)["overflow" + M.a.toUpperCase()] !== "scroll" &&
                      (On.style["overflow" + M.a.toUpperCase()] = "scroll")),
                    iu(d, ut, ge),
                    (et = po(d)),
                    (Te = Qn(d, !0)),
                    (_a = G && Pr(D, Hs ? je : ae)()),
                    m
                      ? ((U = [m + M.os2, O + It + oe]),
                        (U.t = ut),
                        (me = m === te ? na(d, M) + O + It : 0),
                        me &&
                        (U.push(M.d, me + oe),
                          ut.style.flexBasis !== "auto" &&
                          (ut.style.flexBasis = me + oe)),
                        Si(U),
                        Je &&
                        at.forEach(function (ar) {
                          ar.pin === Je &&
                            ar.vars.pinSpacing !== !1 &&
                            (ar._subPinOffset = !0);
                        }),
                        G && vt(Ft))
                      : ((me = na(d, M)),
                        me &&
                        ut.style.flexBasis !== "auto" &&
                        (ut.style.flexBasis = me + oe)),
                    G &&
                    ((we = {
                      top: Te.top + (Hs ? Er - mt : _a) + oe,
                      left: Te.left + (Hs ? _a : Er - mt) + oe,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                      (we[Kr] = we["max" + Ni] = Math.ceil(Te.width) + oe),
                      (we[Zr] = we["max" + pc] = Math.ceil(Te.height) + oe),
                      (we[gn] =
                        we[gn + bs] =
                        we[gn + vs] =
                        we[gn + Ts] =
                        we[gn + xs] =
                        "0"),
                      (we[te] = ge[te]),
                      (we[te + bs] = ge[te + bs]),
                      (we[te + vs] = ge[te + vs]),
                      (we[te + Ts] = ge[te + Ts]),
                      (we[te + xs] = ge[te + xs]),
                      (H = eT(W, we, T)),
                      Be && vt(0)),
                    i
                      ? ((yc = i._initted),
                        Ja(1),
                        i.render(i.duration(), !0, !0),
                        (ht = it(M.a) - xt + O + It),
                        ($e = Math.abs(O - ht) > 1),
                        G && $e && H.splice(H.length - 2, 2),
                        i.render(0, !0, !0),
                        yc || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        Ja(0))
                      : (ht = O),
                    On &&
                    (On.value
                      ? (On.style["overflow" + M.a.toUpperCase()] = On.value)
                      : On.style.removeProperty("overflow-" + M.a));
                else if (h && vt() && !v)
                  for (Te = h.parentNode; Te && Te !== Pt;)
                    Te._pinOffset &&
                      ((mt -= Te._pinOffset), (Bt -= Te._pinOffset)),
                      (Te = Te.parentNode);
                Wi &&
                  Wi.forEach(function (ar) {
                    return ar.revert(!1, !0);
                  }),
                  (S.start = mt),
                  (S.end = Bt),
                  (kt = Et = Be ? Ft : vt()),
                  !v && !Be && (kt < Ft && vt(Ft), (S.scroll.rec = 0)),
                  S.revert(!1, !0),
                  (_t = Ce()),
                  Tt && ((tt = -1), Tt.restart(!0)),
                  (Se = 0),
                  i &&
                  j &&
                  (i._initted || Qe) &&
                  i.progress() !== Qe &&
                  i.progress(Qe || 0, !0).render(i.time(), !0, !0),
                  (be || At !== S.progress || v || p || (i && !i._initted)) &&
                  (i &&
                    !j &&
                    (i._initted || At || i.vars.immediateRender !== !1) &&
                    i.totalProgress(
                      v && mt < -0.001 && !At
                        ? $.utils.normalize(mt, Bt, 0)
                        : At,
                      !0
                    ),
                    (S.progress = be || (kt - mt) / O === At ? 0 : At)),
                  d && m && (ut._pinOffset = Math.round(S.progress * ht)),
                  Q && Q.invalidate(),
                  isNaN(Yi) ||
                  ((Yi -= $.getProperty(A, M.p)),
                    (qs -= $.getProperty(xe, M.p)),
                    mo(A, M, Yi),
                    mo(pe, M, Yi - (rt || 0)),
                    mo(xe, M, qs),
                    mo(De, M, qs - (rt || 0))),
                  be && !Be && S.update(),
                  c && !Be && !C && ((C = !0), c(S), (C = !1));
              }
            }),
            (S.getVelocity = function () {
              return ((vt() - Et) / (Ce() - ts)) * 1e3 || 0;
            }),
            (S.endAnimation = function () {
              qi(S.callbackAnimation),
                i &&
                (Q
                  ? Q.progress(1)
                  : i.paused()
                    ? j || qi(i, S.direction < 0, 1)
                    : qi(i, i.reversed()));
            }),
            (S.labelToScroll = function (B) {
              return (
                (i &&
                  i.labels &&
                  (mt || S.refresh() || mt) + (i.labels[B] / i.duration()) * O) ||
                0
              );
            }),
            (S.getTrailing = function (B) {
              var nt = at.indexOf(S),
                Y =
                  S.direction > 0 ? at.slice(0, nt).reverse() : at.slice(nt + 1);
              return (
                nn(B)
                  ? Y.filter(function (rt) {
                    return rt.vars.preventOverlaps === B;
                  })
                  : Y
              ).filter(function (rt) {
                return S.direction > 0 ? rt.end <= mt : rt.start >= Bt;
              });
            }),
            (S.update = function (B, nt, Y) {
              if (!(v && !Y && !B)) {
                var rt = Be === !0 ? Ft : S.scroll(),
                  le = B ? 0 : (rt - mt) / O,
                  gt = le < 0 ? 0 : le > 1 ? 1 : le || 0,
                  qt = S.progress,
                  be,
                  Wt,
                  It,
                  Mt,
                  Cn,
                  Nt,
                  Je,
                  kn;
                if (
                  (nt &&
                    ((Et = kt),
                      (kt = v ? vt() : rt),
                      b && ((wn = hn), (hn = i && !j ? i.totalProgress() : gt))),
                    g &&
                    d &&
                    !Se &&
                    !ao &&
                    bn &&
                    (!gt && mt < rt + ((rt - Et) / (Ce() - ts)) * g
                      ? (gt = 1e-4)
                      : gt === 1 &&
                      Bt > rt + ((rt - Et) / (Ce() - ts)) * g &&
                      (gt = 0.9999)),
                    gt !== qt && S.enabled)
                ) {
                  if (
                    ((be = S.isActive = !!gt && gt < 1),
                      (Wt = !!qt && qt < 1),
                      (Nt = be !== Wt),
                      (Cn = Nt || !!gt != !!qt),
                      (S.direction = gt > qt ? 1 : -1),
                      (S.progress = gt),
                      Cn &&
                      !Se &&
                      ((It = gt && !qt ? 0 : gt === 1 ? 1 : qt === 1 ? 2 : 3),
                        j &&
                        ((Mt =
                          (!Nt && R[It + 1] !== "none" && R[It + 1]) || R[It]),
                          (kn =
                            i &&
                            (Mt === "complete" || Mt === "reset" || Mt in i)))),
                      E &&
                      (Nt || kn) &&
                      (kn || f || !i) &&
                      (Ee(E)
                        ? E(S)
                        : S.getTrailing(E).forEach(function (Er) {
                          return Er.endAnimation();
                        })),
                      j ||
                      (Q && !Se && !ao
                        ? (Q._dp._time - Q._start !== Q._time &&
                          Q.render(Q._dp._time - Q._start),
                          Q.resetTo
                            ? Q.resetTo("totalProgress", gt, i._tTime / i._tDur)
                            : ((Q.vars.totalProgress = gt),
                              Q.invalidate().restart()))
                        : i && i.totalProgress(gt, !!(Se && (_t || B)))),
                      d)
                  ) {
                    if ((B && m && (ut.style[m + M.os2] = ie), !G))
                      Dt(ns(xt + ht * gt));
                    else if (Cn) {
                      if (
                        ((Je =
                          !B && gt > qt && Bt + 1 > rt && rt + 1 >= jn(D, M)),
                          T)
                      )
                        if (!B && (be || Je)) {
                          var me = Qn(d, !0),
                            ge = rt - mt;
                          Ih(
                            d,
                            Pt,
                            me.top + (M === ae ? ge : 0) + oe,
                            me.left + (M === ae ? 0 : ge) + oe
                          );
                        } else Ih(d, ut);
                      Si(be || Je ? H : et),
                        ($e && gt < 1 && be) ||
                        Dt(xt + (gt === 1 && !Je ? ht : 0));
                    }
                  }
                  b && !Z.tween && !Se && !ao && Tt.restart(!0),
                    a &&
                    (Nt || (x && gt && (gt < 1 || !tu))) &&
                    Ns(a.targets).forEach(function (Er) {
                      return Er.classList[be || x ? "add" : "remove"](
                        a.className
                      );
                    }),
                    o && !j && !B && o(S),
                    Cn && !Se
                      ? (j &&
                        (kn &&
                          (Mt === "complete"
                            ? i.pause().totalProgress(1)
                            : Mt === "reset"
                              ? i.restart(!0).pause()
                              : Mt === "restart"
                                ? i.restart(!0)
                                : i[Mt]()),
                          o && o(S)),
                        (Nt || !tu) &&
                        (l && Nt && nu(S, l),
                          k[It] && nu(S, k[It]),
                          x && (gt === 1 ? S.kill(!1, 1) : (k[It] = 0)),
                          Nt || ((It = gt === 1 ? 1 : 3), k[It] && nu(S, k[It]))),
                        P &&
                        !be &&
                        Math.abs(S.getVelocity()) > (rs(P) ? P : 2500) &&
                        (qi(S.callbackAnimation),
                          Q
                            ? Q.progress(1)
                            : qi(i, Mt === "reverse" ? 1 : !gt, 1)))
                      : j && o && !Se && o(S);
                }
                if (Ze) {
                  var Te = v ? (rt / v.duration()) * (v._caScrollDist || 0) : rt;
                  or(Te + (A._isFlipped ? 1 : 0)), Ze(Te);
                }
                Sn && Sn((-rt / v.duration()) * (v._caScrollDist || 0));
              }
            }),
            (S.enable = function (B, nt) {
              S.enabled ||
                ((S.enabled = !0),
                  fe(D, "resize", is),
                  N || fe(D, "scroll", ai),
                  J && fe(e, "refreshInit", J),
                  B !== !1 && ((S.progress = At = 0), (kt = Et = tt = vt())),
                  nt !== !1 && S.refresh());
            }),
            (S.getTween = function (B) {
              return B && Z ? Z.tween : Q;
            }),
            (S.setPositions = function (B, nt, Y, rt) {
              if (v) {
                var le = v.scrollTrigger,
                  gt = v.duration(),
                  qt = le.end - le.start;
                (B = le.start + (qt * B) / gt), (nt = le.start + (qt * nt) / gt);
              }
              S.refresh(
                !1,
                !1,
                {
                  start: Ah(B, Y && !!S._startClamp),
                  end: Ah(nt, Y && !!S._endClamp),
                },
                rt
              ),
                S.update();
            }),
            (S.adjustPinSpacing = function (B) {
              if (U && B) {
                var nt = U.indexOf(M.d) + 1;
                (U[nt] = parseFloat(U[nt]) + B + oe),
                  (U[1] = parseFloat(U[1]) + B + oe),
                  Si(U);
              }
            }),
            (S.disable = function (B, nt) {
              if (
                S.enabled &&
                (B !== !1 && S.revert(!0, !0),
                  (S.enabled = S.isActive = !1),
                  nt || (Q && Q.pause()),
                  (Ft = 0),
                  pt && (pt.uncache = 1),
                  J && ce(e, "refreshInit", J),
                  Tt && (Tt.pause(), Z.tween && Z.tween.kill() && (Z.tween = 0)),
                  !N)
              ) {
                for (var Y = at.length; Y--;)
                  if (at[Y].scroller === D && at[Y] !== S) return;
                ce(D, "resize", is), N || ce(D, "scroll", ai);
              }
            }),
            (S.kill = function (B, nt) {
              S.disable(B, nt), Q && !nt && Q.kill(), u && delete el[u];
              var Y = at.indexOf(S);
              Y >= 0 && at.splice(Y, 1),
                Y === Le && Vo > 0 && Le--,
                (Y = 0),
                at.forEach(function (rt) {
                  return rt.scroller === S.scroller && (Y = 1);
                }),
                Y || Be || (S.scroll.rec = 0),
                i &&
                ((i.scrollTrigger = null),
                  B && i.revert({ kill: !1 }),
                  nt || i.kill()),
                pe &&
                [pe, De, A, xe].forEach(function (rt) {
                  return rt.parentNode && rt.parentNode.removeChild(rt);
                }),
                ws === S && (ws = 0),
                d &&
                (pt && (pt.uncache = 1),
                  (Y = 0),
                  at.forEach(function (rt) {
                    return rt.pin === d && Y++;
                  }),
                  Y || (pt.spacer = 0)),
                r.onKill && r.onKill(S);
            }),
            at.push(S),
            S.enable(!1, !1),
            Jt && Jt(S),
            i && i.add && !O)
        ) {
          var bt = S.update;
          (S.update = function () {
            (S.update = bt), ct.cache++, mt || Bt || S.refresh();
          }),
            $.delayedCall(0.01, S.update),
            (O = 0.01),
            (mt = Bt = 0);
        } else S.refresh();
        d && Qb();
      }),
      (e.register = function (r) {
        return (
          ui ||
          (($ = r || og()), sg() && window.document && e.enable(), (ui = es)),
          ui
        );
      }),
      (e.defaults = function (r) {
        if (r) for (var i in r) fo[i] = r[i];
        return fo;
      }),
      (e.disable = function (r, i) {
        (es = 0),
          at.forEach(function (o) {
            return o[i ? "kill" : "disable"](r);
          }),
          ce(lt, "wheel", ai),
          ce(Ot, "scroll", ai),
          clearInterval(oo),
          ce(Ot, "touchcancel", Fn),
          ce(Pt, "touchstart", Fn),
          lo(ce, Ot, "pointerdown,touchstart,mousedown", Eh),
          lo(ce, Ot, "pointerup,touchend,mouseup", Mh),
          ta.kill(),
          uo(ce);
        for (var s = 0; s < ct.length; s += 3)
          co(ce, ct[s], ct[s + 1]), co(ce, ct[s], ct[s + 2]);
      }),
      (e.enable = function () {
        if (
          ((lt = window),
            (Ot = document),
            (sn = Ot.documentElement),
            (Pt = Ot.body),
            $ &&
            ((Ns = $.utils.toArray),
              (_s = $.utils.clamp),
              (Ju = $.core.context || Fn),
              (Ja = $.core.suppressOverwrites || Fn),
              (cc = lt.history.scrollRestoration || "auto"),
              (nl = lt.pageYOffset || 0),
              $.core.globals("ScrollTrigger", e),
              Pt))
        ) {
          (es = 1),
            (wi = document.createElement("div")),
            (wi.style.height = "100vh"),
            (wi.style.position = "absolute"),
            mg(),
            Yb(),
            Qt.register($),
            (e.isTouch = Qt.isTouch),
            (fr =
              Qt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Qu = Qt.isTouch === 1),
            fe(lt, "wheel", ai),
            (lc = [lt, Ot, sn, Pt]),
            $.matchMedia
              ? ((e.matchMedia = function (l) {
                var c = $.matchMedia(),
                  f;
                for (f in l) c.add(f, l[f]);
                return c;
              }),
                $.addEventListener("matchMediaInit", function () {
                  return gc();
                }),
                $.addEventListener("matchMediaRevert", function () {
                  return dg();
                }),
                $.addEventListener("matchMedia", function () {
                  zr(0, 1), ni("matchMedia");
                }),
                $.matchMedia().add("(orientation: portrait)", function () {
                  return ru(), ru;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            ru(),
            fe(Ot, "scroll", ai);
          var r = Pt.hasAttribute("style"),
            i = Pt.style,
            s = i.borderTopStyle,
            o = $.core.Animation.prototype,
            a,
            u;
          for (
            o.revert ||
            Object.defineProperty(o, "revert", {
              value: function () {
                return this.time(-0.01, !0);
              },
            }),
            i.borderTopStyle = "solid",
            a = Qn(Pt),
            ae.m = Math.round(a.top + ae.sc()) || 0,
            je.m = Math.round(a.left + je.sc()) || 0,
            s ? (i.borderTopStyle = s) : i.removeProperty("border-top-style"),
            r || (Pt.setAttribute("style", ""), Pt.removeAttribute("style")),
            oo = setInterval(Dh, 250),
            $.delayedCall(0.5, function () {
              return (ao = 0);
            }),
            fe(Ot, "touchcancel", Fn),
            fe(Pt, "touchstart", Fn),
            lo(fe, Ot, "pointerdown,touchstart,mousedown", Eh),
            lo(fe, Ot, "pointerup,touchend,mouseup", Mh),
            Zu = $.utils.checkPrefix("transform"),
            Fo.push(Zu),
            ui = Ce(),
            ta = $.delayedCall(0.2, zr).pause(),
            li = [
              Ot,
              "visibilitychange",
              function () {
                var l = lt.innerWidth,
                  c = lt.innerHeight;
                Ot.hidden
                  ? ((Sh = l), (Ph = c))
                  : (Sh !== l || Ph !== c) && is();
              },
              Ot,
              "DOMContentLoaded",
              zr,
              lt,
              "load",
              zr,
              lt,
              "resize",
              is,
            ],
            uo(fe),
            at.forEach(function (l) {
              return l.enable(0, 1);
            }),
            u = 0;
            u < ct.length;
            u += 3
          )
            co(ce, ct[u], ct[u + 1]), co(ce, ct[u], ct[u + 2]);
        }
      }),
      (e.config = function (r) {
        "limitCallbacks" in r && (tu = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(oo)) || ((oo = i) && setInterval(Dh, i)),
          "ignoreMobileResize" in r &&
          (Qu = e.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
          (uo(ce) || uo(fe, r.autoRefreshEvents || "none"),
            (ng = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (e.scrollerProxy = function (r, i) {
        var s = Ue(r),
          o = ct.indexOf(s),
          a = ti(s);
        ~o && ct.splice(o, a ? 6 : 2),
          i && (a ? Yn.unshift(lt, i, Pt, i, sn, i) : Yn.unshift(s, i));
      }),
      (e.clearMatchMedia = function (r) {
        at.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (r, i, s) {
        var o = (nn(r) ? Ue(r) : r).getBoundingClientRect(),
          a = o[s ? Kr : Zr] * i || 0;
        return s
          ? o.right - a > 0 && o.left + a < lt.innerWidth
          : o.bottom - a > 0 && o.top + a < lt.innerHeight;
      }),
      (e.positionInViewport = function (r, i, s) {
        nn(r) && (r = Ue(r));
        var o = r.getBoundingClientRect(),
          a = o[s ? Kr : Zr],
          u =
            i == null
              ? a / 2
              : i in ra
                ? ra[i] * a
                : ~i.indexOf("%")
                  ? (parseFloat(i) * a) / 100
                  : parseFloat(i) || 0;
        return s ? (o.left + u) / lt.innerWidth : (o.top + u) / lt.innerHeight;
      }),
      (e.killAll = function (r) {
        if (
          (at.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
            r !== !0)
        ) {
          var i = ei.killAll || [];
          (ei = {}),
            i.forEach(function (s) {
              return s();
            });
        }
      }),
      e
    );
  })();
dt.version = "3.13.0";
dt.saveStyles = function (e) {
  return e
    ? Ns(e).forEach(function (t) {
      if (t && t.style) {
        var n = en.indexOf(t);
        n >= 0 && en.splice(n, 5),
          en.push(
            t,
            t.style.cssText,
            t.getBBox && t.getAttribute("transform"),
            $.core.getCache(t),
            Ju()
          );
      }
    })
    : en;
};
dt.revert = function (e, t) {
  return gc(!e, t);
};
dt.create = function (e, t) {
  return new dt(e, t);
};
dt.refresh = function (e) {
  return e ? is(!0) : (ui || dt.register()) && zr(!0);
};
dt.update = function (e) {
  return ++ct.cache && er(e === !0 ? 2 : 0);
};
dt.clearScrollMemory = pg;
dt.maxScroll = function (e, t) {
  return jn(e, t ? je : ae);
};
dt.getScrollFunc = function (e, t) {
  return Pr(Ue(e), t ? je : ae);
};
dt.getById = function (e) {
  return el[e];
};
dt.getAll = function () {
  return at.filter(function (e) {
    return e.vars.id !== "ScrollSmoother";
  });
};
dt.isScrolling = function () {
  return !!bn;
};
dt.snapDirectional = mc;
dt.addEventListener = function (e, t) {
  var n = ei[e] || (ei[e] = []);
  ~n.indexOf(t) || n.push(t);
};
dt.removeEventListener = function (e, t) {
  var n = ei[e],
    r = n && n.indexOf(t);
  r >= 0 && n.splice(r, 1);
};
dt.batch = function (e, t) {
  var n = [],
    r = {},
    i = t.interval || 0.016,
    s = t.batchMax || 1e9,
    o = function (l, c) {
      var f = [],
        h = [],
        d = $.delayedCall(i, function () {
          c(f, h), (f = []), (h = []);
        }).pause();
      return function (m) {
        f.length || d.restart(!0),
          f.push(m.trigger),
          h.push(m),
          s <= f.length && d.progress(1);
      };
    },
    a;
  for (a in t)
    r[a] =
      a.substr(0, 2) === "on" && Ee(t[a]) && a !== "onRefreshInit"
        ? o(a, t[a])
        : t[a];
  return (
    Ee(s) &&
    ((s = s()),
      fe(dt, "refresh", function () {
        return (s = t.batchMax());
      })),
    Ns(e).forEach(function (u) {
      var l = {};
      for (a in r) l[a] = r[a];
      (l.trigger = u), n.push(dt.create(l));
    }),
    n
  );
};
var Bh = function (t, n, r, i) {
  return (
    n > i ? t(i) : n < 0 && t(0),
    r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
  );
},
  su = function e(t, n) {
    n === !0
      ? t.style.removeProperty("touch-action")
      : (t.style.touchAction =
        n === !0
          ? "auto"
          : n
            ? "pan-" + n + (Qt.isTouch ? " pinch-zoom" : "")
            : "none"),
      t === sn && e(Pt, n);
  },
  go = { auto: 1, scroll: 1 },
  rT = function (t) {
    var n = t.event,
      r = t.target,
      i = t.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || $.core.getCache(s),
      a = Ce(),
      u;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== Pt &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(go[(u = yn(s)).overflowY] || go[u.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== r &&
        !ti(s) &&
        (go[(u = yn(s)).overflowY] || go[u.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  yg = function (t, n, r, i) {
    return Qt.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (i = i && rT),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && fe(Ot, Qt.eventTypes[0], jh, !1, !0);
      },
      onDisable: function () {
        return ce(Ot, Qt.eventTypes[0], jh, !0);
      },
    });
  },
  iT = /(input|label|select|textarea)/i,
  Nh,
  jh = function (t) {
    var n = iT.test(t.target.tagName);
    (n || Nh) && ((t._gsapAllow = !0), (Nh = n));
  },
  sT = function (t) {
    Fr(t) || (t = {}),
      (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
      t.type || (t.type = "wheel,touch"),
      (t.debounce = !!t.debounce),
      (t.id = t.id || "normalizer");
    var n = t,
      r = n.normalizeScrollX,
      i = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      a,
      u,
      l = Ue(t.target) || sn,
      c = $.core.globals().ScrollSmoother,
      f = c && c.get(),
      h =
        fr &&
        ((t.content && Ue(t.content)) ||
          (f && t.content !== !1 && !f.smooth() && f.content())),
      d = Pr(l, ae),
      m = Pr(l, je),
      p = 1,
      g =
        (Qt.isTouch && lt.visualViewport
          ? lt.visualViewport.scale * lt.visualViewport.width
          : lt.outerWidth) / lt.innerWidth,
      _ = 0,
      w = Ee(i)
        ? function () {
          return i(a);
        }
        : function () {
          return i || 2.8;
        },
      x,
      b,
      T = yg(l, t.type, !0, s),
      y = function () {
        return (b = !1);
      },
      v = Fn,
      P = Fn,
      E = function () {
        (u = jn(l, ae)),
          (P = _s(fr ? 1 : 0, u)),
          r && (v = _s(0, jn(l, je))),
          (x = Qr);
      },
      M = function () {
        (h._gsap.y = ns(parseFloat(h._gsap.y) + d.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (d.offset = d.cacheID = 0);
      },
      j = function () {
        if (b) {
          requestAnimationFrame(y);
          var V = ns(a.deltaY / 2),
            L = P(d.v - V);
          if (h && L !== d.v + d.offset) {
            d.offset = L - d.v;
            var S = ns((parseFloat(h && h._gsap.y) || 0) - d.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              S +
              ", 0, 1)"),
              (h._gsap.y = S + "px"),
              (d.cacheID = ct.cache),
              er();
          }
          return !0;
        }
        d.offset && M(), (b = !0);
      },
      D,
      z,
      N,
      G,
      k = function () {
        E(),
          D.isActive() &&
          D.vars.scrollY > u &&
          (d() > u ? D.progress(1) && d(u) : D.resetTo("scrollY", u));
      };
    return (
      h && $.set(h, { y: "+=0" }),
      (t.ignoreCheck = function (R) {
        return (
          (fr && R.type === "touchmove" && j()) ||
          (p > 1.05 && R.type !== "touchstart") ||
          a.isGesturing ||
          (R.touches && R.touches.length > 1)
        );
      }),
      (t.onPress = function () {
        b = !1;
        var R = p;
        (p = ns(((lt.visualViewport && lt.visualViewport.scale) || 1) / g)),
          D.pause(),
          R !== p && su(l, p > 1.01 ? !0 : r ? !1 : "x"),
          (z = m()),
          (N = d()),
          E(),
          (x = Qr);
      }),
      (t.onRelease = t.onGestureStart =
        function (R, V) {
          if ((d.offset && M(), !V)) G.restart(!0);
          else {
            ct.cache++;
            var L = w(),
              S,
              J;
            r &&
              ((S = m()),
                (J = S + (L * 0.05 * -R.velocityX) / 0.227),
                (L *= Bh(m, S, J, jn(l, je))),
                (D.vars.scrollX = v(J))),
              (S = d()),
              (J = S + (L * 0.05 * -R.velocityY) / 0.227),
              (L *= Bh(d, S, J, jn(l, ae))),
              (D.vars.scrollY = P(J)),
              D.invalidate().duration(L).play(0.01),
              ((fr && D.vars.scrollY >= u) || S >= u - 1) &&
              $.to({}, { onUpdate: k, duration: L });
          }
          o && o(R);
        }),
      (t.onWheel = function () {
        D._ts && D.pause(), Ce() - _ > 1e3 && ((x = 0), (_ = Ce()));
      }),
      (t.onChange = function (R, V, L, S, J) {
        if (
          (Qr !== x && E(),
            V && r && m(v(S[2] === V ? z + (R.startX - R.x) : m() + V - S[1])),
            L)
        ) {
          d.offset && M();
          var ft = J[2] === L,
            Ct = ft ? N + R.startY - R.y : d() + L - J[1],
            tt = P(Ct);
          ft && Ct !== tt && (N += tt - Ct), d(tt);
        }
        (L || V) && er();
      }),
      (t.onEnable = function () {
        su(l, r ? !1 : "x"),
          dt.addEventListener("refresh", k),
          fe(lt, "resize", k),
          d.smooth &&
          ((d.target.style.scrollBehavior = "auto"),
            (d.smooth = m.smooth = !1)),
          T.enable();
      }),
      (t.onDisable = function () {
        su(l, !0),
          ce(lt, "resize", k),
          dt.removeEventListener("refresh", k),
          T.kill();
      }),
      (t.lockAxis = t.lockAxis !== !1),
      (a = new Qt(t)),
      (a.iOS = fr),
      fr && !d() && d(1),
      fr && $.ticker.add(Fn),
      (G = a._dc),
      (D = $.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: gg(d, d(), function () {
            return D.pause();
          }),
        },
        onUpdate: er,
        onComplete: G.vars.onComplete,
      })),
      a
    );
  };
dt.sort = function (e) {
  if (Ee(e)) return at.sort(e);
  var t = lt.pageYOffset || 0;
  return (
    dt.getAll().forEach(function (n) {
      return (n._sortY = n.trigger
        ? t + n.trigger.getBoundingClientRect().top
        : n.start + lt.innerHeight);
    }),
    at.sort(
      e ||
      function (n, r) {
        return (
          (n.vars.refreshPriority || 0) * -1e6 +
          (n.vars.containerAnimation ? 1e6 : n._sortY) -
          ((r.vars.containerAnimation ? 1e6 : r._sortY) +
            (r.vars.refreshPriority || 0) * -1e6)
        );
      }
    )
  );
};
dt.observe = function (e) {
  return new Qt(e);
};
dt.normalizeScroll = function (e) {
  if (typeof e > "u") return Ie;
  if (e === !0 && Ie) return Ie.enable();
  if (e === !1) {
    Ie && Ie.kill(), (Ie = e);
    return;
  }
  var t = e instanceof Qt ? e : sT(e);
  return Ie && Ie.target === t.target && Ie.kill(), ti(t.target) && (Ie = t), t;
};
dt.core = {
  _getVelocityProp: Ku,
  _inputObserver: yg,
  _scrollers: ct,
  _proxies: Yn,
  bridge: {
    ss: function () {
      bn || ni("scrollStart"), (bn = Ce());
    },
    ref: function () {
      return Se;
    },
  },
};
og() && $.registerPlugin(dt);
function oT(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function aT(e, t, n) {
  return t && oT(e.prototype, t), e;
}
/*!
 * ScrollSmoother 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var St,
  yo,
  Fe,
  hr,
  ss,
  Hn,
  Ir,
  zh,
  st,
  Ln,
  _o,
  $h,
  Uh,
  Wh,
  Yh,
  _g = function () {
    return typeof window < "u";
  },
  vg = function () {
    return St || (_g() && (St = window.gsap) && St.registerPlugin && St);
  },
  uT = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  ur = function (t) {
    return st.maxScroll(t || Fe);
  },
  lT = function (t, n) {
    var r = t.parentNode || ss,
      i = t.getBoundingClientRect(),
      s = r.getBoundingClientRect(),
      o = s.top - i.top,
      a = s.bottom - i.bottom,
      u = (Math.abs(o) > Math.abs(a) ? o : a) / (1 - n),
      l = -u * n,
      c,
      f;
    return (
      u > 0 &&
      ((c = s.height / (Fe.innerHeight + s.height)),
        (f =
          c === 0.5
            ? s.height * 2
            : Math.min(s.height, Math.abs((-u * c) / (2 * c - 1))) *
            2 *
            (n || 1)),
        (l += n ? -f * n : -f / 2),
        (u += f)),
      { change: u, offset: l }
    );
  },
  cT = function (t) {
    var n = hr.querySelector(".ScrollSmoother-wrapper");
    return (
      n ||
      ((n = hr.createElement("div")),
        n.classList.add("ScrollSmoother-wrapper"),
        t.parentNode.insertBefore(n, t),
        n.appendChild(t)),
      n
    );
  },
  zs = (function () {
    function e(t) {
      var n = this;
      yo ||
        e.register(St) ||
        console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        (t = this.vars = t || {}),
        Ln && Ln.kill(),
        (Ln = this),
        Wh(this);
      var r = t,
        i = r.smoothTouch,
        s = r.onUpdate,
        o = r.onStop,
        a = r.smooth,
        u = r.onFocusIn,
        l = r.normalizeScroll,
        c = r.wholePixels,
        f,
        h,
        d,
        m,
        p,
        g,
        _,
        w,
        x,
        b,
        T,
        y,
        v,
        P,
        E = this,
        M = t.effectsPrefix || "",
        j = st.getScrollFunc(Fe),
        D =
          st.isTouch === 1
            ? i === !0
              ? 0.8
              : parseFloat(i) || 0
            : a === 0 || a === !1
              ? 0
              : parseFloat(a) || 0.8,
        z = (D && +t.speed) || 1,
        N = 0,
        G = 0,
        k = 1,
        R = $h(0),
        V = function () {
          return R.update(-N);
        },
        L = { y: 0 },
        S = function () {
          return (f.style.overflow = "visible");
        },
        J,
        ft = function (C) {
          C.update();
          var O = C.getTween();
          O && (O.pause(), (O._time = O._dur), (O._tTime = O._tDur)),
            (J = !1),
            C.animation.progress(C.progress, !0);
        },
        Ct = function (C, O) {
          ((C !== N && !b) || O) &&
            (c && (C = Math.round(C)),
              D &&
              ((f.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                C +
                ", 0, 1)"),
                (f._gsap.y = C + "px")),
              (G = C - N),
              (N = C),
              st.isUpdating || e.isRefreshing || st.update());
        },
        tt = function (C) {
          return arguments.length
            ? (C < 0 && (C = 0),
              (L.y = -C),
              (J = !0),
              b ? (N = -C) : Ct(-C),
              st.isRefreshing ? m.update() : j(C / z),
              this)
            : -N;
        },
        _t =
          typeof ResizeObserver < "u" &&
          t.autoResize !== !1 &&
          new ResizeObserver(function () {
            if (!st.isRefreshing) {
              var F = ur(h) * z;
              F < -N && tt(F), Yh.restart(!0);
            }
          }),
        At,
        vt = function (C) {
          (h.scrollTop = 0),
            !(
              (C.target.contains && C.target.contains(h)) ||
              (u && u(n, C) === !1)
            ) &&
            (st.isInViewport(C.target) ||
              C.target === At ||
              n.scrollTo(C.target, !1, "center center"),
              (At = C.target));
        },
        Z = function (C, O) {
          if (C < O.start) return C;
          var W = isNaN(O.ratio) ? 1 : O.ratio,
            H = O.end - O.start,
            et = C - O.start,
            ut = O.offset || 0,
            Ht = O.pins || [],
            it = Ht.offset || 0,
            Dt =
              (O._startClamp && O.start <= 0) || (O.pins && O.pins.offset)
                ? 0
                : O._endClamp && O.end === ur()
                  ? 1
                  : 0.5;
          return (
            Ht.forEach(function (xt) {
              (H -= xt.distance), xt.nativeStart <= C && (et -= xt.distance);
            }),
            it && (et *= (H - it / W) / H),
            C + (et - ut * Dt) / W - et
          );
        },
        pt = function F(C, O, W) {
          W || (C.pins.length = C.pins.offset = 0);
          var H = C.pins,
            et = C.markers,
            ut,
            Ht,
            it,
            Dt,
            xt,
            ht,
            ie,
            U;
          for (ie = 0; ie < O.length; ie++)
            if (
              ((U = O[ie]),
                C.trigger &&
                U.trigger &&
                C !== U &&
                (U.trigger === C.trigger ||
                  U.pinnedContainer === C.trigger ||
                  C.trigger.contains(U.trigger)) &&
                ((xt = U._startNative || U._startClamp || U.start),
                  (ht = U._endNative || U._endClamp || U.end),
                  (it = Z(xt, C)),
                  (Dt = U.pin && ht > 0 ? it + (ht - xt) : Z(ht, C)),
                  U.setPositions(
                    it,
                    Dt,
                    !0,
                    (U._startClamp ? Math.max(0, it) : it) - xt
                  ),
                  U.markerStart &&
                  et.push(
                    St.quickSetter([U.markerStart, U.markerEnd], "y", "px")
                  ),
                  U.pin && U.end > 0 && !W))
            ) {
              if (
                ((ut = U.end - U.start),
                  (Ht = C._startClamp && U.start < 0),
                  Ht)
              ) {
                if (C.start > 0) {
                  C.setPositions(0, C.end + (C._startNative - C.start), !0),
                    F(C, O);
                  return;
                }
                (ut += U.start), (H.offset = -U.start);
              }
              H.push({
                start: U.start,
                nativeStart: xt,
                end: U.end,
                distance: ut,
                trig: U,
              }),
                C.setPositions(C.start, C.end + (Ht ? -U.start : ut), !0);
            }
        },
        Xt = function (C, O) {
          p.forEach(function (W) {
            return pt(W, C, O);
          });
        },
        kt = function () {
          (ss = hr.documentElement),
            (Hn = hr.body),
            S(),
            requestAnimationFrame(S),
            p &&
            (st.getAll().forEach(function (C) {
              (C._startNative = C.start), (C._endNative = C.end);
            }),
              p.forEach(function (C) {
                var O = C._startClamp || C.start,
                  W = C.autoSpeed
                    ? Math.min(ur(), C.end)
                    : O + Math.abs((C.end - O) / C.ratio),
                  H = W - C.end;
                if (((O -= H / 2), (W -= H / 2), O > W)) {
                  var et = O;
                  (O = W), (W = et);
                }
                C._startClamp && O < 0
                  ? ((W = C.ratio < 0 ? ur() : C.end / C.ratio),
                    (H = W - C.end),
                    (O = 0))
                  : (C.ratio < 0 || (C._endClamp && W >= ur())) &&
                  ((W = ur()),
                    (O =
                      C.ratio < 0 || C.ratio > 1
                        ? 0
                        : W - (W - C.start) / C.ratio),
                    (H = (W - O) * C.ratio - (C.end - C.start))),
                  (C.offset = H || 1e-4),
                  (C.pins.length = C.pins.offset = 0),
                  C.setPositions(O, W, !0);
              }),
              Xt(st.sort())),
            R.reset();
        },
        Et = function () {
          return st.addEventListener("refresh", kt);
        },
        mt = function () {
          return (
            p &&
            p.forEach(function (C) {
              return C.vars.onRefresh(C);
            })
          );
        },
        Bt = function () {
          return (
            p &&
            p.forEach(function (C) {
              return C.vars.onRefreshInit(C);
            }),
            mt
          );
        },
        pe = function (C, O, W, H) {
          return function () {
            var et = typeof O == "function" ? O(W, H) : O;
            et ||
              et === 0 ||
              (et = H.getAttribute("data-" + M + C) || (C === "speed" ? 1 : 0)),
              H.setAttribute("data-" + M + C, et);
            var ut = (et + "").substr(0, 6) === "clamp(";
            return { clamp: ut, value: ut ? et.substr(6, et.length - 7) : et };
          };
        },
        De = function (C, O, W, H, et) {
          et = (typeof et == "function" ? et(H, C) : et) || 0;
          var ut = pe("speed", O, H, C),
            Ht = pe("lag", W, H, C),
            it = St.getProperty(C, "y"),
            Dt = C._gsap,
            xt,
            ht,
            ie,
            U,
            or,
            $e,
            Ze = [],
            Xn = function () {
              (O = ut()),
                (W = parseFloat(Ht().value)),
                (xt = parseFloat(O.value) || 1),
                (ie = O.value === "auto"),
                (or =
                  ie || (ht && ht._startClamp && ht.start <= 0) || Ze.offset
                    ? 0
                    : ht && ht._endClamp && ht.end === ur()
                      ? 1
                      : 0.5),
                U && U.kill(),
                (U =
                  W &&
                  St.to(C, { ease: _o, overwrite: !1, y: "+=0", duration: W })),
                ht && ((ht.ratio = xt), (ht.autoSpeed = ie));
            },
            hn = function () {
              (Dt.y = it + "px"), Dt.renderTransform(1), Xn();
            },
            wn = [],
            Q = 0,
            Rn = function (Tt) {
              if (ie) {
                hn();
                var Ft = lT(C, zh(0, 1, -Tt.start / (Tt.end - Tt.start)));
                (Q = Ft.change), ($e = Ft.offset);
              } else
                ($e = Ze.offset || 0),
                  (Q = (Tt.end - Tt.start - $e) * (1 - xt));
              Ze.forEach(function (Qe) {
                return (Q -= Qe.distance * (1 - xt));
              }),
                (Tt.offset = Q || 0.001),
                Tt.vars.onUpdate(Tt),
                U && U.progress(1);
            };
          return (
            Xn(),
            (xt !== 1 || ie || U) &&
            ((ht = st.create({
              trigger: ie ? C.parentNode : C,
              start: function () {
                return O.clamp
                  ? "clamp(top bottom+=" + et + ")"
                  : "top bottom+=" + et;
              },
              end: function () {
                return O.value < 0
                  ? "max"
                  : O.clamp
                    ? "clamp(bottom top-=" + et + ")"
                    : "bottom top-=" + et;
              },
              scroller: h,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: hn,
              onRefresh: Rn,
              onKill: function (Tt) {
                var Ft = p.indexOf(Tt);
                Ft >= 0 && p.splice(Ft, 1), hn();
              },
              onUpdate: function (Tt) {
                var Ft = it + Q * (Tt.progress - or),
                  Qe = Ze.length,
                  Sn = 0,
                  Jt,
                  Pn,
                  K;
                if (Tt.offset) {
                  if (Qe) {
                    for (Pn = -N, K = Tt.end; Qe--;) {
                      if (
                        ((Jt = Ze[Qe]),
                          Jt.trig.isActive || (Pn >= Jt.start && Pn <= Jt.end))
                      ) {
                        U &&
                          ((Jt.trig.progress +=
                            Jt.trig.direction < 0 ? 0.001 : -0.001),
                            Jt.trig.update(0, 0, 1),
                            U.resetTo("y", parseFloat(Dt.y), -G, !0),
                            k && U.progress(1));
                        return;
                      }
                      Pn > Jt.end && (Sn += Jt.distance), (K -= Jt.distance);
                    }
                    Ft =
                      it +
                      Sn +
                      Q *
                      ((St.utils.clamp(Tt.start, Tt.end, Pn) -
                        Tt.start -
                        Sn) /
                        (K - Tt.start) -
                        or);
                  }
                  wn.length &&
                    !ie &&
                    wn.forEach(function (X) {
                      return X(Ft - Sn);
                    }),
                    (Ft = uT(Ft + $e)),
                    U
                      ? (U.resetTo("y", Ft, -G, !0), k && U.progress(1))
                      : ((Dt.y = Ft + "px"), Dt.renderTransform(1));
                }
              },
            })),
              Rn(ht),
              (St.core.getCache(ht.trigger).stRevert = Bt),
              (ht.startY = it),
              (ht.pins = Ze),
              (ht.markers = wn),
              (ht.ratio = xt),
              (ht.autoSpeed = ie),
              (C.style.willChange = "transform")),
            ht
          );
        };
      Et(),
        st.addEventListener("killAll", Et),
        St.delayedCall(0.5, function () {
          return (k = 0);
        }),
        (this.scrollTop = tt),
        (this.scrollTo = function (F, C, O) {
          var W = St.utils.clamp(
            0,
            ur(),
            isNaN(F) ? n.offset(F, O, !!C && !b) : +F
          );
          C
            ? b
              ? St.to(n, {
                duration: D,
                scrollTop: W,
                overwrite: "auto",
                ease: _o,
              })
              : j(W)
            : tt(W);
        }),
        (this.offset = function (F, C, O) {
          F = Ir(F)[0];
          var W = F.style.cssText,
            H = st.create({ trigger: F, start: C || "top top" }),
            et;
          return (
            p && (k ? st.refresh() : Xt([H], !0)),
            (et = H.start / (O ? z : 1)),
            H.kill(!1),
            (F.style.cssText = W),
            (St.core.getCache(F).uncache = 1),
            et
          );
        });
      function A() {
        return (
          (d = f.clientHeight),
          (f.style.overflow = "visible"),
          (Hn.style.height = Fe.innerHeight + (d - Fe.innerHeight) / z + "px"),
          d - Fe.innerHeight
        );
      }
      (this.content = function (F) {
        if (arguments.length) {
          var C =
            Ir(F || "#smooth-content")[0] ||
            console.warn("ScrollSmoother needs a valid content element.") ||
            Hn.children[0];
          return (
            C !== f &&
            ((f = C),
              (x = f.getAttribute("style") || ""),
              _t && _t.observe(f),
              St.set(f, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              D || St.set(f, { clearProps: "transform" })),
            this
          );
        }
        return f;
      }),
        (this.wrapper = function (F) {
          return arguments.length
            ? ((h = Ir(F || "#smooth-wrapper")[0] || cT(f)),
              (w = h.getAttribute("style") || ""),
              A(),
              St.set(
                h,
                D
                  ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                  : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                  }
              ),
              this)
            : h;
        }),
        (this.effects = function (F, C) {
          var O;
          if ((p || (p = []), !F)) return p.slice(0);
          (F = Ir(F)),
            F.forEach(function (xt) {
              for (var ht = p.length; ht--;)
                p[ht].trigger === xt && p[ht].kill();
            }),
            (C = C || {});
          var W = C,
            H = W.speed,
            et = W.lag,
            ut = W.effectsPadding,
            Ht = [],
            it,
            Dt;
          for (it = 0; it < F.length; it++)
            (Dt = De(F[it], H, et, it, ut)), Dt && Ht.push(Dt);
          return (
            (O = p).push.apply(O, Ht), C.refresh !== !1 && st.refresh(), Ht
          );
        }),
        (this.sections = function (F, C) {
          var O;
          if ((g || (g = []), !F)) return g.slice(0);
          var W = Ir(F).map(function (H) {
            return st.create({
              trigger: H,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: function (ut) {
                (H.style.opacity = ut.isActive ? "1" : "0"),
                  (H.style.pointerEvents = ut.isActive ? "all" : "none");
              },
            });
          });
          return C && C.add ? (O = g).push.apply(O, W) : (g = W.slice(0)), W;
        }),
        this.content(t.content),
        this.wrapper(t.wrapper),
        (this.render = function (F) {
          return Ct(F || F === 0 ? F : N);
        }),
        (this.getVelocity = function () {
          return R.getVelocity(-N);
        }),
        st.scrollerProxy(h, {
          scrollTop: tt,
          scrollHeight: function () {
            return A() && Hn.scrollHeight;
          },
          fixedMarkers: t.fixedMarkers !== !1 && !!D,
          content: f,
          getBoundingClientRect: function () {
            return {
              top: 0,
              left: 0,
              width: Fe.innerWidth,
              height: Fe.innerHeight,
            };
          },
        }),
        st.defaults({ scroller: h });
      var xe = st.getAll().filter(function (F) {
        return F.scroller === Fe || F.scroller === h;
      });
      xe.forEach(function (F) {
        return F.revert(!0, !0);
      }),
        (m = st.create({
          animation: St.fromTo(
            L,
            {
              y: function () {
                return (P = 0), 0;
              },
            },
            {
              y: function () {
                return (P = 1), -A();
              },
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function () {
                if (P) {
                  var C = J;
                  C && (ft(m), (L.y = N)), Ct(L.y, C), V(), s && !b && s(E);
                }
              },
            }
          ),
          onRefreshInit: function (C) {
            if (!e.isRefreshing) {
              if (((e.isRefreshing = !0), p)) {
                var O = st.getAll().filter(function (H) {
                  return !!H.pin;
                });
                p.forEach(function (H) {
                  H.vars.pinnedContainer ||
                    O.forEach(function (et) {
                      if (et.pin.contains(H.trigger)) {
                        var ut = H.vars;
                        (ut.pinnedContainer = et.pin),
                          (H.vars = null),
                          H.init(ut, H.animation);
                      }
                    });
                });
              }
              var W = C.getTween();
              (v = W && W._end > W._dp._time),
                (y = N),
                (L.y = 0),
                D &&
                (st.isTouch === 1 && (h.style.position = "absolute"),
                  (h.scrollTop = 0),
                  st.isTouch === 1 && (h.style.position = "fixed"));
            }
          },
          onRefresh: function (C) {
            C.animation.invalidate(),
              C.setPositions(C.start, A() / z),
              v || ft(C),
              (L.y = -j() * z),
              Ct(L.y),
              k ||
              (v && (J = !1),
                C.animation.progress(St.utils.clamp(0, 1, y / z / -C.end))),
              v && ((C.progress -= 0.001), C.update()),
              (e.isRefreshing = !1);
          },
          id: "ScrollSmoother",
          scroller: Fe,
          invalidateOnRefresh: !0,
          start: 0,
          refreshPriority: -9999,
          end: function () {
            return A() / z;
          },
          onScrubComplete: function () {
            R.reset(), o && o(n);
          },
          scrub: D || !0,
        })),
        (this.smooth = function (F) {
          return (
            arguments.length &&
            ((D = F || 0), (z = (D && +t.speed) || 1), m.scrubDuration(F)),
            m.getTween() ? m.getTween().duration() : 0
          );
        }),
        m.getTween() && (m.getTween().vars.ease = t.ease || _o),
        (this.scrollTrigger = m),
        t.effects &&
        this.effects(
          t.effects === !0
            ? "[data-" + M + "speed], [data-" + M + "lag]"
            : t.effects,
          { effectsPadding: t.effectsPadding, refresh: !1 }
        ),
        t.sections &&
        this.sections(t.sections === !0 ? "[data-section]" : t.sections),
        xe.forEach(function (F) {
          (F.vars.scroller = h), F.revert(!1, !0), F.init(F.vars, F.animation);
        }),
        (this.paused = function (F, C) {
          return arguments.length
            ? (!!b !== F &&
              (F
                ? (m.getTween() && m.getTween().pause(),
                  j(-N / z),
                  R.reset(),
                  (T = st.normalizeScroll()),
                  T && T.disable(),
                  (b = st.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function () {
                      return tt(-N);
                    },
                  })),
                  (b.nested = Uh(ss, "wheel,touch,scroll", !0, C !== !1)))
                : (b.nested.kill(),
                  b.kill(),
                  (b = 0),
                  T && T.enable(),
                  (m.progress = (-N / z - m.start) / (m.end - m.start)),
                  ft(m))),
              this)
            : !!b;
        }),
        (this.kill = this.revert =
          function () {
            n.paused(!1), ft(m), m.kill();
            for (var F = (p || []).concat(g || []), C = F.length; C--;)
              F[C].kill();
            st.scrollerProxy(h),
              st.removeEventListener("killAll", Et),
              st.removeEventListener("refresh", kt),
              (h.style.cssText = w),
              (f.style.cssText = x);
            var O = st.defaults({});
            O && O.scroller === h && st.defaults({ scroller: Fe }),
              n.normalizer && st.normalizeScroll(!1),
              clearInterval(_),
              (Ln = null),
              _t && _t.disconnect(),
              Hn.style.removeProperty("height"),
              Fe.removeEventListener("focusin", vt);
          }),
        (this.refresh = function (F, C) {
          return m.refresh(F, C);
        }),
        l &&
        (this.normalizer = st.normalizeScroll(
          l === !0 ? { debounce: !0, content: !D && f } : l
        )),
        st.config(t),
        "scrollBehavior" in Fe.getComputedStyle(Hn) &&
        St.set([Hn, ss], { scrollBehavior: "auto" }),
        Fe.addEventListener("focusin", vt),
        (_ = setInterval(V, 250)),
        hr.readyState === "loading" ||
        requestAnimationFrame(function () {
          return st.refresh();
        });
    }
    return (
      (e.register = function (n) {
        return (
          yo ||
          ((St = n || vg()),
            _g() &&
            window.document &&
            ((Fe = window),
              (hr = document),
              (ss = hr.documentElement),
              (Hn = hr.body)),
            St &&
            ((Ir = St.utils.toArray),
              (zh = St.utils.clamp),
              (_o = St.parseEase("expo")),
              (Wh = St.core.context || function () { }),
              (st = St.core.globals().ScrollTrigger),
              St.core.globals("ScrollSmoother", e),
              Hn &&
              st &&
              ((Yh = St.delayedCall(0.2, function () {
                return st.isRefreshing || (Ln && Ln.refresh());
              }).pause()),
                ($h = st.core._getVelocityProp),
                (Uh = st.core._inputObserver),
                (e.refresh = st.refresh),
                (yo = 1)))),
          yo
        );
      }),
      aT(e, [
        {
          key: "progress",
          get: function () {
            return this.scrollTrigger
              ? this.scrollTrigger.animation._time / 100
              : 0;
          },
        },
      ]),
      e
    );
  })();
zs.version = "3.13.0";
zs.create = function (e) {
  return Ln && e && Ln.content() === Ir(e.content)[0] ? Ln : new zs(e);
};
zs.get = function () {
  return Ln;
};
vg() && St.registerPlugin(zs);
export {
  hT as A,
  xT as P,
  dt as S,
  sh as _,
  gT as a,
  xx as b,
  Tx as c,
  yT as d,
  w0 as e,
  pT as f,
  jb as g,
  zs as h,
  Xp as i,
  bx as m,
  mT as r,
  _T as s,
  vT as x,
};
