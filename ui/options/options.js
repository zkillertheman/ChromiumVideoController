(() => {
  var v = Object.freeze({
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
    L = Object.freeze({
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
  function V(e) {
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
    let t = {
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
    return t[e] ? t[e] : e;
  }
  var p = [
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
      "chapterPrevious",
      "chapterNext",
      "advance",
      "rewind",
      "louder",
      "softer",
      "faster",
      "slower",
      "pause",
      "resetSettings",
    ],
    k = Object.freeze({
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
      chapterPrevious: {
        code: "KeyZ",
        key: 90,
        keyCode: 90,
        displayKey: "z",
        value: 0,
        modifiers: { shift: !1, ctrl: !0, alt: !1, meta: !1 },
      },
      chapterNext: {
        code: "KeyX",
        key: 88,
        keyCode: 88,
        displayKey: "x",
        value: 0,
        modifiers: { shift: !1, ctrl: !0, alt: !1, meta: !1 },
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
    }),
    b = new Set([
      "Tab",
      "ShiftLeft",
      "ShiftRight",
      "ControlLeft",
      "ControlRight",
      "AltLeft",
      "AltRight",
      "MetaLeft",
      "MetaRight",
      "ContextMenu",
      "CapsLock",
      "NumLock",
      "ScrollLock",
    ]);
  var S = `/* === Domain-based rules (stable \u2014 hostname only) === */

/* Facebook */
:root[style*='--vsc-domain: "facebook.com"'] vsc-controller {
  position: relative;
  top: 40px;
}

/* Google Photos \u2014 inline preview */
:root[style*='--vsc-domain: "photos.google.com"'] vsc-controller {
  position: relative;
  top: 35px;
}

/* Google Photos \u2014 full-screen view */
:root[style*='--vsc-domain: "photos.google.com"'] #player .house-brand vsc-controller {
  top: 50px;
}

/* Netflix */
:root[style*='--vsc-domain: "netflix.com"'] vsc-controller {
  position: relative;
  top: 85px;
}

/* Google Drive \u2014 shift native controls overlay down to expose video */
:root[style*='--vsc-domain: "drive.google.com"'] section[role="tabpanel"][aria-label="Video Player"] {
  top: 80px;
}

/* ChatGPT */
:root[style*='--vsc-domain: "chatgpt.com"'] vsc-controller {
  position: relative;
  top: 0px;
  left: 35px;
}

/* === DOM-contextual rules (may break if site changes HTML structure) === */

/* YouTube \u2014 shifts controller below info bar when hidden */
.ytp-hide-info-bar vsc-controller {
  position: relative;
  top: 10px;
}

/* YouTube \u2014 shifts below paid promotion overlay when visible */
.ytp-hide-info-bar:has(.ytp-paid-content-overlay-link:not([style*="display: none"])) vsc-controller {
  top: 40px;
}

/* YouTube embedded player (on third-party sites) */
.html5-video-player:not(.ytp-hide-info-bar) vsc-controller,
#player > vsc-controller {
  position: relative;
  top: 60px;
}

/* OpenAI \u2014 prevent black overlay */
.Shared-Video-player > vsc-controller {
  height: 0 !important;
}

/* Amazon Prime Video \u2014 prevent black overlay */
.dv-player-fullscreen vsc-controller {
  height: 0 !important;
}

/* Google Drive YouTube embed \u2014 no info bar, override embedded player offset.
   Extra :root bumps specificity above .html5-video-player:not(...) rule. */
:root:root[style*='--vsc-domain: "youtube.googleapis.com"'] vsc-controller {
  position: relative;
  top: 0px;
}`;
  window.VSC = window.VSC || {};
  window.VSC.Constants = {};
  if (!window.VSC.Constants.DEFAULT_SETTINGS) {
    let e = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm,
      o = /\/(?!.*(.).*\1)[gimsuy]*$/;
    ((window.VSC.Constants.regStrip = e),
      (window.VSC.Constants.regEndsWithFlags = o),
      (window.VSC.Constants.DEFAULT_CONTROLLER_CSS = S));
    let t = {
      schemaVersion: 6,
      enabled: !0,
      exclusiveKeys: !1,
      audioBoolean: !0,
      startHidden: !1,
      controllerOpacity: 0.3,
      controllerButtonSize: 14,
      controllerCSS: S,
      keyBindings: p.map((d) => ({ action: d, ...k[d], predefined: !0 })),
      siteRules: [
        { pattern: "www.instagram.com", enabled: !1 },
        { pattern: "x.com", enabled: !1 },
        { pattern: "imgur.com", enabled: !1 },
        { pattern: "teams.microsoft.com", enabled: !1 },
        { pattern: "meet.google.com", enabled: !1 },
      ],
      blacklist: `www.instagram.com
x.com
imgur.com
teams.microsoft.com
meet.google.com`.replace(e, ""),
      defaultLogLevel: 4,
      logLevel: 3,
    };
    window.VSC.Constants.DEFAULT_SETTINGS = t;
    let n = (d) => d.toFixed(2);
    window.VSC.Constants.formatSpeed = n;
    let s = { NONE: 1, ERROR: 2, WARNING: 3, INFO: 4, DEBUG: 5, VERBOSE: 6 },
      r = {
        SET_SPEED: "VSC_SET_SPEED",
        ADJUST_SPEED: "VSC_ADJUST_SPEED",
        RESET_SPEED: "VSC_RESET_SPEED",
        TOGGLE_DISPLAY: "VSC_TOGGLE_DISPLAY",
        TEARDOWN: "VSC_TEARDOWN",
        REINIT: "VSC_REINIT",
      },
      i = { MIN: 0.07, MAX: 16 },
      a = {
        VIDEO_MIN_WIDTH: 40,
        VIDEO_MIN_HEIGHT: 40,
        AUDIO_MIN_WIDTH: 20,
        AUDIO_MIN_HEIGHT: 20,
      },
      l = [
        "pause",
        "muted",
        "mark",
        "jump",
        "display",
        "resetSettings",
        "chapterPrevious",
        "chapterNext",
      ];
    ((window.VSC.Constants.LOG_LEVELS = s),
      (window.VSC.Constants.MESSAGE_TYPES = r),
      (window.VSC.Constants.SPEED_LIMITS = i),
      (window.VSC.Constants.CONTROLLER_SIZE_LIMITS = a),
      (window.VSC.Constants.CUSTOM_ACTIONS_NO_VALUES = l),
      (window.VSC.Constants.PREDEFINED_CODE_MAP = v),
      (window.VSC.Constants.KEYCODE_TO_CODE = L),
      (window.VSC.Constants.displayKeyFromCode = V),
      (window.VSC.Constants.BLACKLISTED_CODES = b),
      (window.VSC.Constants.PREDEFINED_ACTIONS = p));
  }
  window.VSC = window.VSC || {};
  if (!window.VSC.logger) {
    class e {
      constructor() {
        ((this.verbosity = 3),
          (this.defaultLevel = 4),
          (this.contextStack = []),
          (this._buffer = []),
          (this._ready = !1));
      }
      setVerbosity(t) {
        if (((this.verbosity = t), !this._ready)) {
          this._ready = !0;
          let n = this._buffer;
          this._buffer = [];
          for (let s of n) this._emit(s.message, s.level);
        }
      }
      setDefaultLevel(t) {
        this.defaultLevel = t;
      }
      generateContext() {
        return this.contextStack.length > 0
          ? `[${this.contextStack[this.contextStack.length - 1]}] `
          : "";
      }
      formatVideoId(t) {
        if (!t) return "V?";
        let s = t.tagName === "AUDIO" ? "A" : "V";
        return t.vsc?.controllerId ? `${s}${t.vsc.controllerId}` : `${s}?`;
      }
      pushContext(t) {
        typeof t == "string"
          ? this.contextStack.push(t)
          : t &&
            (t.tagName === "VIDEO" || t.tagName === "AUDIO") &&
            this.contextStack.push(this.formatVideoId(t));
      }
      popContext() {
        this.contextStack.pop();
      }
      withContext(t, n) {
        this.pushContext(t);
        try {
          return n();
        } finally {
          this.popContext();
        }
      }
      log(t, n) {
        let s = typeof n > "u" ? this.defaultLevel : n;
        if (!this._ready) {
          this._buffer.push({ message: t, level: s });
          return;
        }
        this._emit(t, s);
      }
      _emit(t, n) {
        if (this.verbosity < n) return;
        let s = window.VSC.Constants.LOG_LEVELS,
          i = `${this.generateContext()}${t}`;
        switch (n) {
          case s.ERROR:
            console.log(`ERROR:${i}`);
            break;
          case s.WARNING:
            console.log(`WARNING:${i}`);
            break;
          case s.INFO:
            console.log(`INFO:${i}`);
            break;
          case s.DEBUG:
            console.log(`DEBUG:${i}`);
            break;
          case s.VERBOSE:
            (console.log(`DEBUG (VERBOSE):${i}`), console.trace());
            break;
          default:
            console.log(i);
        }
      }
      error(t) {
        this.log(t, window.VSC.Constants.LOG_LEVELS.ERROR);
      }
      warn(t) {
        this.log(t, window.VSC.Constants.LOG_LEVELS.WARNING);
      }
      info(t) {
        this.log(t, window.VSC.Constants.LOG_LEVELS.INFO);
      }
      debug(t) {
        this.log(t, window.VSC.Constants.LOG_LEVELS.DEBUG);
      }
      verbose(t) {
        this.log(t, window.VSC.Constants.LOG_LEVELS.VERBOSE);
      }
    }
    window.VSC.logger = new e();
  }
  window.VSC = window.VSC || {};
  if (!window.VSC.StorageManager) {
    let e = document.documentElement,
      o = typeof chrome < "u" && chrome.storage && chrome.storage.sync;
    class t {
      static errorCallback = null;
      static onError(s) {
        this.errorCallback = s;
      }
      static async get(s = {}) {
        return o
          ? new Promise((r) => {
              chrome.storage.sync.get(s, (i) => {
                (window.VSC.logger?.debug?.(
                  "StorageManager: settings from chrome.storage",
                ),
                  r(i));
              });
            })
          : new Promise((r) => {
              let i = (l) => {
                  (e.removeEventListener("VSC_SETTINGS_READY", i),
                    clearTimeout(a));
                  let d = l.detail;
                  if (!d) {
                    (window.VSC.logger?.error?.(
                      "StorageManager: bridge response is null (clone failed?)",
                    ),
                      r(s));
                    return;
                  }
                  if (d.abort) {
                    (window.VSC.logger?.debug?.(
                      "StorageManager: site disabled by bridge",
                    ),
                      r(null));
                    return;
                  }
                  (window.VSC.logger?.debug?.(
                    "StorageManager: settings from bridge",
                  ),
                    r({ ...s, ...d.settings }));
                },
                a = setTimeout(() => {
                  (e.removeEventListener("VSC_SETTINGS_READY", i),
                    window.VSC.logger?.warn?.(
                      "StorageManager: settings timeout, using defaults",
                    ),
                    r(s));
                }, 2e3);
              (e.addEventListener("VSC_SETTINGS_READY", i),
                e.dispatchEvent(new CustomEvent("VSC_REQUEST_SETTINGS")));
            });
      }
      static async set(s) {
        if (o)
          return new Promise((i, a) => {
            chrome.storage.sync.set(s, () => {
              if (chrome.runtime.lastError) {
                let l = new Error(
                  `Storage failed: ${chrome.runtime.lastError.message}`,
                );
                (window.VSC.logger?.error?.(
                  `Chrome storage save failed: ${chrome.runtime.lastError.message}`,
                ),
                  this.errorCallback && this.errorCallback(l, s),
                  a(l));
                return;
              }
              (window.VSC.logger?.debug?.(
                "StorageManager: saved to chrome.storage",
              ),
                i());
            });
          });
        return (
          (window.VSC_settings = { ...window.VSC_settings, ...s }),
          Promise.resolve()
        );
      }
      static async remove(s) {
        return o
          ? new Promise((r, i) => {
              chrome.storage.sync.remove(s, () => {
                if (chrome.runtime.lastError) {
                  let a = new Error(
                    `Storage remove failed: ${chrome.runtime.lastError.message}`,
                  );
                  (window.VSC.logger?.error?.(
                    `Chrome storage remove failed: ${chrome.runtime.lastError.message}`,
                  ),
                    this.errorCallback &&
                      this.errorCallback(a, { removedKeys: s }),
                    i(a));
                  return;
                }
                r();
              });
            })
          : (window.VSC_settings &&
              s.forEach((r) => delete window.VSC_settings[r]),
            Promise.resolve());
      }
      static async clear() {
        return o
          ? new Promise((s, r) => {
              chrome.storage.sync.clear(() => {
                if (chrome.runtime.lastError) {
                  let i = new Error(
                    `Storage clear failed: ${chrome.runtime.lastError.message}`,
                  );
                  (window.VSC.logger?.error?.(
                    `Chrome storage clear failed: ${chrome.runtime.lastError.message}`,
                  ),
                    this.errorCallback &&
                      this.errorCallback(i, { operation: "clear" }),
                    r(i));
                  return;
                }
                s();
              });
            })
          : ((window.VSC_settings = {}), Promise.resolve());
      }
      static onChanged(s) {
        o
          ? chrome.storage.onChanged.addListener((r, i) => {
              i === "sync" && s(r);
            })
          : e.addEventListener("VSC_STORAGE_CHANGED", (r) => {
              let i = r.detail;
              for (let [a, l] of Object.entries(i))
                l.newValue !== void 0 &&
                  ((window.VSC_settings = window.VSC_settings || {}),
                  (window.VSC_settings[a] = l.newValue));
              s(i);
            });
      }
    }
    window.VSC.StorageManager = t;
  }
  window.VSC = window.VSC || {};
  if (!window.VSC.VideoSpeedConfig) {
    class e {
      constructor() {
        ((this.settings = { ...window.VSC.Constants.DEFAULT_SETTINGS }),
          (this._loaded = !1),
          this._setupStorageListener());
      }
      _setupStorageListener() {
        try {
          window.VSC.StorageManager.onChanged((t) => {
            for (let [n, s] of Object.entries(t))
              if (!(!(n in this.settings) || s.newValue === void 0)) {
                ((this.settings[n] = s.newValue),
                  window.VSC.logger.debug(
                    `Settings updated from storage change: ${n}`,
                  ));
              }
          });
        } catch (t) {
          window.VSC.logger.debug(
            `Could not set up storage change listener: ${t.message}`,
          );
        }
      }
      async load() {
        try {
          let t = await window.VSC.StorageManager.get(
            window.VSC.Constants.DEFAULT_SETTINGS,
          );
          if (t === null) {
            this.settings._abort = !0;
            return;
          }
          let n = e.mergeKeyBindings(t.keyBindings);
          if (
            ((this._loaded = !0),
            (this.settings.keyBindings = n),
            ((!t.keyBindings || t.keyBindings.length === 0) ||
              JSON.stringify(n) !== JSON.stringify(t.keyBindings)) &&
              (window.VSC.logger.info(
                "Repairing predefined key bindings in storage",
              ),
              await this.save({ keyBindings: this.settings.keyBindings })),
            t.blacklist !== null && t.blacklist !== void 0 && !t.siteRules)
          ) {
            let s = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm;
            ((t.siteRules = t.blacklist
              .split(
                `
`,
              )
              .map((r) => r.replace(s, ""))
              .filter(Boolean)
              .map((r) => ({ pattern: r, enabled: !1 }))),
              await this.save({ siteRules: t.siteRules }),
              window.VSC.logger.info("Migrated blacklist to siteRules"));
          } else
            t.blacklist !== null &&
              t.blacklist !== void 0 &&
              t.siteRules &&
              window.VSC.logger.warn(
                "Found both blacklist and siteRules \u2014 using siteRules",
              );
          this.settings.siteRules =
            t.siteRules || window.VSC.Constants.DEFAULT_SETTINGS.siteRules;
          return (
            (this.settings.exclusiveKeys = !!t.exclusiveKeys),
            (this.settings.audioBoolean = !!t.audioBoolean),
            (this.settings.startHidden = !!t.startHidden),
            (this.settings.controllerOpacity = Number(t.controllerOpacity)),
            (this.settings.controllerButtonSize = Number(
              t.controllerButtonSize,
            )),
            (this.settings.controllerCSS =
              t.controllerCSS ?? window.VSC.Constants.DEFAULT_CONTROLLER_CSS),
            (this.settings.logLevel = Number(
              t.logLevel || window.VSC.Constants.DEFAULT_SETTINGS.logLevel,
            )),
            window.VSC.logger.setVerbosity(this.settings.logLevel),
            window.VSC.logger.info("Settings loaded successfully"),
            this.settings
          );
        } catch (t) {
          return (
            window.VSC.logger.error(`Failed to load settings: ${t.message}`),
            window.VSC.Constants.DEFAULT_SETTINGS
          );
        }
      }
      async save(t = {}) {
        let n = Object.keys(t);
        if (n.length === 0) return !0;
        if (!this._loaded)
          return (
            window.VSC.logger.error(
              "save() called before load() \u2014 refusing to overwrite user data with defaults",
            ),
            !1
          );
        this.settings = { ...this.settings, ...t };
        try {
          await window.VSC.StorageManager.set(t);
        } catch (s) {
          return (
            window.VSC.logger.error(`Failed to save settings: ${s.message}`),
            !1
          );
        }
        return (
          t.logLevel !== void 0 &&
            window.VSC.logger.setVerbosity(this.settings.logLevel),
          window.VSC.logger.info("Settings saved successfully"),
          !0
        );
      }
      getKeyBinding(t, n = "value") {
        try {
          let s = this.settings.keyBindings.find((r) => r.action === t);
          return s ? s[n] : !1;
        } catch (s) {
          return (
            window.VSC.logger.error(
              `Failed to get key binding for ${t}: ${s.message}`,
            ),
            !1
          );
        }
      }
      setKeyBinding(t, n) {
        try {
          let s = this.settings.keyBindings.find((r) => r.action === t);
          if (!s) {
            window.VSC.logger.warn(`No key binding found for action: ${t}`);
            return;
          }
          if (
            [
              "reset",
              "slower",
              "faster",
              "softer",
              "louder",
              "rewind",
              "advance",
            ].includes(t) &&
            (typeof n != "number" || isNaN(n))
          ) {
            window.VSC.logger.warn(`Invalid numeric value for ${t}: ${n}`);
            return;
          }
          ((s.value = n),
            window.VSC.logger.debug(`Updated key binding ${t} to ${n}`));
        } catch (s) {
          window.VSC.logger.error(
            `Failed to set key binding for ${t}: ${s.message}`,
          );
        }
      }
      static normalizeKeyBinding(t) {
        if (!t || !t.modifiers) return t;
        let n = t.modifiers,
          s = {
            shift: !!n.shift,
            ctrl: !!n.ctrl,
            alt: !!n.alt,
            meta: !!n.meta,
          },
          r = { ...t };
        return (
          s.shift || s.ctrl || s.alt || s.meta
            ? (r.modifiers = s)
            : delete r.modifiers,
          r
        );
      }
      static mergeKeyBindings(t) {
        let n = Array.isArray(t) ? t.map(e.normalizeKeyBinding) : [],
          s = window.VSC.Constants.DEFAULT_SETTINGS.keyBindings.map((r) => ({
            ...e.normalizeKeyBinding(r),
          })),
          a = [];
        for (let r of s) {
          let i = n.find((l) => l.action === r.action && l.predefined !== !1);
          a.push(i ? { ...r, ...i, predefined: !0 } : { ...r });
        }
        return a.concat(
          n.filter(
            (r) =>
              r.predefined === !1 || !s.some((i) => i.action === r.action),
          ),
        );
      }
    }
    ((window.VSC.videoSpeedConfig = new e()),
      (window.VSC.VideoSpeedConfig = e));
  }
  function u(e, o, t = {}, n = {}) {
    let s = document.createElement("div");
    ((s.className = `row${n.className ? ` ${n.className}` : ""}`),
      n.id && (s.id = n.id));
    for (let r of o) {
      let i;
      if (r.type === "select") {
        ((i = document.createElement("select")), (i.className = r.className));
        for (let [a, l] of r.options) {
          let d = document.createElement("option");
          ((d.value = a), (d.textContent = l), i.appendChild(d));
        }
        t[r.key] !== null && t[r.key] !== void 0 && (i.value = t[r.key]);
      } else if (r.type === "checkbox")
        ((i = document.createElement("input")),
          (i.type = "checkbox"),
          (i.className = r.className),
          (i.checked = t[r.key] ?? r.default ?? !1));
      else {
        ((i = document.createElement("input")),
          (i.type = r.inputType || "text"),
          (i.className = r.className),
          r.placeholder && (i.placeholder = r.placeholder));
        let a = t[r.key] ?? r.default;
        a != null && (i.value = a);
      }
      s.appendChild(i);
    }
    if (n.removable) {
      let r = document.createElement("button");
      ((r.className = "removeParent"),
        (r.textContent = "\xD7"),
        s.appendChild(r));
    }
    return (n.before ? e.insertBefore(s, n.before) : e.appendChild(s), s);
  }
  window.VSC = window.VSC || {};
  var w = [];
  function R(e) {
    let o = e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;"),
      t = "",
      n = 0;
    for (; n < o.length; ) {
      let s = o.indexOf("/*", n);
      if (s === n) {
        let a = o.indexOf("*/", n + 2),
          l = a === -1 ? o.length : a + 2;
        ((t += `<span class="css-comment">${o.slice(n, l)}</span>`), (n = l));
        continue;
      }
      let r = s === -1 ? o.length : s,
        i = o.slice(n, r);
      ((t += i
        .replace(/([{}])/g, '<span class="css-brace">$1</span>')
        .replace(/([\w-]+)\s*(?=:)/g, '<span class="css-property">$1</span>')
        .replace(/:\s*([^;{}]+)(;)/g, ': <span class="css-value">$1</span>$2')
        .replace(
          /([^{}><\n][^{}<>]*?)(\s*<span class="css-brace">\{)/g,
          '<span class="css-selector">$1</span>$2',
        )),
        (n = r));
    }
    return t;
  }
  function y() {
    let e = document.getElementById("controllerCSS"),
      o = document.getElementById("cssHighlight");
    e &&
      o &&
      (o.innerHTML = `${R(e.value)}
`);
  }
  function A() {
    let e = document.getElementById("controllerCSS"),
      o = document.getElementById("cssHighlight");
    e && o && ((o.scrollTop = e.scrollTop), (o.scrollLeft = e.scrollLeft));
  }
  var M = [
      ["chapterSkip0", "Chapter skip to 0%"],
      ["chapterSkip10", "Chapter skip to 10%"],
      ["chapterSkip20", "Chapter skip to 20%"],
      ["chapterSkip30", "Chapter skip to 30%"],
      ["chapterSkip40", "Chapter skip to 40%"],
      ["chapterSkip50", "Chapter skip to 50%"],
      ["chapterSkip60", "Chapter skip to 60%"],
      ["chapterSkip70", "Chapter skip to 70%"],
      ["chapterSkip80", "Chapter skip to 80%"],
      ["chapterSkip90", "Chapter skip to 90%"],
      ["chapterPrevious", "Previous chapter"],
      ["chapterNext", "Next chapter"],
      ["advance", "Skip"],
      ["rewind", "Reverse"],
      ["louder", "Volume up"],
      ["softer", "Volume down"],
      ["faster", "Increase speed"],
      ["slower", "Decrease speed"],
      ["reset", "Reset speed"],
      ["muted", "Mute"],
      ["pause", "Pause"],
      ["resetSettings", "Reset settings"],
      ["mark", "Set marker"],
      ["jump", "Jump to marker"],
      ["display", "Show/hide controller"],
    ],
    I = [
      { key: "action", type: "select", className: "customDo", options: M },
      {
        key: "keyInput",
        type: "text",
        className: "customKey",
        placeholder: "press a key",
      },
      {
        key: "value",
        type: "text",
        className: "customValue",
        placeholder: "seconds",
      },
    ],
    $ = [
      {
        key: "pattern",
        type: "text",
        className: "rulePattern",
        placeholder: "youtube.com or /regex/",
      },
      {
        key: "disabled",
        type: "checkbox",
        className: "ruleDisabled",
        default: !1,
      },
    ];
  function U(e, o) {
    let t = [],
      n = 0,
      s = 0,
      r = e.replace(/\/\*[\s\S]*?\*\//g, (l) => " ".repeat(l.length));
    for (let l = 0; l < r.length; l++)
      r[l] === "{"
        ? n++
        : r[l] === "}" &&
          (n--, n === 0 && (t.push(e.substring(s, l + 1).trim()), (s = l + 1)));
    if (n !== 0) {
      let l = e.substring(s).trim();
      if (l) return [l.split("{")[0].trim() || l.slice(0, 40)];
    }
    if (t.length <= o.cssRules.length) return [];
    let i = [],
      a = new CSSStyleSheet();
    for (let l of t)
      try {
        if ((a.replaceSync(l), a.cssRules.length === 0)) {
          let d = l.split("{")[0].trim();
          i.push(d || l.slice(0, 40));
        }
      } catch {
        let d = l.split("{")[0].trim();
        i.push(d || l.slice(0, 40));
      }
    return i;
  }
  function m(e) {
    let o = document.getElementById("controllerCSS"),
      t = document.getElementById("cssValidation");
    if (
      (o.classList.remove("css-error", "css-warn"),
      t.classList.remove("error", "warn"),
      (t.textContent = ""),
      !e.trim())
    )
      return !0;
    try {
      let n = new CSSStyleSheet();
      n.replaceSync(e);
      let s = n.cssRules.length;
      if (s === 0)
        return (
          o.classList.add("css-warn"),
          t.classList.add("warn"),
          (t.textContent =
            "No CSS rules parsed \u2014 check for syntax errors."),
          !0
        );
      let r = U(e, n);
      return (
        r.length > 0 &&
          (o.classList.add("css-warn"),
          t.classList.add("warn"),
          (t.textContent = `${s} rule${s !== 1 ? "s" : ""} parsed, ${r.length} dropped: ${r.map((i) => `"${i.slice(0, 40)}${i.length > 40 ? "..." : ""}"`).join(", ")}`)),
        !0
      );
    } catch (n) {
      return (
        o.classList.add("css-error"),
        t.classList.add("error"),
        (t.textContent = `Syntax error: ${n.message.replace(/^Failed to execute.*: /, "")}`),
        !1
      );
    }
  }
  var N = {
      0: "null",
      null: "null",
      undefined: "null",
      32: "Space",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      96: "Num 0",
      97: "Num 1",
      98: "Num 2",
      99: "Num 3",
      100: "Num 4",
      101: "Num 5",
      102: "Num 6",
      103: "Num 7",
      104: "Num 8",
      105: "Num 9",
      106: "Num *",
      107: "Num +",
      109: "Num -",
      110: "Num .",
      111: "Num /",
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
      186: ";",
      188: "<",
      189: "-",
      187: "+",
      190: ">",
      191: "/",
      192: "~",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
    },
    g = null;
  (async function () {
    try {
      navigator.keyboard &&
        navigator.keyboard.getLayoutMap &&
        ((g = await navigator.keyboard.getLayoutMap()),
        navigator.keyboard.addEventListener("layoutchange", async () => {
          g = await navigator.keyboard.getLayoutMap();
        }));
    } catch {}
  })();
  function c(e, o) {
    if (!e) return "Unbound";
    let t = [];
    o &&
      (o.ctrl && t.push("Ctrl"),
      o.alt && t.push("Alt"),
      o.shift && t.push("Shift"),
      o.meta && t.push("Meta"));
    let n = e.length === 1 ? e.toUpperCase() : e;
    return (t.push(n), t.join(" + "));
  }
  function G(e) {
    if (!e) return "Unbound";
    if (
      (e.code ?? null) === null &&
      ((e.keyCode ?? e.key ?? null) === null ||
        (e.keyCode === void 0 && e.key === void 0))
    )
      return "Unbound";
    if (g && e.code) {
      let t = g.get(e.code);
      if (t) return c(t, e.modifiers);
    }
    if (e.displayKey) return c(e.displayKey, e.modifiers);
    if (e.code) {
      let t = window.VSC.Constants.displayKeyFromCode(e.code);
      return c(t, e.modifiers);
    }
    let o = e.keyCode ?? e.key;
    return N[o] || (o >= 48 && o <= 90 ? String.fromCharCode(o) : `Key ${o}`);
  }
  function C(e) {
    if (!e.value || e.value.length <= 3) {
      e.style.width = "75px";
      return;
    }
    let t = document.createElement("span");
    ((t.style.visibility = "hidden"),
      (t.style.position = "absolute"),
      (t.style.font = getComputedStyle(e).font),
      (t.style.whiteSpace = "nowrap"),
      (t.textContent = e.value),
      document.body.appendChild(t));
    let n = t.offsetWidth;
    (document.body.removeChild(t),
      (e.style.width = `${Math.max(75, n + 26)}px`));
  }
  function oe(e) {
    ((e.value = "Unbound"),
      (e.code = null),
      (e.keyCode = null),
      (e.displayKey = null),
      (e.modifiers = void 0),
      C(e),
      _(e));
  }
  function P(e) {
    if (e.code === "Backspace" || e.code === "Escape") {
      (oe(e.target), e.preventDefault(), e.stopPropagation());
      return;
    }
    if (window.VSC.Constants.BLACKLISTED_CODES.has(e.code)) {
      (e.preventDefault(), e.stopPropagation());
      return;
    }
    ((e.target.code = e.code),
      (e.target.keyCode = e.keyCode),
      (e.target.displayKey = e.key));
    let o = e.ctrlKey || e.altKey || e.shiftKey || e.metaKey;
    ((e.target.modifiers = o
      ? { ctrl: e.ctrlKey, alt: e.altKey, shift: e.shiftKey, meta: e.metaKey }
      : void 0),
      (e.target.value = c(e.key, e.target.modifiers)),
      C(e.target),
      _(e.target),
      e.ctrlKey && e.altKey
        ? T(
            e.target,
            "This combination may conflict with AltGr input on some keyboard layouts.",
          )
        : e.metaKey &&
          T(
            e.target,
            "Some Cmd/Meta combinations are intercepted by the OS and may not work.",
          ),
      e.preventDefault(),
      e.stopPropagation());
  }
  function T(e, o) {
    _(e);
    let t = document.createElement("span");
    ((t.className = "shortcut-warning"),
      (t.textContent = o),
      (t.style.cssText =
        "display:block;color:#c57600;font-size:11px;margin-top:2px;"),
      e.parentNode.insertBefore(t, e.nextSibling));
  }
  function _(e) {
    let o = e.parentNode.querySelector(".shortcut-warning");
    o && o.remove();
  }
  function W(e) {
    (e.inputType === "insertText" || e.inputType === "insertFromPaste") &&
      e.data &&
      (/^\d+(\.\d*)?$/.test(e.target.value + e.data) || e.preventDefault());
  }
  function q(e) {
    e.target.value = "";
  }
  function z(e) {
    if (e.target.code)
      e.target.value = c(
        e.target.displayKey ||
          window.VSC.Constants.displayKeyFromCode(e.target.code),
        e.target.modifiers,
      );
    else if (e.target.code === null) e.target.value = "Unbound";
    else {
      let o = e.target.keyCode;
      e.target.value =
        N[o] || (o >= 48 && o <= 90 ? String.fromCharCode(o) : `Key ${o}`);
    }
    C(e.target);
  }
  function D(e, o) {
    ((e.code = o.code),
      (e.keyCode = o.keyCode ?? o.key),
      (e.displayKey = o.displayKey),
      (e.modifiers = o.modifiers),
      (e.value = G(o)),
      C(e));
  }
  function ie(e) {
    let o = document.createElement("button"),
      t = e.querySelector(".customValue");
    return (
      (o.type = "button"),
      (o.className = "shortcutUnbind secondary"),
      (o.textContent = "Unbind"),
      e.insertBefore(o, t),
      o
    );
  }
  function ne(e) {
    return e.startsWith("chapterSkip")
      ? "percent"
      : ["advance", "rewind"].includes(e)
      ? "seconds"
      : ["louder", "softer"].includes(e)
        ? "%"
        : ["faster", "slower", "reset"].includes(e)
          ? "0.1x steps"
          : "value";
  }
  function se(e, o) {
    if (window.VSC.Constants.CUSTOM_ACTIONS_NO_VALUES.includes(e)) return "0";
    let t = Number(o);
    if (!Number.isFinite(t)) t = k[e]?.value ?? 0;
    return e.startsWith("chapterSkip")
      ? `${Math.round(t * 100)}`
      : ["louder", "softer"].includes(e)
      ? `${Math.round(t * 100)}`
      : ["faster", "slower", "reset"].includes(e)
        ? `${Number((t * 10).toFixed(2))}`
        : `${Number(t.toFixed ? t.toFixed(2) : t)}`;
  }
  function re(e, o, t) {
    if (window.VSC.Constants.CUSTOM_ACTIONS_NO_VALUES.includes(e)) return 0;
    let n = o.trim() === "" ? t : Number(o);
    if (!Number.isFinite(n)) return t;
    return e.startsWith("chapterSkip")
      ? Number((Math.min(Math.max(n, 0), 100) / 100).toFixed(2))
      : ["louder", "softer"].includes(e)
      ? Number((n / 100).toFixed(2))
      : ["faster", "slower", "reset"].includes(e)
        ? Number((n / 10).toFixed(2))
        : Number(n.toFixed(2));
  }
  function ae(e) {
    let o = e.querySelector(".customDo").value,
      t = e.querySelector(".customValue"),
      n = window.VSC.Constants.CUSTOM_ACTIONS_NO_VALUES.includes(o),
      s = k[o]?.value ?? 0;
    ((t.placeholder = ne(o)),
      n
        ? ((t.style.display = "none"), (t.value = "0"))
        : (t.style.display = "inline-block",
          (t.value = t.value.trim() === "" || t.value === "0" ? se(o, s) : t.value)));
  }
  function B(e = {}) {
    let o = document.getElementById("other-shortcuts-container"),
      t = u(o, I, e, { className: "customs", removable: !0 }),
      n = e.action || t.querySelector(".customDo").value;
    return (
      ie(t),
      (t.querySelector(".customValue").value = se(n, e.value ?? k[n]?.value ?? 0)),
      ae(t),
      t
    );
  }
  function le(e) {
    return e.startsWith("chapterSkip") || ["chapterPrevious", "chapterNext"].includes(e);
  }
  function H(e) {
    let o = document.getElementById(
        le(e.action) ? "chapter-shortcuts-container" : "other-shortcuts-container",
      ),
      t = u(
        o,
        I,
        { action: e.action },
        { className: "customs", id: e.action, removable: !1 },
      ),
      n = t.querySelector(".customDo");
    ((n.disabled = !0), ie(t), D(t.querySelector(".customKey"), e));
    let s = t.querySelector(".customValue");
    return (
      (s.value = se(e.action, e.value)),
      ae(t),
      t
    );
  }
  function j(e) {
    let o = e.querySelector(".customDo").value,
      t = e.querySelector(".customKey"),
      n = e.querySelector(".customValue"),
      s = !!e.id,
      r = k[o],
      i = r && typeof r.value == "number" ? r.value : 0,
      a = re(o, n.value, i),
      l =
        (t.code ?? null) === null &&
        ((t.keyCode ?? t.key ?? null) === null ||
          (t.keyCode === void 0 && t.key === void 0)),
      d = {
        action: o,
        code: l ? null : (t.code ?? null),
        key: l ? null : (t.keyCode ?? t.key ?? null),
        keyCode: l ? null : (t.keyCode ?? t.key ?? null),
        displayKey: l ? null : (t.displayKey ?? null),
        value: a,
        predefined: s,
      };
    (t.modifiers && !l && (d.modifiers = t.modifiers), w.push(d));
  }
  function x(e = { enabled: !0 }) {
    let o = document.getElementById("site-rules-container");
    return u(
      o,
      $,
      { pattern: e.pattern, disabled: !e.enabled },
      { className: "site-rule", removable: !0 },
    );
  }
  function K() {
    let e = document.getElementById("site-rules-container");
    return Array.from(e.querySelectorAll(".row.site-rule"))
      .map((o) => ({
        pattern: o.querySelector(".rulePattern").value.trim(),
        enabled: !o.querySelector(".ruleDisabled").checked,
      }))
      .filter((o) => o.pattern);
  }
  function J() {
    let e = !0,
      o = document.getElementById("status");
    window.validationTimeout && clearTimeout(window.validationTimeout);
    let t = window.VSC.Constants.regEndsWithFlags,
      n = K();
    for (let s of n) {
      if (s.pattern.startsWith("/"))
        try {
          let r = s.pattern.split("/");
          if (r.length < 3) throw "invalid regex";
          let i = t.test(s.pattern),
            a = i ? r.pop() : "",
            l = r.slice(1, i ? void 0 : -1).join("/");
          if (!l) throw "empty regex";
          new RegExp(l, a);
        } catch {
          return (
            (o.textContent = `Error: Invalid site rule regex: "${s.pattern}". Unable to save.`),
            o.classList.add("show", "error"),
            (e = !1),
            (window.validationTimeout = setTimeout(() => {
              ((o.textContent = ""), o.classList.remove("show", "error"));
            }, 5e3)),
            e
          );
        }
    }
    return e;
  }
  async function X() {
    if (J() === !1) return;
    let e = document.getElementById("status");
    ((e.textContent = ""), e.classList.remove("show", "success", "error"));
    try {
      ((w = []),
        Array.from(document.querySelectorAll(".customs")).forEach((F) => j(F)));
      let o = document.getElementById("exclusiveKeys").checked,
        t = document.getElementById("audioBoolean").checked,
        n = document.getElementById("startHidden").checked,
        s = Number(document.getElementById("controllerOpacity").value),
        r = Number(document.getElementById("controllerButtonSize").value),
        i = parseInt(document.getElementById("logLevel").value),
        a = K(),
        l = document.getElementById("controllerCSS").value;
      if (!m(l)) {
        ((e.textContent =
          "Error: Controller CSS has syntax errors. Fix them before saving."),
          e.classList.add("show", "error"),
          setTimeout(() => {
            ((e.textContent = ""), e.classList.remove("show", "error"));
          }, 5e3));
        return;
      }
      let E = new Blob([l]).size;
      if (E > 8192) {
        ((e.textContent = `Error: Controller CSS exceeds 8KB storage limit (${Math.round(E / 1024)}KB). Reduce CSS size.`),
          e.classList.add("show", "error"),
          setTimeout(() => {
            ((e.textContent = ""), e.classList.remove("show", "error"));
          }, 5e3));
        return;
      }
      window.VSC.videoSpeedConfig ||
        (window.VSC.videoSpeedConfig = new window.VSC.VideoSpeedConfig());
      let O = {
        exclusiveKeys: o,
        audioBoolean: t,
        startHidden: n,
        controllerOpacity: s,
        controllerButtonSize: r,
        logLevel: i,
        keyBindings: w,
        siteRules: a,
        controllerCSS: l,
      };
      (await window.VSC.videoSpeedConfig.save(O)) ||
        ((e.textContent = "Error: failed to save options to storage"),
        e.classList.add("show", "error"),
        setTimeout(() => {
          ((e.textContent = ""), e.classList.remove("show", "error"));
        }, 3e3));
    } catch (o) {
      (console.error("Failed to save options:", o),
        (e.textContent = `Error saving options: ${o.message}`),
        e.classList.add("show", "error"),
        setTimeout(() => {
          ((e.textContent = ""), e.classList.remove("show", "error"));
        }, 3e3));
    }
  }
  async function h() {
    try {
      (window.VSC.videoSpeedConfig ||
        (window.VSC.videoSpeedConfig = new window.VSC.VideoSpeedConfig()),
        await window.VSC.videoSpeedConfig.load());
      let e = window.VSC.videoSpeedConfig.settings;
      ((document.getElementById("exclusiveKeys").checked = e.exclusiveKeys),
        (document.getElementById("audioBoolean").checked = e.audioBoolean),
        (document.getElementById("startHidden").checked = e.startHidden),
        (document.getElementById("controllerOpacity").value =
          e.controllerOpacity),
        (document.getElementById("controllerButtonSize").value =
          e.controllerButtonSize),
        (document.getElementById("logLevel").value = e.logLevel),
        (document.getElementById("controllerCSS").value =
          e.controllerCSS ?? window.VSC.Constants.DEFAULT_CONTROLLER_CSS));
      let o = e.siteRules || window.VSC.Constants.DEFAULT_SETTINGS.siteRules;
      document
        .getElementById("site-rules-container")
        .querySelectorAll(".row.site-rule")
        .forEach((r) => r.remove());
      for (let r of o) x(r);
      let n = e.keyBindings || window.VSC.Constants.DEFAULT_SETTINGS.keyBindings,
        s = document.getElementById("chapter-shortcuts-container"),
        r = document.getElementById("other-shortcuts-container");
      ((s.innerHTML = ""), (r.innerHTML = ""));
      for (let r of n)
        if (r.predefined) H(r);
        else {
          let i = B({ action: r.action, value: r.value });
          D(i.querySelector(".customKey"), r);
        }
    } catch (e) {
      (console.error("Failed to restore options:", e),
        (document.getElementById("status").textContent =
          `Error loading options: ${e.message}`),
        document.getElementById("status").classList.add("show", "error"),
        setTimeout(() => {
          ((document.getElementById("status").textContent = ""),
            document
              .getElementById("status")
              .classList.remove("show", "error"));
        }, 3e3));
    }
  }
  async function Z() {
    try {
      let e = document.getElementById("status");
      ((e.textContent = "Restoring defaults..."),
        e.classList.remove("success", "error"),
        e.classList.add("show"),
        await window.VSC.StorageManager.clear(),
        window.VSC.videoSpeedConfig ||
          (window.VSC.videoSpeedConfig = new window.VSC.VideoSpeedConfig()));
      let o = { ...window.VSC.Constants.DEFAULT_SETTINGS, schemaVersion: 6 };
      if (!(await window.VSC.videoSpeedConfig.save(o)))
        throw new Error("failed to write defaults to storage");
      (await h(),
        (e.textContent = "Default options restored"),
        e.classList.add("success"),
        setTimeout(() => {
          ((e.textContent = ""), e.classList.remove("show", "success"));
        }, 2e3));
    } catch (e) {
      (console.error("Failed to restore defaults:", e),
        (status.textContent = `Error restoring defaults: ${e.message}`),
        status.classList.add("show", "error"),
        setTimeout(() => {
          ((status.textContent = ""), status.classList.remove("show", "error"));
        }, 3e3));
    }
  }
  async function Q() {
    let e = document.getElementById("status");
    try {
      (window.VSC.videoSpeedConfig ||
        (window.VSC.videoSpeedConfig = new window.VSC.VideoSpeedConfig()),
        await window.VSC.videoSpeedConfig.load());
      let o = { ...window.VSC.videoSpeedConfig.settings },
        t = new Blob([JSON.stringify(o, null, 2)], {
          type: "application/json",
        }),
        n = URL.createObjectURL(t),
        s = document.createElement("a");
      ((s.href = n),
        (s.download = "videospeed-settings.json"),
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s),
        URL.revokeObjectURL(n),
        (e.textContent = "Settings exported"),
        e.classList.remove("error"),
        e.classList.add("show", "success"),
        setTimeout(() => {
          ((e.textContent = ""), e.classList.remove("show", "success"));
        }, 2e3));
    } catch (o) {
      (console.error("Failed to export settings:", o),
        (e.textContent = `Error exporting settings: ${o.message}`),
        e.classList.add("show", "error"),
        setTimeout(() => {
          ((e.textContent = ""), e.classList.remove("show", "error"));
        }, 3e3));
    }
  }
  function ee() {
    document.getElementById("importFile").click();
  }
  async function te(e) {
    let o = document.getElementById("status"),
      t = e.target.files[0];
    if (t) {
      e.target.value = "";
      try {
        let n = await t.text(),
          s;
        try {
          s = JSON.parse(n);
        } catch (i) {
          throw new Error("File is not valid JSON", { cause: i });
        }
        if (!s || typeof s != "object" || !Array.isArray(s.keyBindings))
          throw new Error(
            "File does not look like a Video Speed Controller settings file",
          );
        if (
          (window.VSC.videoSpeedConfig ||
            (window.VSC.videoSpeedConfig = new window.VSC.VideoSpeedConfig()),
          await window.VSC.StorageManager.clear(),
          !(await window.VSC.videoSpeedConfig.save(s)))
        )
          throw new Error("Failed to write imported settings to storage");
        (document.querySelectorAll(".removeParent").forEach((i) => {
          i.click();
        }),
          await h(),
          (o.textContent = "Settings imported successfully"),
          o.classList.remove("error"),
          o.classList.add("show", "success"),
          setTimeout(() => {
            ((o.textContent = ""), o.classList.remove("show", "success"));
          }, 2e3));
      } catch (n) {
        (console.error("Failed to import settings:", n),
          (o.textContent = `Import failed: ${n.message}`),
          o.classList.add("show", "error"),
          setTimeout(() => {
            ((o.textContent = ""), o.classList.remove("show", "error"));
          }, 4e3));
      }
    }
  }
  function f(e) {
    ["settings"].forEach((o) => {
      (document.getElementById(`tab-${o}`).classList.toggle("active", o === e),
        (document.getElementById(`panel-${o}`).style.display =
          o === e ? "" : "none"));
    });
  }
  document.addEventListener("DOMContentLoaded", async () => {
    (window.VSC.StorageManager.onError((a, l) => {
      console.warn("Storage operation failed:", a.message, l);
    }),
      await h());
    let e = document.getElementById("save");
    function o() {
      (e.classList.add("has-changes"), e.classList.remove("saved"));
    }
    function t() {
      (e.classList.remove("has-changes"),
        e.classList.add("saved"),
        setTimeout(() => e.classList.remove("saved"), 1500));
    }
    (document.body.addEventListener("input", o),
      document.body.addEventListener("change", o),
      e.addEventListener("click", async (a) => {
        (a.preventDefault(), await X(), t());
      }),
      document.getElementById("add").addEventListener("click", () => {
        (B(), o());
      }),
      document.getElementById("add-site-rule").addEventListener("click", () => {
        (x(), o());
      }),
      document
        .getElementById("restore")
        .addEventListener("click", async (a) => {
          (a.preventDefault(), await Z(), o());
        }),
      document.getElementById("export").addEventListener("click", (a) => {
        (a.preventDefault(), Q());
      }),
      document.getElementById("import").addEventListener("click", (a) => {
        (a.preventDefault(), ee());
      }),
      document.getElementById("importFile").addEventListener("change", te),
      document
        .getElementById("tab-settings")
        .addEventListener("click", () => f("settings")));
    let n = document.getElementById("split-menu");
    (document.getElementById("split-toggle").addEventListener("click", () => {
      n.hidden = !n.hidden;
    }),
      document.addEventListener("click", (a) => {
        a.target.closest(".split-button") || (n.hidden = !0);
      }),
      n.addEventListener("click", () => {
        n.hidden = !0;
      }));
    let s = document.getElementById("controllerCSS"),
      r;
    (s.addEventListener("input", () => {
      (y(),
        clearTimeout(r),
        (r = setTimeout(() => {
          m(s.value);
        }, 300)));
    }),
      s.addEventListener("scroll", A),
      y(),
      m(s.value),
      document.getElementById("resetCSS").addEventListener("click", (a) => {
        (a.preventDefault(),
          (document.getElementById("controllerCSS").value =
            window.VSC.Constants.DEFAULT_CONTROLLER_CSS),
          y(),
          m(window.VSC.Constants.DEFAULT_CONTROLLER_CSS),
          o());
      }),
      document.getElementById("about").addEventListener("click", () => {
        window.open("https://github.com/igrigorik/videospeed");
      }),
      document.getElementById("feedback").addEventListener("click", () => {
        window.open("https://github.com/igrigorik/videospeed/issues");
      }));
    function i(a, l, d) {
      a.target.classList.contains(l) && d(a);
    }
    (document.addEventListener("beforeinput", (a) => {
      i(a, "customValue", W);
    }),
      document.addEventListener("focus", (a) => {
        i(a, "customKey", q);
      }),
      document.addEventListener("blur", (a) => {
        i(a, "customKey", z);
      }),
      document.addEventListener("keydown", (a) => {
        i(a, "customKey", P);
      }),
      document.addEventListener("click", (a) => {
        i(a, "removeParent", () => {
          (a.target.closest(".row").remove(), o());
        });
        i(a, "shortcutUnbind", () => {
          (oe(a.target.closest(".row").querySelector(".customKey")), o());
        });
      }),
      document.addEventListener("change", (a) => {
        i(a, "customDo", () => {
          ae(a.target.closest(".row"));
          o();
        });
      }));
  });
})();
