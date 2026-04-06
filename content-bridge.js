(() => {
  function m(e, n) {
    if (!e) return !1;
    let o = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm,
      c = /\/(?!.*(.).*\1)[gimsuy]*$/,
      u = (f) => f.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    for (let f of e.split(`
`)) {
      let s = f.replace(o, "");
      if (s.length === 0) continue;
      let r;
      if (s.startsWith("/"))
        try {
          let a = s.split("/");
          if (a.length < 3) continue;
          let t = c.test(s),
            i = t ? a.pop() : "",
            d = a.slice(1, t ? void 0 : -1).join("/");
          if (!d) continue;
          r = new RegExp(d, i);
        } catch {
          continue;
        }
      else {
        let a = u(s);
        s.includes(".") && !s.includes("/")
          ? (r = new RegExp(`(^|\\.|//)${a}(\\/|:|$)`))
          : (r = new RegExp(a));
      }
      if (r.test(n)) return !0;
    }
    return !1;
  }
  var v = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm,
    _ = /\/(?!.*(.).*\1)[gimsuy]*$/,
    k = (e) => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  function V(e) {
    let n = e.replace(v, "");
    if (n.length === 0) return null;
    if (n.startsWith("/"))
      try {
        let u = n.split("/");
        if (u.length < 3) return null;
        let f = _.test(n),
          s = f ? u.pop() : "",
          r = u.slice(1, f ? void 0 : -1).join("/");
        return r ? new RegExp(r, s) : null;
      } catch {
        return null;
      }
    let o = k(n);
    return n.includes(".") && !n.includes("/")
      ? new RegExp(`(^|\\.|//)${o}(\\/|:|$)`)
      : new RegExp(o);
  }
  function S(e, n) {
    if (!e || !e.length) return null;
    for (let o of e) {
      let c = V(o.pattern || "");
      if (c && c.test(n)) return o;
    }
    return null;
  }
  window.VSC = window.VSC || {};
  window.VSC.matchSiteRule = S;
  var l = document.documentElement,
    b = !1;
  async function T() {
    try {
      if (location.href === "about:blank" || b) return;
      b = !0;
      let e = await chrome.storage.sync.get(null),
        n = e.enabled === !1,
        o = m(e.blacklist, location.href),
        c = S(e.siteRules, location.href),
        u = c && c.enabled === !1;
      if (n || o || u) {
        l.addEventListener(
          "VSC_REQUEST_SETTINGS",
          () => {
            l.dispatchEvent(
              new CustomEvent("VSC_SETTINGS_READY", { detail: { abort: !0 } }),
            );
          },
          { once: !0 },
        );
        return;
      }
      let s = location.hostname.replace(/^www\./, "");
      (delete e.blacklist, delete e.enabled);
      let r = { settings: e, hostname: s };
      (l.addEventListener(
        "VSC_REQUEST_SETTINGS",
        () => {
          l.dispatchEvent(new CustomEvent("VSC_SETTINGS_READY", { detail: r }));
        },
        { once: !0 },
      ),
        chrome.storage.onChanged.addListener((t, i) => {
          if (i !== "sync") return;
          let d = "enabled" in t && t.enabled.newValue === !1,
            E = "blacklist" in t && m(t.blacklist.newValue, location.href),
            g =
              "siteRules" in t &&
              (() => {
                let h = S(t.siteRules.newValue, location.href);
                return h && h.enabled === !1;
              })();
          if (d || E || g) {
            l.dispatchEvent(
              new CustomEvent("VSC_MESSAGE", {
                detail: { type: "VSC_TEARDOWN" },
              }),
            );
            return;
          }
          let R = "enabled" in t && t.enabled.newValue === !0,
            w = "blacklist" in t && !E,
            C = "siteRules" in t && !g;
          (R || w || C) &&
            l.dispatchEvent(
              new CustomEvent("VSC_MESSAGE", {
                detail: { type: "VSC_REINIT" },
              }),
            );
          let p = { ...t };
          (delete p.enabled,
            delete p.blacklist,
            Object.keys(p).length > 0 &&
              l.dispatchEvent(
                new CustomEvent("VSC_STORAGE_CHANGED", { detail: p }),
              ));
        }),
        chrome.runtime.onMessage.addListener((t) => {
          l.dispatchEvent(new CustomEvent("VSC_MESSAGE", { detail: t }));
        }));
    } catch (e) {
      console.error("[VSC] Bridge init failed:", e);
    }
  }
  T();
})();
