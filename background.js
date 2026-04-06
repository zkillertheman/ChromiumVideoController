(() => {
  var d = Object.freeze({
  32: { code: "Space", displayKey: "Space" },
  65: { code: "KeyA", displayKey: "a" },
  70: { code: "KeyF", displayKey: "f" },
      83: { code: "KeyS", displayKey: "s" },
      68: { code: "KeyD", displayKey: "d" },
      90: { code: "KeyZ", displayKey: "z" },
      88: { code: "KeyX", displayKey: "x" },
      82: { code: "KeyR", displayKey: "r" },
      71: { code: "KeyG", displayKey: "g" },
      86: { code: "KeyV", displayKey: "v" },
      77: { code: "KeyM", displayKey: "m" },
      74: { code: "KeyJ", displayKey: "j" },
    }),
    u = Object.freeze({
      8: "Backspace",
      13: "Enter",
      27: "Escape",
      32: "Space",
      46: "Delete",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      48: "Digit0",
      49: "Digit1",
      50: "Digit2",
      51: "Digit3",
      52: "Digit4",
      53: "Digit5",
      54: "Digit6",
      55: "Digit7",
      56: "Digit8",
      57: "Digit9",
      65: "KeyA",
      66: "KeyB",
      67: "KeyC",
      68: "KeyD",
      69: "KeyE",
      70: "KeyF",
      71: "KeyG",
      72: "KeyH",
      73: "KeyI",
      74: "KeyJ",
      75: "KeyK",
      76: "KeyL",
      77: "KeyM",
      78: "KeyN",
      79: "KeyO",
      80: "KeyP",
      81: "KeyQ",
      82: "KeyR",
      83: "KeyS",
      84: "KeyT",
      85: "KeyU",
      86: "KeyV",
      87: "KeyW",
      88: "KeyX",
      89: "KeyY",
      90: "KeyZ",
      96: "Numpad0",
      97: "Numpad1",
      98: "Numpad2",
      99: "Numpad3",
      100: "Numpad4",
      101: "Numpad5",
      102: "Numpad6",
      103: "Numpad7",
      104: "Numpad8",
      105: "Numpad9",
      106: "NumpadMultiply",
      107: "NumpadAdd",
      109: "NumpadSubtract",
      110: "NumpadDecimal",
      111: "NumpadDivide",
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
      124: "F13",
      125: "F14",
      126: "F15",
      127: "F16",
      128: "F17",
      129: "F18",
      130: "F19",
      131: "F20",
      132: "F21",
      133: "F22",
      134: "F23",
      135: "F24",
      144: "NumLock",
      145: "ScrollLock",
      186: "Semicolon",
      187: "Equal",
      188: "Comma",
      189: "Minus",
      190: "Period",
      191: "Slash",
      192: "Backquote",
      219: "BracketLeft",
      220: "Backslash",
      221: "BracketRight",
      222: "Quote",
    });
  function K(e) {
    if (!e) return "";
    if (e.startsWith("Key") && e.length === 4) return e.charAt(3).toLowerCase();
    if (e.startsWith("Digit") && e.length === 6) return e.charAt(5);
    if (/^Numpad\d$/.test(e)) return `Num ${e.charAt(6)}`;
    let o = {
      NumpadMultiply: "Num *",
      NumpadAdd: "Num +",
      NumpadSubtract: "Num -",
      NumpadDecimal: "Num .",
      NumpadDivide: "Num /",
    };
    if (o[e]) return o[e];
    let i = {
      Semicolon: ";",
      Equal: "=",
      Comma: ",",
      Minus: "-",
      Period: ".",
      Slash: "/",
      Backquote: "`",
      BracketLeft: "[",
      Backslash: "\\",
      BracketRight: "]",
      Quote: "'",
    };
    return i[e] ? i[e] : e;
  }
  var m = [
      "chapterSkip0",
      "chapterSkip10",
      "chapterSkip20",
      "chapterSkip30",
      "chapterSkip40",
      "chapterSkip50",
      "chapterSkip60",
      "chapterSkip70",
      "chapterSkip80",
      "chapterSkip90",
      "advance",
      "rewind",
      "louder",
      "softer",
      "faster",
      "slower",
      "pause",
      "resetSettings",
    ],
    g = Object.freeze({
      chapterSkip0: {
        code: "Digit0",
        key: 48,
        keyCode: 48,
        displayKey: "0",
        value: 0,
      },
      chapterSkip10: {
        code: "Digit1",
        key: 49,
        keyCode: 49,
        displayKey: "1",
        value: 0.1,
      },
      chapterSkip20: {
        code: "Digit2",
        key: 50,
        keyCode: 50,
        displayKey: "2",
        value: 0.2,
      },
      chapterSkip30: {
        code: "Digit3",
        key: 51,
        keyCode: 51,
        displayKey: "3",
        value: 0.3,
      },
      chapterSkip40: {
        code: "Digit4",
        key: 52,
        keyCode: 52,
        displayKey: "4",
        value: 0.4,
      },
      chapterSkip50: {
        code: "Digit5",
        key: 53,
        keyCode: 53,
        displayKey: "5",
        value: 0.5,
      },
      chapterSkip60: {
        code: "Digit6",
        key: 54,
        keyCode: 54,
        displayKey: "6",
        value: 0.6,
      },
      chapterSkip70: {
        code: "Digit7",
        key: 55,
        keyCode: 55,
        displayKey: "7",
        value: 0.7,
      },
      chapterSkip80: {
        code: "Digit8",
        key: 56,
        keyCode: 56,
        displayKey: "8",
        value: 0.8,
      },
      chapterSkip90: {
        code: "Digit9",
        key: 57,
        keyCode: 57,
        displayKey: "9",
        value: 0.9,
      },
      advance: {
        code: "KeyX",
        key: 88,
        keyCode: 88,
        displayKey: "x",
        value: 10,
      },
      rewind: {
        code: "KeyZ",
        key: 90,
        keyCode: 90,
        displayKey: "z",
        value: 10,
      },
      louder: {
        code: "KeyF",
        key: 70,
        keyCode: 70,
        displayKey: "f",
        value: 0.2,
      },
      softer: {
        code: "KeyA",
        key: 65,
        keyCode: 65,
        displayKey: "a",
        value: 0.2,
      },
      faster: {
        code: "KeyD",
        key: 68,
        keyCode: 68,
        displayKey: "d",
        value: 0.1,
      },
      slower: {
        code: "KeyS",
        key: 83,
        keyCode: 83,
        displayKey: "s",
        value: 0.1,
      },
      pause: {
        code: "Space",
        key: 32,
        keyCode: 32,
        displayKey: "Space",
        value: 0,
        modifiers: { shift: !0, ctrl: !1, alt: !1, meta: !1 },
      },
      resetSettings: {
        code: null,
        key: null,
        keyCode: null,
        displayKey: null,
        value: 0,
      },
    });
  async function s(e) {
    try {
      let o = e ? "" : "_disabled";
      (await chrome.action.setIcon({
        path: {
          19: `assets/icons/icon19${o}.png`,
          38: `assets/icons/icon38${o}.png`,
          48: `assets/icons/icon48${o}.png`,
        },
      }),
        console.log(`Icon updated: ${e ? "enabled" : "disabled"}`));
    } catch (o) {
      console.error("Failed to update icon:", o);
    }
  }
  async function y() {
    try {
      let e = await chrome.storage.sync.get({ enabled: !0 });
      await s(e.enabled);
    } catch (e) {
      (console.error("Failed to initialize icon:", e), await s(!0));
    }
  }
  async function C() {
    let e = [
      schemaVersion: 6,
      "version",
      "forceLastSavedSpeed",
      "resetSpeed",
      "speedStep",
      "fastSpeed",
      "rewindTime",
      "advanceTime",
      "resetKeyCode",
      "slowerKeyCode",
      "fasterKeyCode",
      "rewindKeyCode",
      "advanceKeyCode",
      "fastKeyCode",
      "displayKeyCode",
    ];
    try {
      (await chrome.storage.sync.remove(e),
        console.log("[VSC] Config migrated to current version"));
    } catch (o) {
      console.error("[VSC] Config migration failed:", o);
    }
  }
  async function k() {
    try {
      let e = await chrome.storage.sync.get(null),
        o = e.keyBindings;
      if (!o || !Array.isArray(o) || o.length === 0) {
        console.log(
          "[VSC] Migration: no keyBindings in storage, skipping (fresh install)",
        );
        return;
      }
      if (e.schemaVersion === 6 && o.every((t) => t.code !== void 0)) {
        console.log("[VSC] Migration: already at v6, skipping");
        return;
      }
      let i = 0,
        c = 0,
        l = 0,
        r = o.map((t) => {
          if (t.code !== void 0) return t;
          let a = t.key;
          if (t.predefined && d[a]) {
            let p = d[a];
            return (
              i++,
              { ...t, code: p.code, keyCode: a, displayKey: p.displayKey }
            );
          }
          let n = u[a];
          return n
            ? (c++, { ...t, code: n, keyCode: a, displayKey: K(n) })
            : (l++,
              console.info(
                `[VSC] Migration: unmappable keyCode ${a} for action "${t.action}"`,
              ),
              { ...t, code: null, keyCode: a, displayKey: "" });
        }),
        f = new Set(r.map((t) => t.action));
      for (let t of m)
        if (!f.has(t)) {
          let a = g[t];
          (r.push({ action: t, ...a, predefined: !0 }),
            console.info(
              `[VSC] Migration: added missing predefined action "${t}"`,
            ));
        }
      (await chrome.storage.sync.set({ keyBindings: r, schemaVersion: 6 }),
        console.log(
          `[VSC] Migration: ${i} predefined, ${c} custom (${l} unmappable)`,
        ));
    } catch (e) {
      console.error("[VSC] Key binding migration failed:", e);
    }
  }
  chrome.storage.onChanged.addListener((e, o) => {
    o === "sync" && e.enabled && s(e.enabled.newValue !== !1);
  });
  chrome.runtime.onInstalled.addListener(async () => {
    (console.log("Video Speed Controller installed/updated"),
      await C(),
      await k(),
      await y());
  });
  chrome.runtime.onStartup.addListener(async () => {
    (console.log("Video Speed Controller started"), await k(), await y());
  });
  k();
  y();
  console.log("Video Speed Controller background script loaded");
})();
