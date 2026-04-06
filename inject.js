(() => {
  var P = Object.freeze({
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
    x = Object.freeze({
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
  function H(r) {
    if (!r) return "";
    if (r.startsWith("Key") && r.length === 4) return r.charAt(3).toLowerCase();
    if (r.startsWith("Digit") && r.length === 6) return r.charAt(5);
    if (/^Numpad\d$/.test(r)) return `Num ${r.charAt(6)}`;
    let e = {
      NumpadMultiply: "Num *",
      NumpadAdd: "Num +",
      NumpadSubtract: "Num -",
      NumpadDecimal: "Num .",
      NumpadDivide: "Num /",
    };
    if (e[r]) return e[r];
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
    return t[r] ? t[r] : r;
  }
  var C = [
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
    F = Object.freeze({
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
    }),
    B = new Set([
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
  var y = `/* === Domain-based rules (stable  hostname only) === */

/* Facebook */
:root[style*='--vsc-domain: "facebook.com"'] vsc-controller {
  position: relative;
  top: 40px;
}

/* Google Photos  inline preview */
:root[style*='--vsc-domain: "photos.google.com"'] vsc-controller {
  position: relative;
  top: 35px;
}

/* Google Photos  full-screen view */
:root[style*='--vsc-domain: "photos.google.com"'] #player .house-brand vsc-controller {
  top: 50px;
}

/* Netflix */
:root[style*='--vsc-domain: "netflix.com"'] vsc-controller {
  position: relative;
  top: 85px;
}

/* Google Drive  shift native controls overlay down to expose video */
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

/* YouTube  shifts controller below info bar when hidden */
.ytp-hide-info-bar vsc-controller {
  position: relative;
  top: 10px;
}

/* YouTube  shifts below paid promotion overlay when visible */
.ytp-hide-info-bar:has(.ytp-paid-content-overlay-link:not([style*="display: none"])) vsc-controller {
  top: 40px;
}

/* YouTube embedded player (on third-party sites) */
.html5-video-player:not(.ytp-hide-info-bar) vsc-controller,
#player > vsc-controller {
  position: relative;
  top: 60px;
}

/* OpenAI  prevent black overlay */
.Shared-Video-player > vsc-controller {
  height: 0 !important;
}

/* Amazon Prime Video  prevent black overlay */
.dv-player-fullscreen vsc-controller {
  height: 0 !important;
}

/* Google Drive YouTube embed  no info bar, override embedded player offset.
   Extra :root bumps specificity above .html5-video-player:not(...) rule. */
:root:root[style*='--vsc-domain: "youtube.googleapis.com"'] vsc-controller {
  position: relative;
  top: 0px;
}`;
  window.VSC = window.VSC || {};
  window.VSC.Constants = {};
  if (!window.VSC.Constants.DEFAULT_SETTINGS) {
    let r = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm,
      e = /\/(?!.*(.).*\1)[gimsuy]*$/;
    ((window.VSC.Constants.regStrip = r),
      (window.VSC.Constants.regEndsWithFlags = e),
      (window.VSC.Constants.DEFAULT_CONTROLLER_CSS = y));
    let t = {
      schemaVersion: 6,
      enabled: !0,
      exclusiveKeys: !1,
      audioBoolean: !0,
      startHidden: !1,
      controllerOpacity: 0.3,
      controllerButtonSize: 14,
      controllerCSS: y,
      keyBindings: C.map((d) => ({ action: d, ...F[d], predefined: !0 })),
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
meet.google.com`.replace(r, ""),
      defaultLogLevel: 4,
      logLevel: 3,
    };
    window.VSC.Constants.DEFAULT_SETTINGS = t;
    let o = (d) => d.toFixed(2);
    window.VSC.Constants.formatSpeed = o;
    let i = { NONE: 1, ERROR: 2, WARNING: 3, INFO: 4, DEBUG: 5, VERBOSE: 6 },
      n = {
        SET_SPEED: "VSC_SET_SPEED",
        ADJUST_SPEED: "VSC_ADJUST_SPEED",
        RESET_SPEED: "VSC_RESET_SPEED",
        REWIND: "VSC_REWIND",
        ADVANCE: "VSC_ADVANCE",
        ADJUST_VOLUME: "VSC_ADJUST_VOLUME",
        RESET_VOLUME: "VSC_RESET_VOLUME",
        TOGGLE_DISPLAY: "VSC_TOGGLE_DISPLAY",
        TEARDOWN: "VSC_TEARDOWN",
        REINIT: "VSC_REINIT",
      },
      s = { MIN: 0.07, MAX: 16 },
      a = {
        VIDEO_MIN_WIDTH: 40,
        VIDEO_MIN_HEIGHT: 40,
        AUDIO_MIN_WIDTH: 20,
        AUDIO_MIN_HEIGHT: 20,
      },
      l = ["pause", "muted", "mark", "jump", "display", "resetSettings"];
    ((window.VSC.Constants.LOG_LEVELS = i),
      (window.VSC.Constants.MESSAGE_TYPES = n),
      (window.VSC.Constants.SPEED_LIMITS = s),
      (window.VSC.Constants.CONTROLLER_SIZE_LIMITS = a),
      (window.VSC.Constants.CUSTOM_ACTIONS_NO_VALUES = l),
      (window.VSC.Constants.PREDEFINED_CODE_MAP = P),
      (window.VSC.Constants.KEYCODE_TO_CODE = x),
      (window.VSC.Constants.displayKeyFromCode = H),
      (window.VSC.Constants.BLACKLISTED_CODES = B),
      (window.VSC.Constants.PREDEFINED_ACTIONS = C));
  }
  window.VSC = window.VSC || {};
  if (!window.VSC.logger) {
    class r {
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
          let o = this._buffer;
          this._buffer = [];
          for (let i of o) this._emit(i.message, i.level);
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
        let i = t.tagName === "AUDIO" ? "A" : "V";
        return t.vsc?.controllerId ? `${i}${t.vsc.controllerId}` : `${i}?`;
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
      withContext(t, o) {
        this.pushContext(t);
        try {
          return o();
        } finally {
          this.popContext();
        }
      }
      log(t, o) {
        let i = typeof o > "u" ? this.defaultLevel : o;
        if (!this._ready) {
          this._buffer.push({ message: t, level: i });
          return;
        }
        this._emit(t, i);
      }
      _emit(t, o) {
        if (this.verbosity < o) return;
        let i = window.VSC.Constants.LOG_LEVELS,
          s = `${this.generateContext()}${t}`;
        switch (o) {
          case i.ERROR:
            console.log(`ERROR:${s}`);
            break;
          case i.WARNING:
            console.log(`WARNING:${s}`);
            break;
          case i.INFO:
            console.log(`INFO:${s}`);
            break;
          case i.DEBUG:
            console.log(`DEBUG:${s}`);
            break;
          case i.VERBOSE:
            (console.log(`DEBUG (VERBOSE):${s}`), console.trace());
            break;
          default:
            console.log(s);
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
    window.VSC.logger = new r();
  }
  window.VSC = window.VSC || {};
  var p = class {
    constructor() {
      this.isActive = !1;
    }
    enable() {
      ((this.isActive = !0),
        console.log("\u{1F41B} VSC Debug Mode Enabled"),
        window.VSC.logger &&
          window.VSC.Constants.LOG_LEVELS &&
          window.VSC.logger.setVerbosity(window.VSC.Constants.LOG_LEVELS.DEBUG),
        (window.vscDebug = {
          checkMedia: () => this.checkMediaElements(),
          checkControllers: () => this.checkControllers(),
          testPopup: () => this.testPopupCommunication(),
          testBridge: () => this.testPopupMessageBridge(),
          forceShow: () => this.forceShowControllers(),
          forceShowAudio: () => this.forceShowAudioControllers(),
          getVisibility: (e) => this.getElementVisibility(e),
        }),
        console.log(
          "\u{1F527} Debug functions available: vscDebug.checkMedia(), vscDebug.checkControllers(), vscDebug.testPopup(), vscDebug.testBridge(), vscDebug.forceShow(), vscDebug.forceShowAudio()",
        ));
    }
    checkMediaElements() {
      console.group("\u{1F3B5} Media Elements Analysis");
      let e = document.querySelectorAll("video"),
        t = document.querySelectorAll("audio");
      (console.log(
        `Found ${e.length} video elements, ${t.length} audio elements`,
      ),
        [...e, ...t].forEach((o, i) => {
          (console.group(`${o.tagName} #${i + 1}`),
            console.log("Element:", o),
            console.log("Connected to DOM:", o.isConnected),
            console.log("Has VSC controller:", !!o.vsc),
            console.log(
              "Current source:",
              o.currentSrc || o.src || "No source",
            ),
            console.log("Ready state:", o.readyState),
            console.log("Paused:", o.paused),
            console.log("Duration:", o.duration));
          let n = window.getComputedStyle(o);
          console.log("Computed styles:", {
            display: n.display,
            visibility: n.visibility,
            opacity: n.opacity,
            width: n.width,
            height: n.height,
          });
          let s = o.getBoundingClientRect();
          if (
            (console.log("Bounding rect:", {
              width: s.width,
              height: s.height,
              top: s.top,
              left: s.left,
              visible: s.width > 0 && s.height > 0,
            }),
            window.VSC.MediaElementObserver &&
              window.VSC_controller?.mediaObserver)
          ) {
            let a = window.VSC_controller.mediaObserver;
            (console.log("VSC would detect:", a.isValidMediaElement(o)),
              console.log("VSC would start hidden:", a.shouldStartHidden(o)));
          }
          console.groupEnd();
        }),
        this.checkShadowDOMMedia(),
        console.groupEnd());
    }
    checkShadowDOMMedia() {
      console.group("\u{1F47B} Shadow DOM Media Check");
      let e = 0,
        t = (o) => {
          if (o.shadowRoot) {
            let i = o.shadowRoot.querySelectorAll("video, audio");
            (i.length > 0 &&
              (console.log(
                `Found ${i.length} media elements in shadow DOM of:`,
                o,
              ),
              (e += i.length),
              i.forEach((n, s) => {
                console.log(`  Shadow media #${s + 1}:`, n);
              })),
              o.shadowRoot.querySelectorAll("*").forEach(t));
          }
        };
      (document.querySelectorAll("*").forEach(t),
        console.log(`Total shadow DOM media elements: ${e}`),
        console.groupEnd());
    }
    checkControllers() {
      console.group("\u{1F3AE} Controllers Analysis");
      let e = document.querySelectorAll("vsc-controller");
      (console.log(`Found ${e.length} VSC controllers`),
        e.forEach((t, o) => {
          (console.group(`Controller #${o + 1}`),
            console.log("Element:", t),
            console.log("Classes:", t.className));
          let i = window.getComputedStyle(t);
          console.log("Computed styles:", {
            display: i.display,
            visibility: i.visibility,
            opacity: i.opacity,
            position: i.position,
            top: i.top,
            left: i.left,
            zIndex: i.zIndex,
          });
          let n = t.classList.contains("vsc-hidden"),
            s = t.classList.contains("vsc-manual"),
            a = t.classList.contains("vsc-nosource"),
            l = t.classList.contains("vsc-autohide"),
            d = t.classList.contains("vsc-show");
          console.log("VSC State:", {
            hidden: n,
            manual: s,
            noSource: a,
            autohide: l,
            show: d,
            effectivelyVisible: !n && !l && i.display !== "none",
          });
          let g = null;
          (document.querySelectorAll("video, audio").forEach((c) => {
            c.vsc && c.vsc.div === t && (g = c);
          }),
            g
              ? (console.log("Associated media:", g),
                console.log(
                  "Media visibility would be:",
                  this.getElementVisibility(g),
                ))
              : console.log("\u26A0\uFE0F No associated media found"),
            console.groupEnd());
        }),
        console.groupEnd());
    }
    testPopupCommunication() {
      (console.group("\u{1F4E1} Popup Communication Test"),
        typeof chrome < "u" && chrome.runtime
          ? console.log("\u2705 Chrome runtime available")
          : console.log(
              "\u2139\uFE0F Chrome runtime not available (expected in page context)",
            ),
        console.log("Testing direct VSC message handling..."));
      let e = document.querySelectorAll("video, audio");
      if (
        (console.log(`Found ${e.length} media elements to control`),
        e.forEach((t, o) => {
          console.log(`Media #${o + 1}:`, {
            element: t,
            hasController: !!t.vsc,
            currentSpeed: t.playbackRate,
            canControl: !t.classList.contains("vsc-cancelled"),
          });
        }),
        window.VSC_controller && window.VSC_controller.actionHandler)
      ) {
        console.log(
          "\u2705 Action handler available, testing speed controls...",
        );
        let t = 1.5;
        (console.log(`Testing speed change to ${t}x`),
          e.forEach((o, i) => {
            o.vsc
              ? (console.log(
                  `Applying speed ${t} to media #${i + 1} via action handler`,
                ),
                window.VSC_controller.actionHandler.adjustSpeed(o, t))
              : (console.log(`Applying speed ${t} to media #${i + 1} directly`),
                (o.playbackRate = t));
          }),
          setTimeout(() => {
            (console.log("Resetting speed to 1.0x"),
              e.forEach((o) => {
                o.vsc
                  ? window.VSC_controller.actionHandler.adjustSpeed(o, 1)
                  : (o.playbackRate = 1);
              }));
          }, 2e3));
      } else console.log("\u274C Action handler not available");
      console.groupEnd();
    }
    testPopupMessageBridge() {
      console.group("\u{1F4E1} Testing Complete Popup Message Bridge");
      let e = [
        { type: "VSC_SET_SPEED", payload: { speed: 1.25 } },
        { type: "VSC_ADJUST_SPEED", payload: { delta: 0.25 } },
        { type: "VSC_RESET_SPEED" },
      ];
      (console.log("Testing message bridge by simulating popup messages..."),
        e.forEach((t, o) => {
          setTimeout(() => {
            (console.log(
              `\u{1F527} Debug: Simulating popup message ${o + 1}:`,
              t,
            ),
              window.dispatchEvent(
                new CustomEvent("VSC_MESSAGE", { detail: t }),
              ));
          }, o * 1500);
        }),
        console.log("Messages will be sent with 1.5 second intervals..."),
        console.groupEnd());
    }
    forceShowControllers() {
      console.log("\u{1F527} Force showing all controllers");
      let e = document.querySelectorAll("vsc-controller");
      return (
        e.forEach((t, o) => {
          (t.classList.remove("vsc-hidden", "vsc-nosource", "vsc-autohide"),
            t.classList.add("vsc-manual", "vsc-show"),
            console.log(`Controller #${o + 1} forced visible`));
        }),
        e.length
      );
    }
    forceShowAudioControllers() {
      console.log("\u{1F50A} Force showing audio controllers");
      let e = document.querySelectorAll("audio"),
        t = 0;
      return (
        e.forEach((o, i) => {
          if (o.vsc && o.vsc.div) {
            let n = o.vsc.div;
            (n.classList.remove("vsc-hidden", "vsc-nosource", "vsc-autohide"),
              n.classList.add("vsc-manual", "vsc-show"),
              console.log(`Audio controller #${i + 1} forced visible`),
              t++);
          } else console.log(`Audio #${i + 1} has no controller attached`);
        }),
        t
      );
    }
    getElementVisibility(e) {
      let t = window.getComputedStyle(e),
        o = e.getBoundingClientRect();
      return {
        connected: e.isConnected,
        display: t.display,
        visibility: t.visibility,
        opacity: t.opacity,
        width: o.width,
        height: o.height,
        isVisible:
          e.isConnected &&
          t.display !== "none" &&
          t.visibility !== "hidden" &&
          t.opacity !== "0" &&
          o.width > 0 &&
          o.height > 0,
      };
    }
    monitorControllerChanges() {
      console.log("\u{1F440} Starting controller visibility monitoring");
      let e = new MutationObserver((t) => {
        t.forEach((o) => {
          if (
            o.type === "attributes" &&
            (o.attributeName === "class" || o.attributeName === "style")
          ) {
            let i = o.target;
            i.tagName === "VSC-CONTROLLER" &&
              console.log("\u{1F504} Controller visibility changed:", {
                element: i,
                classes: i.className,
                hidden: i.classList.contains("vsc-hidden"),
                manual: i.classList.contains("vsc-manual"),
                autohide: i.classList.contains("vsc-autohide"),
                show: i.classList.contains("vsc-show"),
              });
          }
        });
      });
      return (
        e.observe(document.body, {
          attributes: !0,
          subtree: !0,
          attributeFilter: ["class", "style"],
        }),
        e
      );
    }
  };
  window.VSC.DebugHelper = p;
  window.vscDebugHelper = new p();
  window.VSC = window.VSC || {};
  window.VSC.DomUtils = {};
  window.VSC.DomUtils.inIframe = function () {
    try {
      return window.self !== window.top;
    } catch {
      return !0;
    }
  };
  window.VSC.DomUtils.getShadow = function (r, e = 10) {
    let t = [],
      o = new WeakSet();
    function i(n, s = 0) {
      if (!(s > e || o.has(n)) && (o.add(n), n.firstElementChild)) {
        let a = n.firstElementChild;
        do
          (t.push(a),
            i(a, s + 1),
            a.shadowRoot &&
              s < e - 2 &&
              t.push(...window.VSC.DomUtils.getShadow(a.shadowRoot, e - s)),
            (a = a.nextElementSibling));
        while (a);
      }
    }
    return (i(r), t.flat(1 / 0));
  };
  window.VSC.DomUtils.findVideoParent = function (r) {
    let e = r.parentElement;
    for (
      ;
      e.parentNode &&
      e.parentNode.offsetHeight === e.offsetHeight &&
      e.parentNode.offsetWidth === e.offsetWidth;
    )
      e = e.parentNode;
    return e;
  };
  window.VSC.DomUtils.initializeWhenReady = function (r, e) {
    window.VSC.logger.debug("Begin initializeWhenReady");
    let t = () => {
      e(window.document);
    };
    if ((window.addEventListener("load", t, { once: !0 }), r))
      if (r.readyState === "complete") e(r);
      else {
        let o = () => {
          r.readyState === "complete" &&
            (r.removeEventListener("readystatechange", o), e(r));
        };
        r.addEventListener("readystatechange", o);
      }
    window.VSC.logger.debug("End initializeWhenReady");
  };
  window.VSC.DomUtils.findMediaElements = function (r, e = !1) {
    if (!r) return [];
    let t = [],
      o = e ? "video,audio" : "video";
    return (
      r && r.matches && r.matches(o) && t.push(r),
      r.querySelectorAll && t.push(...Array.from(r.querySelectorAll(o))),
      r.shadowRoot &&
        t.push(...window.VSC.DomUtils.findShadowMedia(r.shadowRoot, o)),
      t
    );
  };
  window.VSC.DomUtils.findShadowMedia = function (r, e) {
    let t = [];
    return (
      r.shadowRoot &&
        t.push(...window.VSC.DomUtils.findShadowMedia(r.shadowRoot, e)),
      r.querySelectorAll && t.push(...Array.from(r.querySelectorAll(e))),
      r.querySelectorAll &&
        Array.from(r.querySelectorAll("*")).forEach((i) => {
          i.shadowRoot &&
            t.push(...window.VSC.DomUtils.findShadowMedia(i.shadowRoot, e));
        }),
      t
    );
  };
  window.VSC = window.VSC || {};
  var h = class r {
    constructor(e, t) {
      ((this.config = e),
        (this.actionHandler = t),
        (this.listeners = new Map()),
        (this.coolDown = !1),
        (this.lastKeyEventSignature = null),
        (this.fightCount = 0),
        (this.fightTimer = null));
    }
    setupEventListeners(e) {
      (this.setupKeyboardShortcuts(e), this.setupRateChangeListener(e));
    }
    setupKeyboardShortcuts(e) {
      let t = [e];
      try {
        window.VSC.inIframe() && t.push(window.top.document);
      } catch {}
      t.forEach((o) => {
        let i = (n) => this.handleKeydown(n);
        (o.addEventListener("keydown", i, !0),
          this.listeners.has(o) || this.listeners.set(o, []),
          this.listeners
            .get(o)
            .push({ type: "keydown", handler: i, useCapture: !0 }));
      });
    }
    handleKeydown(e) {
      if (
        (window.VSC.logger.verbose(
          `Processing keydown event: code=${e.code}, key=${e.key}, keyCode=${e.keyCode}`,
        ),
        e.isComposing || e.keyCode === 229 || e.key === "Process")
      )
        return;
      let t = `${e.code}_${e.key}_${e.timeStamp}_${e.type}`;
      if (this.lastKeyEventSignature === t) return;
      let o = this.actionHandler?.getActionableMediaElements
        ? this.actionHandler.getActionableMediaElements()
        : window.VSC.stateManager
          ? window.VSC.stateManager.getControlledElements()
          : [];
      if (
        ((this.lastKeyEventSignature = t),
        this.isTypingContext(e.target) || !o.length)
      )
        return !1;
      let i = this.findMatchingBinding(e);
      return (
        i
          ? (this.actionHandler.runAction(i.action, i.value, e),
            this.config.settings.exclusiveKeys &&
              (e.preventDefault(), e.stopPropagation()))
          : window.VSC.logger.verbose(
              `No key binding found for code=${e.code}, keyCode=${e.keyCode}`,
            ),
        !1
      );
    }
    findMatchingBinding(e) {
      let t = this.config.settings.keyBindings,
        o = e.code,
        i = e.keyCode,
        n = !!e.ctrlKey,
        s = !!e.altKey,
        a = !!e.metaKey,
        l = !!e.shiftKey,
        d = n || s || a;
      if (!o || o === "Unidentified")
        return t.find((c) =>
          (c.keyCode ?? c.key) !== i
            ? !1
            : c.modifiers
              ? r.modifiersMatch(c.modifiers, n, s, a, l)
              : !d,
        );
      let g = t.find(
        (c) =>
          c.modifiers &&
          c.code === o &&
          r.modifiersMatch(c.modifiers, n, s, a, l),
      );
      if (g) return g;
      if (!d) {
        let c = t.find((u) => !u.modifiers && u.code === o);
        if (c) return c;
      }
      if (!d) {
        let c = t.find((u) =>
          u.code !== null && u.code !== void 0
            ? !1
            : (u.keyCode ?? u.key) === i,
        );
        if (c) return c;
      }
    }
    isTypingContext(e) {
      return (
        e.nodeName === "INPUT" ||
        e.nodeName === "TEXTAREA" ||
        e.isContentEditable
      );
    }
    setupRateChangeListener(e) {
      let t = (o) => this.handleRateChange(o);
      (e.addEventListener("ratechange", t, !0),
        this.listeners.has(e) || this.listeners.set(e, []),
        this.listeners
          .get(e)
          .push({ type: "ratechange", handler: t, useCapture: !0 }));
    }
    handleRateChange(e) {
      if (this.coolDown) {
        window.VSC.logger.debug("Rate change event blocked by cooldown");
        let s = e.composedPath ? e.composedPath()[0] : e.target;
        if (s.readyState < 1) {
          (window.VSC.logger.debug(
            "Skipping cooldown fight-back during video init (readyState < 1)",
          ),
            e.stopImmediatePropagation());
          return;
        }
        if (s.vsc && s.vsc.authoritativeSpeed !== null) {
          let a = s.vsc.authoritativeSpeed;
          Math.abs(s.playbackRate - a) > 0.01 &&
            (window.VSC.logger.info(
              `Restoring speed during cooldown from external ${s.playbackRate} to authoritative ${a}`,
            ),
            window.VSC.siteHandlerManager.handleSpeedChange(s, a));
        }
        e.stopImmediatePropagation();
        return;
      }
      let t = e.composedPath ? e.composedPath()[0] : e.target;
      if (!t.vsc) {
        window.VSC.logger.debug(
          "Skipping ratechange - no VSC controller attached",
        );
        return;
      }
      if (e.detail && e.detail.origin === "videoSpeed") {
        window.VSC.logger.debug("Ignoring extension-originated rate change");
        return;
      }
      if (t.readyState < 1) {
        (window.VSC.logger.debug(
          "Ignoring external ratechange during video initialization (readyState < 1)",
        ),
          e.stopImmediatePropagation());
        return;
      }
      let o = typeof t.playbackRate == "number" ? t.playbackRate : NaN,
        i = window.VSC.Constants.SPEED_LIMITS.MIN;
      if (!isNaN(o) && o <= i) {
        (window.VSC.logger.debug(
          `Ignoring external ratechange below MIN: raw=${o}, MIN=${i}`,
        ),
          e.stopImmediatePropagation());
        return;
      }
      let n = t.vsc?.authoritativeSpeed;
      if (n !== null && Math.abs(t.playbackRate - n) > 0.01)
        if (
          (this.fightCount++,
          this.fightTimer && clearTimeout(this.fightTimer),
          (this.fightTimer = setTimeout(() => {
            ((this.fightCount = 0), (this.fightTimer = null));
          }, r.FIGHT_WINDOW_MS)),
          this.fightCount >= r.MAX_FIGHT_COUNT)
        )
          (window.VSC.logger.info(
            `Fight detection: surrendering after ${this.fightCount} resets. Accepting site speed ${t.playbackRate}`,
          ),
            (this.fightCount = 0));
        else {
          let s = Math.min(
            r.BASE_COOLDOWN_MS * Math.pow(2, this.fightCount - 1),
            r.MAX_COOLDOWN_MS,
          );
          (window.VSC.logger.info(
            `Fight detection: attempt ${this.fightCount}/${r.MAX_FIGHT_COUNT}, re-applying ${n} (cooldown ${s}ms)`,
          ),
            window.VSC.siteHandlerManager.handleSpeedChange(t, n),
            this.refreshCoolDown(s),
            e.stopImmediatePropagation());
          return;
        }
      (this.actionHandler &&
        this.actionHandler.adjustSpeed(t, t.playbackRate, {
          source: "external",
        }),
        e.stopImmediatePropagation());
    }
    refreshCoolDown(e = r.BASE_COOLDOWN_MS) {
      (window.VSC.logger.debug(`Begin refreshCoolDown (${e}ms)`),
        this.coolDown && clearTimeout(this.coolDown),
        (this.coolDown = setTimeout(() => {
          this.coolDown = !1;
        }, e)),
        window.VSC.logger.debug("End refreshCoolDown"));
    }
    cleanup() {
      (this.listeners.forEach((e, t) => {
        e.forEach(({ type: o, handler: i, useCapture: n }) => {
          try {
            t.removeEventListener(o, i, n);
          } catch (s) {
            window.VSC.logger.warn(
              `Failed to remove event listener: ${s.message}`,
            );
          }
        });
      }),
        this.listeners.clear(),
        this.coolDown && (clearTimeout(this.coolDown), (this.coolDown = !1)),
        this.fightTimer &&
          (clearTimeout(this.fightTimer), (this.fightTimer = null)),
        (this.fightCount = 0));
    }
  };
  h.modifiersMatch = function (r, e, t, o, i) {
    return r.ctrl === e && r.alt === t && r.meta === o && r.shift === i;
  };
  h.BASE_COOLDOWN_MS = 200;
  h.MAX_COOLDOWN_MS = 2e3;
  h.MAX_FIGHT_COUNT = 5;
  h.FIGHT_WINDOW_MS = h.MAX_COOLDOWN_MS + 1e3;
  window.VSC.EventManager = h;
  window.VSC = window.VSC || {};
  var O = class {
    static clamp(e) {
      let t = Number(e);
      return Number.isFinite(t)
        ? Math.min(Math.max(Number(t.toFixed(2)), 0.01), 5)
        : 1;
    }
    static ensureState(e) {
      return e
        ? (e._vscState ||
            (e._vscState = {
              audioGainState: null,
              audioGainUnavailable: !1,
              pausedByShortcut: !1,
            }))
        : null;
    }
    static ensureGraph(e) {
      let t = this.ensureState(e);
      if (!t || t.audioGainUnavailable) return null;
      if (t.audioGainState) return t.audioGainState;
      let o = window.AudioContext || window.webkitAudioContext;
      if (!o) return null;
      try {
        let i = window.VSC.audioContext || (window.VSC.audioContext = new o());
        i.state === "suspended" && i.resume().catch(() => {});
        let n = i.createMediaElementSource(e),
          s = i.createGain();
        return (
          n.connect(s),
          s.connect(i.destination),
          (t.audioGainState = { context: i, source: n, gain: s }),
          t.audioGainState
        );
      } catch (i) {
        return (
          (t.audioGainUnavailable = !0),
          window.VSC.logger.warn(
            `Volume boost unavailable for media element: ${i.message}`,
          ),
          null
        );
      }
    }
    static getVolume(e) {
      let t = this.ensureState(e)?.audioGainState?.gain;
      return t ? this.clamp(t.gain.value) : this.clamp(e?.volume ?? 1);
    }
    static setVolume(e, t) {
      let o = this.clamp(t),
        i = this.ensureGraph(e);
      return i
        ? ((e.volume = 1), (i.gain.gain.value = o), o)
        : ((e.volume = Math.min(1, o)), Math.min(1, o));
    }
  };
  window.VSC.AudioGainManager = O;
  var K = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm,
    z = /\/(?!.*(.).*\1)[gimsuy]*$/,
    U = (r) => r.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  function G(r) {
    let e = r.replace(K, "");
    if (e.length === 0) return null;
    if (e.startsWith("/"))
      try {
        let i = e.split("/");
        if (i.length < 3) return null;
        let n = z.test(e),
          s = n ? i.pop() : "",
          a = i.slice(1, n ? void 0 : -1).join("/");
        return a ? new RegExp(a, s) : null;
      } catch {
        return null;
      }
    let t = U(e);
    return e.includes(".") && !e.includes("/")
      ? new RegExp(`(^|\\.|//)${t}(\\/|:|$)`)
      : new RegExp(t);
  }
  function j(r, e) {
    if (!r || !r.length) return null;
    for (let t of r) {
      let o = G(t.pattern || "");
      if (o && o.test(e)) return t;
    }
    return null;
  }
  window.VSC = window.VSC || {};
  window.VSC.matchSiteRule = j;
  window.VSC = window.VSC || {};
  if (!window.VSC.StorageManager) {
    let r = document.documentElement,
      e = typeof chrome < "u" && chrome.storage && chrome.storage.sync;
    class t {
      static errorCallback = null;
      static onError(i) {
        this.errorCallback = i;
      }
      static async get(i = {}) {
        return e
          ? new Promise((n) => {
              chrome.storage.sync.get(i, (s) => {
                (window.VSC.logger?.debug?.(
                  "StorageManager: settings from chrome.storage",
                ),
                  n(s));
              });
            })
          : new Promise((n) => {
              let s = (l) => {
                  (r.removeEventListener("VSC_SETTINGS_READY", s),
                    clearTimeout(a));
                  let d = l.detail;
                  if (!d) {
                    (window.VSC.logger?.error?.(
                      "StorageManager: bridge response is null (clone failed?)",
                    ),
                      n(i));
                    return;
                  }
                  if (d.abort) {
                    (window.VSC.logger?.debug?.(
                      "StorageManager: site disabled by bridge",
                    ),
                      n(null));
                    return;
                  }
                  (window.VSC.logger?.debug?.(
                    "StorageManager: settings from bridge",
                  ),
                    n({ ...i, ...d.settings }));
                },
                a = setTimeout(() => {
                  (r.removeEventListener("VSC_SETTINGS_READY", s),
                    window.VSC.logger?.warn?.(
                      "StorageManager: settings timeout, using defaults",
                    ),
                    n(i));
                }, 2e3);
              (r.addEventListener("VSC_SETTINGS_READY", s),
                r.dispatchEvent(new CustomEvent("VSC_REQUEST_SETTINGS")));
            });
      }
      static async set(i) {
        if (e)
          return new Promise((s, a) => {
            chrome.storage.sync.set(i, () => {
              if (chrome.runtime.lastError) {
                let l = new Error(
                  `Storage failed: ${chrome.runtime.lastError.message}`,
                );
                (window.VSC.logger?.error?.(
                  `Chrome storage save failed: ${chrome.runtime.lastError.message}`,
                ),
                  this.errorCallback && this.errorCallback(l, i),
                  a(l));
                return;
              }
              (window.VSC.logger?.debug?.(
                "StorageManager: saved to chrome.storage",
              ),
                s());
            });
          });
        return (
          (window.VSC_settings = { ...window.VSC_settings, ...i }),
          Promise.resolve()
        );
      }
      static async remove(i) {
        return e
          ? new Promise((n, s) => {
              chrome.storage.sync.remove(i, () => {
                if (chrome.runtime.lastError) {
                  let a = new Error(
                    `Storage remove failed: ${chrome.runtime.lastError.message}`,
                  );
                  (window.VSC.logger?.error?.(
                    `Chrome storage remove failed: ${chrome.runtime.lastError.message}`,
                  ),
                    this.errorCallback &&
                      this.errorCallback(a, { removedKeys: i }),
                    s(a));
                  return;
                }
                n();
              });
            })
          : (window.VSC_settings &&
              i.forEach((n) => delete window.VSC_settings[n]),
            Promise.resolve());
      }
      static async clear() {
        return e
          ? new Promise((i, n) => {
              chrome.storage.sync.clear(() => {
                if (chrome.runtime.lastError) {
                  let s = new Error(
                    `Storage clear failed: ${chrome.runtime.lastError.message}`,
                  );
                  (window.VSC.logger?.error?.(
                    `Chrome storage clear failed: ${chrome.runtime.lastError.message}`,
                  ),
                    this.errorCallback &&
                      this.errorCallback(s, { operation: "clear" }),
                    n(s));
                  return;
                }
                i();
              });
            })
          : ((window.VSC_settings = {}), Promise.resolve());
      }
      static onChanged(i) {
        e
          ? chrome.storage.onChanged.addListener((n, s) => {
              s === "sync" && i(n);
            })
          : r.addEventListener("VSC_STORAGE_CHANGED", (n) => {
              let s = n.detail;
              for (let [a, l] of Object.entries(s))
                l.newValue !== void 0 &&
                  ((window.VSC_settings = window.VSC_settings || {}),
                  (window.VSC_settings[a] = l.newValue));
              i(s);
            });
      }
    }
    window.VSC.StorageManager = t;
  }
  window.VSC = window.VSC || {};
  if (!window.VSC.VideoSpeedConfig) {
    class r {
      constructor() {
        ((this.settings = { ...window.VSC.Constants.DEFAULT_SETTINGS }),
          (this._loaded = !1),
          this._setupStorageListener());
      }
      _setupStorageListener() {
        try {
          window.VSC.StorageManager.onChanged((t) => {
            for (let [o, i] of Object.entries(t))
              if (!(!(o in this.settings) || i.newValue === void 0)) {
                ((this.settings[o] = i.newValue),
                  window.VSC.logger.debug(
                    `Settings updated from storage change: ${o}`,
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
          let o = r.mergeKeyBindings(t.keyBindings);
          if (
            ((this._loaded = !0),
            (this.settings.keyBindings = o),
            ((!t.keyBindings || t.keyBindings.length === 0) ||
              JSON.stringify(o) !== JSON.stringify(t.keyBindings)) &&
              (window.VSC.logger.info(
                "Repairing predefined key bindings in storage",
              ),
              await this.save({ keyBindings: this.settings.keyBindings })),
            t.blacklist !== null && t.blacklist !== void 0 && !t.siteRules)
          ) {
            let i = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm;
            ((t.siteRules = t.blacklist
              .split(
                `
`,
              )
              .map((n) => n.replace(i, ""))
              .filter(Boolean)
              .map((n) => ({ pattern: n, enabled: !1 }))),
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
        let o = Object.keys(t);
        if (o.length === 0) return !0;
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
        } catch (i) {
          return (
            window.VSC.logger.error(`Failed to save settings: ${i.message}`),
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
      getKeyBinding(t, o = "value") {
        try {
          let i = this.settings.keyBindings.find((n) => n.action === t);
          return i ? i[o] : !1;
        } catch (i) {
          return (
            window.VSC.logger.error(
              `Failed to get key binding for ${t}: ${i.message}`,
            ),
            !1
          );
        }
      }
      setKeyBinding(t, o) {
        try {
          let i = this.settings.keyBindings.find((n) => n.action === t);
          if (!i) {
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
            ].includes(t) || t.startsWith("chapterSkip")
          ) {
            if (typeof o != "number" || isNaN(o)) {
              window.VSC.logger.warn(`Invalid numeric value for ${t}: ${o}`);
              return;
            }
          }
          ((i.value = o),
            window.VSC.logger.debug(`Updated key binding ${t} to ${o}`));
        } catch (i) {
          window.VSC.logger.error(
            `Failed to set key binding for ${t}: ${i.message}`,
          );
        }
      }
      static normalizeKeyBinding(t) {
        if (!t || !t.modifiers) return t;
        let o = t.modifiers,
          i = {
            shift: !!o.shift,
            ctrl: !!o.ctrl,
            alt: !!o.alt,
            meta: !!o.meta,
          },
          n = { ...t };
        return (
          i.shift || i.ctrl || i.alt || i.meta
            ? (n.modifiers = i)
            : delete n.modifiers,
          n
        );
      }
      static mergeKeyBindings(t) {
        let o = Array.isArray(t) ? t.map(r.normalizeKeyBinding) : [],
          i = window.VSC.Constants.DEFAULT_SETTINGS.keyBindings.map((n) => ({
            ...r.normalizeKeyBinding(n),
          })),
          s = [];
        for (let n of i) {
          let a = o.find((l) => l.action === n.action && l.predefined !== !1);
          s.push(a ? { ...n, ...a, predefined: !0 } : { ...n });
        }
        return s.concat(
          o.filter(
            (n) =>
              n.predefined === !1 || !i.some((a) => a.action === n.action),
          ),
        );
      }
    }
    ((window.VSC.videoSpeedConfig = new r()),
      (window.VSC.VideoSpeedConfig = r));
  }
  window.VSC = window.VSC || {};
  var f = class {
    constructor() {
      ((this.controllers = new Map()),
        window.VSC.logger?.debug("VSCStateManager initialized"));
    }
    registerController(e) {
      if (!e || !e.controllerId) {
        window.VSC.logger?.warn("Invalid controller registration attempt");
        return;
      }
      let t = {
        controller: e,
        element: e.video,
        tagName: e.video?.tagName,
        videoSrc: e.video?.src || e.video?.currentSrc,
        created: Date.now(),
      };
      (this.controllers.set(e.controllerId, t),
        window.VSC.logger?.debug(`Controller registered: ${e.controllerId}`));
    }
    unregisterController(e) {
      this.controllers.has(e) &&
        (this.controllers.delete(e),
        window.VSC.logger?.debug(`Controller unregistered: ${e}`));
    }
    getAllMediaElements() {
      let e = [];
      for (let [t, o] of this.controllers) {
        let i = o.controller?.video || o.element;
        i && i.isConnected ? e.push(i) : this.controllers.delete(t);
      }
      return e;
    }
    getMediaByControllerId(e) {
      let t = this.controllers.get(e);
      return t?.controller?.video || t?.element || null;
    }
    getFirstMedia() {
      return this.getAllMediaElements()[0] || null;
    }
    hasControllers() {
      return this.controllers.size > 0;
    }
    removeController(e) {
      this.unregisterController(e);
    }
    getControlledElements() {
      return this.getAllMediaElements();
    }
  };
  window.VSC.StateManager = f;
  window.VSC.stateManager = new f();
  window.VSC.logger?.info("State Manager module loaded");
  window.VSC = window.VSC || {};
  var b = class {
    constructor(e, t) {
      ((this.config = e), (this.siteHandler = t));
    }
    scanForMedia(e) {
      let t = [],
        i = this.config.settings.audioBoolean ? "video,audio" : "video",
        n = Array.from(e.querySelectorAll(i));
      t.push(...n);
      function s(g, c) {
        let u = [];
        return (
          u.push(...g.querySelectorAll(c)),
          g.querySelectorAll("*").forEach((m) => {
            m.shadowRoot && u.push(...s(m.shadowRoot, c));
          }),
          u
        );
      }
      let a = s(e, i);
      t.push(...a);
      let l = this.siteHandler.detectSpecialVideos(e);
      t.push(...l);
      let d = t.filter((g) => !this.siteHandler.shouldIgnoreVideo(g));
      return (
        window.VSC.logger.info(
          `Found ${d.length} media elements (${t.length} total, ${t.length - d.length} filtered out)`,
        ),
        d
      );
    }
    scanForMediaLight(e) {
      let t = [],
        i = this.config.settings.audioBoolean ? "video,audio" : "video";
      try {
        let n = Array.from(e.querySelectorAll(i));
        t.push(...n);
        let s = this.siteHandler.detectSpecialVideos(e);
        t.push(...s);
        let a = t.filter((l) => !this.siteHandler.shouldIgnoreVideo(l));
        return (
          window.VSC.logger.info(
            `Light scan found ${a.length} media elements (${t.length} total, ${t.length - a.length} filtered out)`,
          ),
          a
        );
      } catch (n) {
        return (
          window.VSC.logger.error(`Light media scan failed: ${n.message}`),
          []
        );
      }
    }
    scanIframes(e) {
      let t = [],
        o = e.getElementsByTagName("iframe");
      return (
        Array.prototype.forEach.call(o, (i) => {
          try {
            let n = i.contentDocument;
            if (n) {
              let s = this.scanForMedia(n);
              (t.push(...s),
                window.VSC.logger.debug(
                  `Found ${s.length} media elements in iframe`,
                ));
            }
          } catch (n) {
            window.VSC.logger.debug(
              `Cannot access iframe content (cross-origin): ${n.message}`,
            );
          }
        }),
        t
      );
    }
    scanSiteSpecificContainers(e) {
      let t = [],
        o = this.siteHandler.getVideoContainerSelectors(),
        i = this.config.settings.audioBoolean;
      return (
        o.forEach((n) => {
          try {
            e.querySelectorAll(n).forEach((a) => {
              let l = window.VSC.DomUtils.findMediaElements(a, i);
              t.push(...l);
            });
          } catch (s) {
            window.VSC.logger.warn(`Invalid selector "${n}": ${s.message}`);
          }
        }),
        t
      );
    }
    scanAll(e) {
      let t = [],
        o = this.scanForMedia(e);
      t.push(...o);
      let i = this.scanSiteSpecificContainers(e);
      t.push(...i);
      let n = this.scanIframes(e);
      t.push(...n);
      let s = [...new Set(t)];
      return (
        window.VSC.logger.info(
          `Total unique media elements found: ${s.length}`,
        ),
        s
      );
    }
    isValidMediaElement(e) {
      return e.isConnected
        ? e.tagName === "AUDIO" && !this.config.settings.audioBoolean
          ? (window.VSC.logger.debug(
              "Audio element rejected - audioBoolean disabled",
            ),
            !1)
          : this.siteHandler.shouldIgnoreVideo(e)
            ? (window.VSC.logger.debug("Video ignored by site handler"), !1)
            : !0
        : (window.VSC.logger.debug("Video not in DOM"), !1);
    }
    shouldStartHidden(e) {
      if (e.tagName === "AUDIO")
        return this.config.settings.audioBoolean
          ? e.disabled || e.style.pointerEvents === "none"
            ? (window.VSC.logger.debug(
                "Audio controller hidden - element disabled or no pointer events",
              ),
              !0)
            : (window.VSC.logger.debug(
                "Audio controller will start visible (audio elements can be invisible but functional)",
              ),
              !1)
          : (window.VSC.logger.debug(
              "Audio controller hidden - audio support disabled",
            ),
            !0);
      let t = window.getComputedStyle(e);
      return t.display === "none" ||
        t.visibility === "hidden" ||
        t.opacity === "0"
        ? (window.VSC.logger.debug(
            "Video not visible, controller will start hidden",
          ),
          !0)
        : !1;
    }
    findControllerParent(e) {
      return (
        this.siteHandler.getControllerPosition(e.parentElement, e)
          .targetParent || e.parentElement
      );
    }
  };
  window.VSC.MediaElementObserver = b;
  window.VSC = window.VSC || {};
  var V = class {
    constructor(e, t, o, i) {
      ((this.config = e),
        (this.onVideoFound = t),
        (this.onVideoRemoved = o),
        (this.mediaObserver = i),
        (this.observer = null),
        (this.shadowObservers = new Set()));
    }
    start(e) {
      this.observer = new MutationObserver((o) => {
        requestIdleCallback(() => {
          this.processMutations(o);
        });
      });
      let t = {
        attributeFilter: ["aria-hidden", "data-focus-method", "style", "class"],
        childList: !0,
        subtree: !0,
      };
      (this.observer.observe(e, t),
        window.VSC.logger.debug("Video mutation observer started"));
    }
    processMutations(e) {
      e.forEach((t) => {
        switch (t.type) {
          case "childList":
            this.processChildListMutation(t);
            break;
          case "attributes":
            this.processAttributeMutation(t);
            break;
        }
      });
    }
    processChildListMutation(e) {
      (e.addedNodes.forEach((t) => {
        if (!(!t || t.nodeType !== Node.ELEMENT_NODE)) {
          if (t === document.documentElement) {
            (window.VSC.logger.debug("Document was replaced, reinitializing"),
              this.onDocumentReplaced());
            return;
          }
          this.checkForVideoAndShadowRoot(t, t.parentNode || e.target, !0);
        }
      }),
        e.removedNodes.forEach((t) => {
          !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            this.checkForVideoAndShadowRoot(t, t.parentNode || e.target, !1);
        }));
    }
    processAttributeMutation(e) {
      if (
        ((e.attributeName === "style" || e.attributeName === "class") &&
          this.handleVisibilityChanges(e.target),
        (e.target.attributes["aria-hidden"] &&
          e.target.attributes["aria-hidden"].value === "false") ||
          e.target.nodeName === "APPLE-TV-PLUS-PLAYER")
      ) {
        let o = window.VSC.DomUtils.getShadow(document.body).filter(
          (i) => i.tagName === "VIDEO",
        );
        for (let i of o)
          (i.vsc && e.target.nodeName === "APPLE-TV-PLUS-PLAYER") ||
            (i.vsc && i.vsc.remove(),
            this.checkForVideoAndShadowRoot(i, i.parentNode || e.target, !0));
      }
    }
    handleVisibilityChanges(e) {
      if (
        e.tagName === "VIDEO" ||
        (e.tagName === "AUDIO" && this.config.settings.audioBoolean)
      ) {
        this.recheckVideoElement(e);
        return;
      }
      let o = this.config.settings.audioBoolean ? "video,audio" : "video";
      (e.querySelectorAll ? e.querySelectorAll(o) : []).forEach((n) => {
        this.recheckVideoElement(n);
      });
    }
    recheckVideoElement(e) {
      this.mediaObserver &&
        (e.vsc
          ? this.mediaObserver.isValidMediaElement(e)
            ? e.vsc.updateVisibility()
            : (window.VSC.logger.debug(
                "Video became invalid, removing controller",
              ),
              e.vsc.remove(),
              (e.vsc = null))
          : this.mediaObserver.isValidMediaElement(e) &&
            (window.VSC.logger.debug(
              "Video became valid, attaching controller",
            ),
            this.onVideoFound(e, e.parentElement || e.parentNode)));
    }
    checkForVideoAndShadowRoot(e, t, o) {
      (!o && document.body?.contains(e)) ||
        (e.nodeName === "VIDEO" ||
        (e.nodeName === "AUDIO" && this.config.settings.audioBoolean)
          ? o
            ? this.onVideoFound(e, t)
            : e.vsc && this.onVideoRemoved(e)
          : this.processNodeChildren(e, t, o));
    }
    processNodeChildren(e, t, o) {
      let i = [];
      (e.shadowRoot &&
        (this.observeShadowRoot(e.shadowRoot),
        (i = Array.from(e.shadowRoot.children))),
        e.children && (i = [...i, ...Array.from(e.children)]));
      for (let n of i) this.checkForVideoAndShadowRoot(n, n.parentNode || t, o);
    }
    observeShadowRoot(e) {
      if (this.shadowObservers.has(e)) return;
      let t = new MutationObserver((i) => {
          requestIdleCallback(
            () => {
              this.processMutations(i);
            },
            { timeout: 500 },
          );
        }),
        o = {
          attributeFilter: ["aria-hidden", "data-focus-method"],
          childList: !0,
          subtree: !0,
        };
      (t.observe(e, o),
        this.shadowObservers.add(e),
        window.VSC.logger.debug("Shadow root observer added"));
    }
    onDocumentReplaced() {
      window.VSC.logger.warn(
        "Document replacement detected - full reinitialization needed",
      );
    }
    stop() {
      (this.observer && (this.observer.disconnect(), (this.observer = null)),
        this.shadowObservers.forEach((e) => {}),
        this.shadowObservers.clear(),
        window.VSC.logger.debug("Video mutation observer stopped"));
    }
  };
  window.VSC.VideoMutationObserver = V;
  window.VSC = window.VSC || {};
  var v = class {
    constructor(e, t) {
      ((this.config = e), (this.eventManager = t));
    }
    getActionableMediaElements() {
      let e = window.VSC.stateManager
        ? window.VSC.stateManager.getControlledElements()
        : [];
      if (e.length > 0) return e;
      let t = window.VSC.DomUtils.findMediaElements(
        document,
        this.config.settings.audioBoolean,
      );
      return [...new Set(t)].filter(
        (o) => o && o.isConnected && !window.VSC.siteHandlerManager.shouldIgnoreVideo(o),
      );
    }
    runAction(e, t, o) {
      if (e === "rewind" || e === "advance" || e.startsWith("chapterSkip")) {
        let i = this.resolvePrimaryMediaElement(o);
        return i ? this.executeAction(e, t, i, o) : void 0;
      }
      let i = this.getActionableMediaElements(),
        n = null;
      (o && (n = o.target.getRootNode().host),
        i.forEach((s) => {
          let a = s.vsc?.div;
          (o && n && a && n !== a) ||
            s.classList.contains("vsc-cancelled") ||
            this.executeAction(e, t, s, o);
        }));
    }
    resolvePrimaryMediaElement(e) {
      let t = this.getActionableMediaElements();
      if (t.length === 0) return null;
      let o = this.getControllerHostFromEvent(e);
      if (o) {
        let s = t.find((a) => a?.vsc?.div === o);
        if (s) return s;
      }
      let i = this.findFocusedMediaElement(t);
      return i || this.rankMediaElements(t)[0] || null;
    }
    getControllerHostFromEvent(e) {
      if (!e?.target || typeof e.target.getRootNode != "function") return null;
      let t = e.target.getRootNode();
      return t?.host || null;
    }
    findFocusedMediaElement(e) {
      let t = document.activeElement;
      if (!t) return null;
      let o = e.find((i) => i === t || (typeof i.contains == "function" && i.contains(t)));
      return o || null;
    }
    rankMediaElements(e) {
      return [...e]
        .filter((t) => t && t.isConnected && !t.classList.contains("vsc-cancelled"))
        .sort((t, o) => this.getMediaPriority(o) - this.getMediaPriority(t));
    }
    getMediaPriority(e) {
      let t = 0,
        o = e.getBoundingClientRect ? e.getBoundingClientRect() : null;
      return (
        e.tagName === "VIDEO" && (t += 50),
        e.paused || e.ended || (t += 100),
        this.isMediaVisible(e) && (t += 40),
        (e.currentSrc || e.src) && (t += 20),
        e.readyState >= 2 && (t += 10),
        o && (t += Math.min((o.width * o.height) / 1e4, 25)),
        t
      );
    }
    isMediaVisible(e) {
      if (!e?.isConnected || !e.getBoundingClientRect) return !1;
      let t = window.getComputedStyle(e),
        o = e.getBoundingClientRect();
      return !(
        t.display === "none" ||
        t.visibility === "hidden" ||
        t.opacity === "0" ||
        o.width <= 0 ||
        o.height <= 0
      );
    }
    executeAction(e, t, o, i) {
      if (e.startsWith("chapterSkip")) {
        (window.VSC.logger.debug(`Chapter skip to ${(t * 100).toFixed(0)}%`),
          this.jumpToPercent(o, t));
        return;
      }
      switch (e) {
        case "rewind":
          (window.VSC.logger.debug("Rewind"), this.seek(o, -t));
          break;
        case "advance":
          (window.VSC.logger.debug("Fast forward"), this.seek(o, t));
          break;
        case "faster": {
          (window.VSC.logger.debug("Increase speed"),
            this.adjustSpeed(o, t, { relative: !0 }));
          break;
        }
        case "slower": {
          (window.VSC.logger.debug("Decrease speed"),
            this.adjustSpeed(o, -t, { relative: !0 }));
          break;
        }
        case "reset":
          (window.VSC.logger.debug("Reset speed"), this.resetSpeed(o, t));
          break;
        case "display": {
          window.VSC.logger.debug("Display action triggered");
          let n = o.vsc.div;
          if (!n) {
            window.VSC.logger.error("No controller found for video");
            return;
          }
          let s = n.classList.contains("vsc-hidden");
          (n.flashTimer !== void 0 &&
            (clearTimeout(n.flashTimer), (n.flashTimer = void 0)),
            n.classList.add("vsc-manual"),
            s
              ? (n.classList.remove("vsc-hidden"), n.classList.add("vsc-show"))
              : (n.classList.add("vsc-hidden"), n.classList.remove("vsc-show")),
            o.vsc?.updateVisibility());
          break;
        }
        case "blink":
          (window.VSC.logger.debug("Showing controller momentarily"),
            this.flashController(o.vsc.div, t));
          break;
        case "drag":
          window.VSC.DragHandler.handleDrag(o, i);
          break;
        case "pin":
          (window.VSC.logger.debug("Toggle pinned indicator"),
            o.vsc?.togglePinned());
          break;
        case "pause":
          this.pause(o);
          break;
        case "resetSettings":
          this.resetSettings();
          break;
        case "muted":
          this.muted(o);
          break;
        case "louder":
          this.volumeUp(o, t);
          break;
        case "softer":
          this.volumeDown(o, t);
          break;
        case "ADJUST_VOLUME":
          (window.VSC.logger.info("Adjusting volume by:", t),
            this.adjustVolume(o, t, { relative: !0 }));
          break;
        case "RESET_VOLUME":
          (window.VSC.logger.info("Resetting volume"), this.resetVolume(o));
          break;
        case "mark":
          this.setMark(o);
          break;
        case "jump":
          this.jumpToMark(o);
          break;
        case "SET_SPEED":
          (window.VSC.logger.info("Setting speed to:", t),
            this.adjustSpeed(o, t, { source: "internal" }));
          break;
        case "ADJUST_SPEED":
          (window.VSC.logger.info("Adjusting speed by:", t),
            this.adjustSpeed(o, t, { relative: !0, source: "internal" }));
          break;
        case "RESET_SPEED": {
          window.VSC.logger.info("Resetting speed");
          this.adjustSpeed(o, 1, { source: "internal" });
          break;
        }
        default:
          window.VSC.logger.warn(`Unknown action: ${e}`);
      }
    }
    seek(e, t) {
      return window.VSC.logger.withContext(e, () => {
        if (!e || typeof e.currentTime != "number") {
          window.VSC.logger.warn("seek called without media element");
          return !1;
        }
        let o = Number(t);
        if (!Number.isFinite(o) || o === 0) {
          window.VSC.logger.warn(`seek called with invalid offset: ${t}`);
          return !1;
        }
        let i = this.computeSeekTarget(e, o),
          n = this.applyNativeSeek(e, i);
        if (n) {
          (window.VSC.logger.debug(`Seeked media to ${i.toFixed(2)}s`),
            e.vsc?.div && this.flashController(e.vsc.div));
          return !0;
        }
        try {
          let s = window.VSC.siteHandlerManager.handleSeek(e, o);
          return (
            s && window.VSC.logger.debug(`Seek delegated to site handler by ${o}s`),
            !!s
          );
        } catch (s) {
          return (
            window.VSC.logger.error(`Seek failed: ${s.message}`),
            !1
          );
        }
      });
    }
    jumpToPercent(e, t) {
      return window.VSC.logger.withContext(e, () => {
        if (!e || typeof e.currentTime != "number") {
          window.VSC.logger.warn("jumpToPercent called without media element");
          return !1;
        }
        let o = Number(t);
        if (!Number.isFinite(o)) {
          window.VSC.logger.warn(`jumpToPercent called with invalid percent: ${t}`);
          return !1;
        }
        o = Math.min(Math.max(o, 0), 1);
        let i = this.getSeekBounds(e),
          n = i.max - i.min;
        if (!Number.isFinite(i.min) || !Number.isFinite(i.max) || n < 0) {
          window.VSC.logger.warn("Unable to determine media duration for chapter skip");
          return !1;
        }
        let s = i.min + n * o,
          a = this.applyNativeSeek(e, s);
        return (
          a &&
            (window.VSC.logger.debug(`Seeked media to ${s.toFixed(2)}s via chapter skip`),
            e.vsc?.div && this.flashController(e.vsc.div)),
          a
        );
      });
    }
    computeSeekTarget(e, t) {
      let o = Number.isFinite(e.currentTime) ? e.currentTime : 0,
        i = this.getSeekBounds(e),
        n = o + t;
      return (
        Number.isFinite(i.min) && (n = Math.max(i.min, n)),
        Number.isFinite(i.max) && (n = Math.min(i.max, n)),
        Number.isFinite(n) ? n : o
      );
    }
    getSeekBounds(e) {
      let t = 0,
        o = Number.isFinite(e.duration) ? e.duration : Number.POSITIVE_INFINITY;
      if (e.seekable && e.seekable.length > 0)
        try {
          ((t = e.seekable.start(0)),
            (o = e.seekable.end(e.seekable.length - 1)));
        } catch {}
      return { min: t, max: o };
    }
    applyNativeSeek(e, t) {
      try {
        return (
          typeof e.fastSeek == "function" && Math.abs(t - e.currentTime) > 1
            ? e.fastSeek(t)
            : (e.currentTime = t),
          !0
        );
      } catch {
        return !1;
      }
    }
    pause(e) {
      e.paused
        ? (window.VSC.logger.debug("Resuming video from pause shortcut"),
          window.VSC.AudioGainManager.ensureState(e)?.pausedByShortcut &&
            (this.seek(e, -1),
            (window.VSC.AudioGainManager.ensureState(e).pausedByShortcut = !1)),
          e.play())
        : (window.VSC.logger.debug("Pausing video"),
          (window.VSC.AudioGainManager.ensureState(e).pausedByShortcut = !0),
          e.pause());
    }
    cloneDefaultSettings() {
      let e = window.VSC.Constants.DEFAULT_SETTINGS;
      return typeof structuredClone == "function"
        ? structuredClone(e)
        : JSON.parse(JSON.stringify(e));
    }
    resetSettings() {
      let e = this.cloneDefaultSettings();
      (e.schemaVersion = window.VSC.Constants.DEFAULT_SETTINGS.schemaVersion),
        window.VSC.logger.info("Resetting settings to defaults"),
        window.VSC.StorageManager.clear()
          .then(() => window.VSC.videoSpeedConfig.save(e))
          .then((t) => {
            if (!t) throw new Error("failed to save default settings");
            window.VSC.logger.info("Settings reset to defaults");
            window.setTimeout(() => {
              window.VSC_controller?.initialized &&
                (window.VSC_controller.teardown(),
                window.VSC_controller.initialize().catch((o) => {
                  window.VSC.logger.error(
                    `Reinitialization after settings reset failed: ${o.message}`,
                  );
                }));
            }, 0);
          })
          .catch((t) => {
            window.VSC.logger.error(`Failed to reset settings: ${t.message}`);
          });
    }
    resetSpeed(e, t) {
      this.adjustSpeed(e, typeof t == "number" ? t : 1, { source: "internal" });
    }
    muted(e) {
      e.muted = e.muted !== !0;
    }
    volumeUp(e, t) {
      this.adjustVolume(e, t, { relative: !0 });
    }
    volumeDown(e, t) {
      this.adjustVolume(e, -t, { relative: !0 });
    }
    resetVolume(e) {
      this.adjustVolume(e, 1);
    }
    adjustVolume(e, t, o = {}) {
      let { relative: i = !1 } = o,
        n = window.VSC.AudioGainManager.getVolume(e),
        s = i ? n + t : t,
        a = window.VSC.AudioGainManager.setVolume(e, s);
      (window.VSC.logger.debug(`Applied output volume ${a}`),
        e.vsc?.div && this.flashController(e.vsc.div));
    }
    setMark(e) {
      (window.VSC.logger.debug("Adding marker"), (e.vsc.mark = e.currentTime));
    }
    jumpToMark(e) {
      if (
        e.vsc.mark === null ||
        e.vsc.mark === void 0 ||
        typeof e.vsc.mark != "number"
      )
        return;
      let t = e.currentTime;
      e.vsc.positionBeforeJump !== null && Math.abs(t - e.vsc.mark) < 0.05
        ? (window.VSC.logger.debug("Jumping back to pre-marker position"),
          (e.currentTime = e.vsc.positionBeforeJump),
          (e.vsc.positionBeforeJump = null))
        : (window.VSC.logger.debug("Jumping to marker"),
          (e.vsc.positionBeforeJump = t),
          (e.currentTime = e.vsc.mark));
    }
    flashController(e, t) {
      if (
        e.classList.contains("vsc-manual") &&
        e.classList.contains("vsc-hidden")
      ) {
        window.VSC.logger.debug(
          "flashController skipped: user manually hid controller",
        );
        return;
      }
      if (
        this.config.settings.startHidden &&
        !e.classList.contains("vsc-manual")
      ) {
        window.VSC.logger.debug(
          "flashController skipped: startHidden and no user interaction",
        );
        return;
      }
      let o = this.isAudioController(e);
      (e.flashTimer !== void 0 &&
        (clearTimeout(e.flashTimer), (e.flashTimer = void 0)),
        e.classList.add("vsc-show"),
        window.VSC.logger.debug(
          "Showing controller temporarily with vsc-show class",
        ),
        o
          ? window.VSC.logger.debug(
              "Audio controller flash - keeping vsc-show class",
            )
          : (e.flashTimer = setTimeout(() => {
              (e.classList.remove("vsc-show"),
                (e.flashTimer = void 0),
                window.VSC.logger.debug(
                  "Removing vsc-show class after flash timeout",
                ));
            }, t || 2e3)));
    }
    isAudioController(e) {
      let t = window.VSC.stateManager
        ? window.VSC.stateManager.getControlledElements()
        : [];
      for (let o of t)
        if (o.vsc && o.vsc.div === e) return o.tagName === "AUDIO";
      return !1;
    }
    adjustSpeed(e, t, o = {}) {
      return window.VSC.logger.withContext(e, () => {
        if (!e) {
          window.VSC.logger.warn("adjustSpeed called without media element");
          return;
        }
        if (typeof t != "number" || isNaN(t)) {
          window.VSC.logger.warn("adjustSpeed called with invalid value:", t);
          return;
        }
        return this._adjustSpeedInternal(e, t, o);
      });
    }
    _adjustSpeedInternal(e, t, o) {
      let { relative: i = !1, source: n = "internal" } = o,
        s;
      if (i) {
        let a = e.playbackRate < 0.1 ? 0 : e.playbackRate;
        ((s = a + t),
          ((a > 1 && s < 1) || (a < 1 && s > 1)) && (s = 1),
          window.VSC.logger.debug(
            `Relative speed calculation: currentSpeed=${a} + ${t} = ${s}`,
          ));
      } else ((s = t), window.VSC.logger.debug(`Absolute speed set: ${s}`));
      ((s = Math.min(
        Math.max(s, window.VSC.Constants.SPEED_LIMITS.MIN),
        window.VSC.Constants.SPEED_LIMITS.MAX,
      )),
        (s = Number(s.toFixed(2))),
        this.setSpeed(e, s, n));
    }
    setSpeed(e, t, o = "internal") {
      let i = t.toFixed(2),
        n = Number(i);
      (e.vsc && (e.vsc.authoritativeSpeed = n),
        this.eventManager && this.eventManager.refreshCoolDown(),
        window.VSC.siteHandlerManager.handleSpeedChange(e, n),
        e.dispatchEvent(
          new CustomEvent("ratechange", {
            bubbles: !0,
            composed: !0,
            detail: { origin: "videoSpeed", speed: i, source: o },
          }),
        ));
      let s = e.vsc?.speedIndicator;
      s && (s.textContent = n.toFixed(2));
      (e.vsc?.updateVisibility(),
        e.vsc?.div && n !== 1 && this.flashController(e.vsc.div));
    }
  };
  window.VSC.ActionHandler = v;
  window.VSC = window.VSC || {};
  var E = class {
    constructor(e, t, o, i, n = !1) {
      if (e.vsc) return e.vsc;
      ((this.video = e),
        (this.parent = e.parentElement || t),
        (this.config = o),
        (this.actionHandler = i),
        (this.controlsManager = new window.VSC.ControlsManager(i, o)),
        (this.shouldStartHidden = n),
        (this.controllerId = this.generateControllerId(e)),
        (this.speedBeforeReset = null),
        (this.positionBeforeJump = null),
        (this.authoritativeSpeed = 1),
        (this.audioGainState = null),
        (this.audioGainUnavailable = !1),
        (this.isPinned = !1),
        (e.vsc = this),
        window.VSC.stateManager
          ? window.VSC.stateManager.registerController(this)
          : window.VSC.logger.error(
              "StateManager not available during VideoController initialization",
            ),
        this.initializeSpeed(),
        (this.div = this.initializeControls()),
        this.setupEventHandlers(),
        this.setupMutationObserver(),
        window.VSC.logger.info(
          "VideoController initialized for video element",
        ));
    }
    initializeSpeed() {
      let e = this.getTargetSpeed();
      if (
        (window.VSC.logger.debug(`Setting initial playbackRate to: ${e}`),
        !(!this.actionHandler || e === this.video.playbackRate))
      )
        if (this.video.readyState < 1) {
          window.VSC.logger.debug(
            "Deferring initializeSpeed until loadedmetadata",
          );
          let t = () => {
            (this.video.removeEventListener("loadedmetadata", t),
              e !== this.video.playbackRate &&
                this.actionHandler.adjustSpeed(this.video, e, {
                  source: "init",
                }));
          };
          this.video.addEventListener("loadedmetadata", t);
        } else
          this.actionHandler.adjustSpeed(this.video, e, { source: "init" });
    }
    getTargetSpeed() {
      return this.authoritativeSpeed ?? 1;
    }
    initializeControls() {
      window.VSC.logger.debug("initializeControls Begin");
      let e = this.video.ownerDocument,
        t = window.VSC.Constants.formatSpeed(this.video.playbackRate);
      window.VSC.logger.debug(`Speed variable set to: ${t}`);
      let o = e.createElement("vsc-controller"),
        i = ["vsc-controller"];
      (!this.video.currentSrc &&
        !this.video.src &&
        this.video.readyState < 2 &&
        i.push("vsc-nosource"),
        (this.config.settings.startHidden || this.shouldStartHidden) &&
          (i.push("vsc-hidden"),
          window.VSC.logger.debug("Starting controller hidden")),
        (o.className = i.join(" ")),
        (o.style.cssText = "z-index: 9999999 !important;"));
      let n = window.VSC.ShadowDOMManager.createShadowDOM(o, {
        top: "0px",
        left: "0px",
        speed: t,
        opacity: this.config.settings.controllerOpacity,
        buttonSize: this.config.settings.controllerButtonSize,
      });
      if (
        (this.controlsManager.setupControlEvents(n, this.video),
        (this.speedIndicator =
          window.VSC.ShadowDOMManager.getSpeedIndicator(n)),
        (this.pinButton = window.VSC.ShadowDOMManager.getPinButton(n)),
        this.insertIntoDOM(e, o),
        getComputedStyle(o).position !== "relative")
      ) {
        let a = window.VSC.ShadowDOMManager.calculatePosition(this.video),
          l = window.VSC.ShadowDOMManager.getController(n);
        ((l.style.top = a.top), (l.style.left = a.left));
      }
      return (window.VSC.logger.debug("initializeControls End"), o);
    }
    insertIntoDOM(e, t) {
      let o = e.createDocumentFragment();
      o.appendChild(t);
      let i = window.VSC.siteHandlerManager.getControllerPosition(
        this.parent,
        this.video,
      );
      switch (i.insertionMethod) {
        case "beforeParent":
          i.insertionPoint.parentElement.insertBefore(o, i.insertionPoint);
          break;
        case "afterParent":
          i.insertionPoint.parentElement.insertBefore(
            o,
            i.insertionPoint.nextSibling,
          );
          break;
        default:
          i.insertionPoint.insertBefore(o, i.insertionPoint.firstChild);
          break;
      }
      window.VSC.logger.debug(
        `Controller inserted using ${i.insertionMethod} method`,
      );
    }
    setupEventHandlers() {
      let e = (t) => {
        let o = this.getTargetSpeed(t.target);
        Math.abs(t.target.playbackRate - o) > 0.01 &&
          (window.VSC.logger.info(
            `Media event ${t.type}: restoring speed to ${o}`,
          ),
          this.actionHandler.adjustSpeed(t.target, o, { source: "internal" }));
      };
      ((this.handlePlay = e.bind(this)),
        (this.handleSeek = (t) => {
          t.target.readyState < 2 || e.call(this, t);
        }),
        this.video.addEventListener("play", this.handlePlay),
        this.video.addEventListener("seeked", this.handleSeek),
        window.VSC.logger.debug(
          "Added essential media event handlers: play, seeked",
        ));
    }
    setupMutationObserver() {
      ((this.targetObserver = new MutationObserver((e) => {
        e.forEach((t) => {
          if (
            t.type === "attributes" &&
            (t.attributeName === "src" || t.attributeName === "currentSrc")
          ) {
            window.VSC.logger.debug("Mutation of A/V element detected");
            let o = this.div;
            !t.target.src && !t.target.currentSrc
              ? o.classList.add("vsc-nosource")
              : o.classList.remove("vsc-nosource");
          }
        });
      })),
        this.targetObserver.observe(this.video, {
          attributeFilter: ["src", "currentSrc"],
        }));
    }
    remove() {
      (window.VSC.logger.debug("Removing VideoController"),
        this.div && this.div.parentNode && this.div.remove(),
        this.handlePlay &&
          this.video.removeEventListener("play", this.handlePlay),
        this.handleSeek &&
          this.video.removeEventListener("seeked", this.handleSeek),
        this.targetObserver && this.targetObserver.disconnect(),
        window.VSC.stateManager &&
          window.VSC.stateManager.removeController(this.controllerId),
        delete this.video.vsc,
        window.VSC.logger.debug("VideoController removed successfully"));
    }
    generateControllerId(e) {
      let t = Date.now(),
        o = e.currentSrc || e.src || "no-src",
        i = e.tagName.toLowerCase(),
        n = o
          .split("")
          .reduce((a, l) => ((a = (a << 5) - a + l.charCodeAt(0)), a & a), 0),
        s = Math.floor(Math.random() * 1e3);
      return `${i}-${Math.abs(n)}-${t}-${s}`;
    }
    isVideoVisible() {
      if (!this.video.isConnected) return !1;
      let e = window.getComputedStyle(this.video);
      if (
        e.display === "none" ||
        e.visibility === "hidden" ||
        e.opacity === "0"
      )
        return !1;
      let t = this.video.getBoundingClientRect();
      return !(t.width === 0 || t.height === 0);
    }
    updateVisibility() {
      let e =
          this.video.tagName === "AUDIO"
            ? this.config.settings.audioBoolean
            : this.isVideoVisible(),
        t = Math.abs((this.authoritativeSpeed ?? this.video.playbackRate) - 1) <=
          0.01,
        o =
          this.div.classList.contains("vsc-manual") &&
          this.div.classList.contains("vsc-hidden"),
        i = this.div.classList.contains("vsc-show"),
        n = e && !o && (this.isPinned || !t || i);
      (this.div.classList.toggle("vsc-hidden", !n),
        this.div.classList.toggle("vsc-pinned", this.isPinned),
        this.pinButton &&
          ((this.pinButton.title = this.isPinned ? "Unpin indicator" : "Pin indicator"),
          this.pinButton.setAttribute("aria-pressed", this.isPinned ? "true" : "false")));
    }
    togglePinned() {
      ((this.isPinned = !this.isPinned),
        this.div.classList.add("vsc-manual"),
        this.isPinned && this.div.classList.remove("vsc-hidden"),
        this.updateVisibility());
    }
  };
  window.VSC.VideoController = E;
  window.VSC = window.VSC || {};
  var M = class {
    constructor(e, t) {
      ((this.actionHandler = e), (this.config = t));
    }
    setupControlEvents(e, t) {
      (this.setupDragHandler(e),
        this.setupButtonHandlers(e),
        this.setupClickPrevention(e));
    }
    setupDragHandler(e) {
      let t = e.querySelector(".draggable");
      (t.addEventListener(
        "pointerdown",
        (o) => {
          (this.actionHandler.runAction(o.currentTarget.dataset.action, !1, o),
            o.stopPropagation(),
            o.preventDefault());
        },
        !0,
      ));
    }
    setupButtonHandlers(e) {
      e.querySelectorAll("button").forEach((t) => {
        (t.addEventListener(
          "click",
          (o) => {
            let i = o.currentTarget.dataset.action;
            (this.actionHandler.runAction(
              i,
              this.config.getKeyBinding(i),
              o,
            ),
              o.preventDefault(),
              o.stopPropagation());
          },
          !0,
        ),
          t.addEventListener(
            "touchstart",
            (o) => {
              o.stopPropagation();
            },
            !0,
          ));
      });
    }
    setupClickPrevention(e) {
      let t = e.querySelector("#controller");
      (t.addEventListener("click", (o) => o.stopPropagation(), !1),
        t.addEventListener("mousedown", (o) => o.stopPropagation(), !1));
    }
  };
  window.VSC.ControlsManager = M;
  window.VSC = window.VSC || {};
  var k = class {
    static handleDrag(e, t) {
      let i = e.vsc.div.shadowRoot.querySelector("#controller");
      (e.classList.add("vcs-dragging"), i.classList.add("dragging"));
      let n = [t.clientX, t.clientY],
        s = [parseInt(i.style.left) || 0, parseInt(i.style.top) || 0],
        a = t.target;
      t.pointerId !== void 0 && a.setPointerCapture(t.pointerId);
      let l = (g) => {
          let c = g.clientX - n[0],
            u = g.clientY - n[1];
          ((i.style.left = `${s[0] + c}px`), (i.style.top = `${s[1] + u}px`));
        },
        d = () => {
          (a.removeEventListener("pointermove", l),
            a.removeEventListener("pointerup", d),
            a.removeEventListener("pointercancel", d),
            a.removeEventListener("mousemove", l),
            a.removeEventListener("mouseup", d),
            i.classList.remove("dragging"),
            e.classList.remove("vcs-dragging"),
            window.VSC.logger.debug("Drag operation completed"));
        };
      (t.pointerId !== void 0
        ? (a.addEventListener("pointermove", l),
          a.addEventListener("pointerup", d),
          a.addEventListener("pointercancel", d))
        : (a.addEventListener("mousemove", l),
          a.addEventListener("mouseup", d)),
        window.VSC.logger.debug("Drag operation started"));
    }
  };
  window.VSC.DragHandler = k;
  window.VSC = window.VSC || {};
  var D = class {
    static createShadowDOM(e, t = {}) {
      let {
          top: o = "0px",
          left: i = "0px",
          speed: n = "1.00",
          opacity: s = 0.3,
          buttonSize: a = 14,
        } = t,
        l = e.attachShadow({ mode: "open" }),
        d = document.createElement("style");
      ((d.textContent = `
      * {
        line-height: 1.8em;
        font-family: sans-serif;
        font-size: 13px;
      }
      
      :host(:hover) #controls {
        display: inline-block;
      }
      
      /* Hide shadow DOM content for different hiding scenarios */
      :host(.vsc-hidden) #controller,
      :host(.vsc-nosource) #controller {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }

      /* YouTube autohide \u2014 fade with player controls.
         :host-context() matches when any ancestor of <vsc-controller> has the
         class, so no JS MutationObserver forwarding is needed. */
      :host-context(.ytp-autohide) #controller {
        visibility: hidden !important;
        opacity: 0 !important;
        transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Override hiding for manual controllers (unless explicitly hidden) */
      :host(.vsc-manual:not(.vsc-hidden)) #controller {
        display: block !important;
        visibility: visible !important;
        opacity: ${s} !important;
      }

      /* Show shadow DOM content when host has vsc-show class (highest priority) */
      :host(.vsc-show) #controller {
        display: block !important;
        visibility: visible !important;
        opacity: ${s} !important;
      }
      
      #controller {
        position: absolute;
        top: 0;
        left: 0;
        background: black;
        color: white;
        border-radius: 6px;
        padding: 4px;
        margin: 10px 10px 10px 15px;
        cursor: default;
        z-index: 9999999;
        white-space: nowrap;
      }
      
      #controller:hover {
        opacity: 0.7;
      }
      
      #controller:hover>.draggable {
        margin-right: 0.8em;
      }
      
      #controls {
        display: none;
        vertical-align: middle;
      }
      
      #controller.dragging {
        cursor: -webkit-grabbing;
        opacity: 0.7;
      }
      
      #controller.dragging #controls {
        display: inline-block;
      }
      
      .draggable {
        cursor: -webkit-grab;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.8em;
        height: 1.4em;
        text-align: center;
        vertical-align: middle;
        box-sizing: border-box;
        touch-action: none;
      }
      
      .draggable:active {
        cursor: -webkit-grabbing;
      }
      
      button {
        opacity: 1;
        cursor: pointer;
        color: black;
        background: white;
        font-weight: normal;
        border-radius: 5px;
        padding: 1px 5px 3px 5px;
        font-size: inherit;
        line-height: inherit;
        border: 0px solid white;
        font-family: "Lucida Console", Monaco, monospace;
        margin: 0px 2px 2px 2px;
        transition: background 0.2s, color 0.2s;
      }
      
      button:focus {
        outline: 0;
      }
      
      button:hover {
        opacity: 1;
        background: #2196f3;
        color: #ffffff;
      }
      
      button:active {
        background: #2196f3;
        color: #ffffff;
        font-weight: bold;
      }
      
      button.rw {
        opacity: 0.65;
      }
    `),
        l.appendChild(d));
      let g = document.createElement("div");
      ((g.id = "controller"),
        (g.style.cssText = `top:${o}; left:${i}; opacity:${s};`));
      let c = document.createElement("span");
      (c.setAttribute("data-action", "drag"),
        (c.className = "draggable"),
        (c.style.cssText = `font-size: ${a}px;`),
        (c.textContent = n),
        g.appendChild(c));
      let u = document.createElement("button");
      return (
        (u.className = "pin"),
        u.setAttribute("data-action", "pin"),
        u.setAttribute("type", "button"),
        u.setAttribute("title", "Pin indicator"),
        (u.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3l6 6-2 2-2-2-4 4v5l-2 3-2-3v-5L5 9 3 11 1 9l6-6z"/></svg>`),
        g.appendChild(u),
        l.appendChild(g),
        window.VSC.logger.debug("Shadow DOM created for video controller"),
        l
      );
    }
    static getController(e) {
      return e.querySelector("#controller");
    }
    static getControls(e) {
      return e.querySelector("#controls");
    }
    static getSpeedIndicator(e) {
      return e.querySelector(".draggable");
    }
    static getPinButton(e) {
      return e.querySelector(".pin");
    }
    static getButtons(e) {
      return e.querySelectorAll("button");
    }
    static updateSpeedDisplay(e, t) {
      let o = this.getSpeedIndicator(e);
      o && (o.textContent = window.VSC.Constants.formatSpeed(t));
    }
    static calculatePosition(e) {
      let t = e.getBoundingClientRect(),
        o = e.offsetParent?.getBoundingClientRect(),
        i = `${Math.max(t.top - (o?.top || 0), 0)}px`,
        n = `${Math.max(t.left - (o?.left || 0), 0)}px`;
      return { top: i, left: n };
    }
  };
  window.VSC.ShadowDOMManager = D;
  window.VSC = window.VSC || {};
  var L = class {
    constructor() {
      this.hostname = location.hostname;
    }
    static matches() {
      return !1;
    }
    getControllerPosition(e, t) {
      return {
        insertionPoint: e,
        insertionMethod: "firstChild",
        targetParent: e,
      };
    }
    handleSpeedChange(e, t) {
      e.playbackRate = t;
    }
    handleSeek(e, t) {
      if (e.currentTime !== void 0 && e.duration) {
        let o = Math.max(0, Math.min(e.duration, e.currentTime + t));
        e.currentTime = o;
      } else e.currentTime += t;
      return !0;
    }
    initialize(e) {
      window.VSC.logger.debug(
        `Initializing ${this.constructor.name} for ${this.hostname}`,
      );
    }
    cleanup() {
      window.VSC.logger.debug(`Cleaning up ${this.constructor.name}`);
    }
    shouldIgnoreVideo(e) {
      return !1;
    }
    getVideoContainerSelectors() {
      return [];
    }
    detectSpecialVideos(e) {
      return [];
    }
  };
  window.VSC.BaseSiteHandler = L;
  window.VSC = window.VSC || {};
  var T = class extends window.VSC.BaseSiteHandler {
    static matches() {
      return location.hostname === "www.netflix.com";
    }
    getControllerPosition(e, t) {
      return {
        insertionPoint: e.parentElement,
        insertionMethod: "beforeParent",
        targetParent: e.parentElement,
      };
    }
    handleSeek(e, t) {
      try {
        return (
          window.postMessage(
            { action: "videospeed-seek", seekMs: t * 1e3 },
            "https://www.netflix.com",
          ),
          window.VSC.logger.debug(`Netflix seek: ${t} seconds`),
          !0
        );
      } catch (o) {
        return (
          window.VSC.logger.error(`Netflix seek failed: ${o.message}`),
          (e.currentTime += t),
          !0
        );
      }
    }
    initialize(e) {
      (super.initialize(e),
        window.VSC.logger.debug(
          "Netflix handler initialized - script injection handled by content script",
        ));
    }
    shouldIgnoreVideo(e) {
      return (
        e.classList.contains("preview-video") ||
        e.parentElement?.classList.contains("billboard-row")
      );
    }
    getVideoContainerSelectors() {
      return [".watch-video", ".nfp-container", "#netflix-player"];
    }
  };
  window.VSC.NetflixHandler = T;
  window.VSC = window.VSC || {};
  var A = class extends window.VSC.BaseSiteHandler {
    static matches() {
      return location.hostname === "www.youtube.com";
    }
    getControllerPosition(e, t) {
      let o = e.parentElement;
      if (document.getElementById("player-controls")) {
        let i = o.parentElement;
        i && (o = i);
      }
      return {
        insertionPoint: o,
        insertionMethod: "firstChild",
        targetParent: o,
      };
    }
    shouldIgnoreVideo(e) {
      return (
        e.classList.contains("video-thumbnail") ||
        e.parentElement?.classList.contains("ytp-ad-player-overlay")
      );
    }
    getVideoContainerSelectors() {
      return [".html5-video-player", "#movie_player", ".ytp-player-content"];
    }
    detectSpecialVideos(e) {
      let t = [];
      try {
        e.querySelectorAll('iframe[src*="youtube.com"]').forEach((i) => {
          try {
            let n = i.contentDocument;
            if (n) {
              let s = n.querySelectorAll("video");
              t.push(...Array.from(s));
            }
          } catch {}
        });
      } catch (o) {
        window.VSC.logger.debug(
          `Could not access YouTube iframe videos: ${o.message}`,
        );
      }
      return t;
    }
  };
  window.VSC.YouTubeHandler = A;
  window.VSC = window.VSC || {};
  var _ = class extends window.VSC.BaseSiteHandler {
    static matches() {
      return location.hostname === "www.facebook.com";
    }
    getControllerPosition(e, t) {
      let o;
      try {
        o =
          e.parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement;
      } catch {
        (window.VSC.logger.warn(
          "Facebook DOM structure changed, using fallback positioning",
        ),
          (o = e.parentElement));
      }
      return {
        insertionPoint: o,
        insertionMethod: "firstChild",
        targetParent: o,
      };
    }
    initialize(e) {
      (super.initialize(e), this.setupFacebookObserver(e));
    }
    setupFacebookObserver(e) {
      let t = new MutationObserver((o) => {
        o.forEach((i) => {
          i.type === "childList" &&
            i.addedNodes.length > 0 &&
            i.addedNodes.forEach((n) => {
              if (n.nodeType === Node.ELEMENT_NODE) {
                let s = n.querySelectorAll && n.querySelectorAll("video");
                s &&
                  s.length > 0 &&
                  (window.VSC.logger.debug(
                    `Facebook: Found ${s.length} new videos`,
                  ),
                  this.onNewVideosDetected(Array.from(s)));
              }
            });
        });
      });
      (t.observe(e.body, { childList: !0, subtree: !0 }),
        (this.facebookObserver = t),
        window.VSC.logger.debug("Facebook dynamic content observer set up"));
    }
    onNewVideosDetected(e) {
      window.VSC.logger.debug(`Facebook: ${e.length} new videos detected`);
    }
    shouldIgnoreVideo(e) {
      return (
        e.closest("[data-story-id]") !== null ||
        e.closest(".story-bucket-container") !== null ||
        e.getAttribute("data-video-width") === "0"
      );
    }
    getVideoContainerSelectors() {
      return [
        "[data-video-id]",
        ".video-container",
        ".fbStoryVideoContainer",
        '[role="main"] video',
      ];
    }
    cleanup() {
      (super.cleanup(),
        this.facebookObserver &&
          (this.facebookObserver.disconnect(), (this.facebookObserver = null)));
    }
  };
  window.VSC.FacebookHandler = _;
  window.VSC = window.VSC || {};
  var O = class extends window.VSC.BaseSiteHandler {
    static matches() {
      return (
        location.hostname === "www.amazon.com" ||
        location.hostname === "www.primevideo.com" ||
        location.hostname.includes("amazon.") ||
        location.hostname.includes("primevideo.")
      );
    }
    getControllerPosition(e, t) {
      return t.classList.contains("vjs-tech")
        ? super.getControllerPosition(e, t)
        : {
            insertionPoint: e.parentElement,
            insertionMethod: "beforeParent",
            targetParent: e.parentElement,
          };
    }
    shouldIgnoreVideo(e) {
      if (e.readyState < 2) return !1;
      let t = e.getBoundingClientRect();
      return t.width < 200 || t.height < 100;
    }
    getVideoContainerSelectors() {
      return [
        ".dv-player-container",
        ".webPlayerContainer",
        '[data-testid="video-player"]',
      ];
    }
  };
  window.VSC.AmazonHandler = O;
  window.VSC = window.VSC || {};
  var N = class extends window.VSC.BaseSiteHandler {
    static matches() {
      return location.hostname === "tv.apple.com";
    }
    getControllerPosition(e, t) {
      return {
        insertionPoint: e.parentNode,
        insertionMethod: "firstChild",
        targetParent: e.parentNode,
      };
    }
    getVideoContainerSelectors() {
      return [
        "apple-tv-plus-player",
        '[data-testid="player"]',
        ".video-container",
      ];
    }
    detectSpecialVideos(e) {
      let t = e.querySelector("apple-tv-plus-player");
      if (t && t.shadowRoot) {
        let o = t.shadowRoot.querySelectorAll("video");
        return Array.from(o);
      }
      return [];
    }
  };
  window.VSC.AppleHandler = N;
  window.VSC = window.VSC || {};
  var R = class extends window.VSC.BaseSiteHandler {
    static matches() {
      return location.hostname.includes("dailymotion.com");
    }
    getControllerPosition(e, t) {
      let o = e.parentElement;
      return {
        insertionPoint: o || e,
        insertionMethod: "firstChild",
        targetParent: o || e,
      };
    }
  };
  window.VSC.DailymotionHandler = R;
  window.VSC = window.VSC || {};
  var I = class {
    constructor() {
      ((this.currentHandler = null),
        (this.availableHandlers = [
          window.VSC.NetflixHandler,
          window.VSC.YouTubeHandler,
          window.VSC.FacebookHandler,
          window.VSC.AmazonHandler,
          window.VSC.AppleHandler,
          window.VSC.DailymotionHandler,
        ]));
    }
    getCurrentHandler() {
      return (
        this.currentHandler || (this.currentHandler = this.detectHandler()),
        this.currentHandler
      );
    }
    detectHandler() {
      for (let e of this.availableHandlers)
        if (e.matches())
          return (
            window.VSC.logger.info(`Using ${e.name} for ${location.hostname}`),
            new e()
          );
      return (
        window.VSC.logger.debug(
          `Using BaseSiteHandler for ${location.hostname}`,
        ),
        new window.VSC.BaseSiteHandler()
      );
    }
    initialize(e) {
      this.getCurrentHandler().initialize(e);
    }
    getControllerPosition(e, t) {
      return this.getCurrentHandler().getControllerPosition(e, t);
    }
    handleSpeedChange(e, t) {
      this.getCurrentHandler().handleSpeedChange(e, t);
    }
    handleSeek(e, t) {
      return this.getCurrentHandler().handleSeek(e, t);
    }
    shouldIgnoreVideo(e) {
      return this.getCurrentHandler().shouldIgnoreVideo(e)
        ? !0
        : e.tagName === "VIDEO" && e.loop && e.muted && !e.controls
          ? (window.VSC.logger.debug(
              "Video ignored: gif-video pattern (loop + muted + no controls)",
            ),
            !0)
          : !1;
    }
    getVideoContainerSelectors() {
      return this.getCurrentHandler().getVideoContainerSelectors();
    }
    detectSpecialVideos(e) {
      return this.getCurrentHandler().detectSpecialVideos(e);
    }
    cleanup() {
      this.currentHandler &&
        (this.currentHandler.cleanup(), (this.currentHandler = null));
    }
    refresh() {
      (this.cleanup(), (this.currentHandler = null));
    }
  };
  window.VSC.siteHandlerManager = new I();
  window.addEventListener(
    "message",
    (r) => {
      if (
        r.origin !== "https://www.netflix.com" ||
        r.data.action !== "videospeed-seek" ||
        !r.data.seekMs
      )
        return;
      let e = window.netflix.appContext.state.playerApp.getAPI().videoPlayer,
        t = e.getAllPlayerSessionIds()[0],
        o = e.getCurrentTimeBySessionId(t);
      e.getVideoPlayerBySessionId(t).seek(o + r.data.seekMs);
    },
    !1,
  );
  var $ = class {
    constructor() {
      ((this.config = null),
        (this.actionHandler = null),
        (this.eventManager = null),
        (this.mutationObserver = null),
        (this.mediaObserver = null),
        (this.initialized = !1));
    }
    async initialize() {
      try {
        if (
          ((this.VideoController = window.VSC.VideoController),
          (this.ActionHandler = window.VSC.ActionHandler),
          (this.EventManager = window.VSC.EventManager),
          (this.logger = window.VSC.logger),
          (this.initializeWhenReady = window.VSC.DomUtils.initializeWhenReady),
          (this.siteHandlerManager = window.VSC.siteHandlerManager),
          (this.VideoMutationObserver = window.VSC.VideoMutationObserver),
          (this.MediaElementObserver = window.VSC.MediaElementObserver),
          (this.MESSAGE_TYPES = window.VSC.Constants.MESSAGE_TYPES),
          this.logger.info("Video Speed Controller starting..."),
          (this.config = window.VSC.videoSpeedConfig),
          await this.config.load(),
          this.config.settings._abort)
        ) {
          this.logger.debug(
            "Extension disabled on this site \u2014 aborting init",
          );
          return;
        }
        this.deferDOMWork(document);
      } catch (e) {
        (this.logger.error(
          `Failed to initialize Video Speed Controller: ${e.message}`,
        ),
          this.logger.error(`Error stack: ${e.stack}`));
      }
    }
    initializeDocument(e) {
      try {
        if (window.VSC.initialized) return;
        ((window.VSC.initialized = !0),
          this.eventManager.setupEventListeners(e),
          this.deferExpensiveOperations(e),
          this.logger.debug("Document initialization completed"));
      } catch (t) {
        this.logger.error(`Failed to initialize document: ${t.message}`);
      }
    }
    deferExpensiveOperations(e) {
      let t = () => {
        try {
          (this.mutationObserver &&
            (this.mutationObserver.start(e),
            this.logger.debug("Mutation observer started for document")),
            this.deferredMediaScan(e));
        } catch (o) {
          this.logger.error(
            `Failed to complete deferred operations: ${o.message}`,
          );
        }
      };
      window.requestIdleCallback ? requestIdleCallback(t) : setTimeout(t, 100);
    }
    deferredMediaScan(e) {
      let t = () => {
        try {
          let o = this.mediaObserver.scanForMediaLight(e);
          (o.forEach((i) => {
            this.onVideoFound(i, i.parentElement || i.parentNode);
          }),
            this.logger.info(
              `Attached controllers to ${o.length} media elements (light scan)`,
            ),
            o.length === 0 && this.scheduleComprehensiveScan(e));
        } catch (o) {
          this.logger.error(`Failed to scan media elements: ${o.message}`);
        }
      };
      window.requestIdleCallback ? requestIdleCallback(t) : setTimeout(t, 200);
    }
    scheduleComprehensiveScan(e) {
      setTimeout(() => {
        try {
          let t = this.mediaObserver.scanAll(e);
          (t.forEach((o) => {
            o.vsc || this.onVideoFound(o, o.parentElement || o.parentNode);
          }),
            this.logger.info(
              `Comprehensive scan found ${t.length} additional media elements`,
            ));
        } catch (t) {
          this.logger.error(`Failed comprehensive media scan: ${t.message}`);
        }
      }, 1e3);
    }
    deferDOMWork(e) {
      let t = () => {
        (this.injectControllerCSS(),
          this.setupCSSLiveUpdates(),
          this.siteHandlerManager.initialize(e),
          (this.eventManager = new this.EventManager(this.config, null)),
          (this.actionHandler = new this.ActionHandler(
            this.config,
            this.eventManager,
          )),
          (this.eventManager.actionHandler = this.actionHandler),
          this.setupObservers(),
          this.initializeWhenReady(e, (o) => {
            this.initializeDocument(o);
          }),
          this.logger.info("Video Speed Controller initialized successfully"),
          (this.initialized = !0));
      };
      window.requestIdleCallback ? requestIdleCallback(t) : setTimeout(t, 0);
    }
    preprocessDomainCSS(e) {
      let t = location.hostname.replace(/^www\./, "");
      return e.replace(/\[style\*='--vsc-domain:\s*"([^"]+)"'\]/g, (o, i) =>
        i === t ? "" : "[data-vsc-never]",
      );
    }
    injectControllerCSS() {
      try {
        if (this._controllerSheet) return;
        let e =
          this.config.settings.controllerCSS ||
          window.VSC.Constants.DEFAULT_CONTROLLER_CSS;
        ((this._controllerSheet = new CSSStyleSheet()),
          this._controllerSheet.replaceSync(this.preprocessDomainCSS(e)),
          (document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            this._controllerSheet,
          ]));
      } catch (e) {
        this.logger.error(`Failed to inject controller CSS: ${e.message}`);
      }
    }
    setupCSSLiveUpdates() {
      document.documentElement.addEventListener("VSC_STORAGE_CHANGED", (e) => {
        e.detail?.controllerCSS?.newValue !== void 0 &&
          this._controllerSheet &&
          this._controllerSheet.replaceSync(
            this.preprocessDomainCSS(e.detail.controllerCSS.newValue),
          );
      });
    }
    setupObservers() {
      ((this.mediaObserver = new this.MediaElementObserver(
        this.config,
        this.siteHandlerManager,
      )),
        (this.mutationObserver = new this.VideoMutationObserver(
          this.config,
          (e, t) => this.onVideoFound(e, t),
          (e) => this.onVideoRemoved(e),
          this.mediaObserver,
        )));
    }
    onVideoFound(e, t) {
      try {
        if (this.mediaObserver && !this.mediaObserver.isValidMediaElement(e)) {
          this.logger.debug(
            "Video element is not valid for controller attachment",
          );
          return;
        }
        if (e.vsc) {
          this.logger.debug("Video already has controller attached");
          return;
        }
        if (e.readyState < 2 && (e.src || e.currentSrc)) {
          (this.logger.debug(
            "Deferring controller until loadeddata (readyState=%d)",
            e.readyState,
          ),
            e.addEventListener("loadeddata", () => this.onVideoFound(e, t), {
              once: !0,
            }));
          return;
        }
        let o = this.mediaObserver
          ? this.mediaObserver.shouldStartHidden(e)
          : !1;
        (this.logger.debug(
          "Attaching controller to new video element",
          o ? "(starting hidden)" : "",
        ),
          (e.vsc = new this.VideoController(
            e,
            t,
            this.config,
            this.actionHandler,
            o,
          )));
      } catch (o) {
        this.logger.error(`Failed to attach controller to video: ${o.message}`);
      }
    }
    teardown() {
      if (!this.initialized) return;
      this.logger.info("Tearing down Video Speed Controller");
      let e = window.VSC.stateManager
        ? window.VSC.stateManager.getAllMediaElements()
        : [];
      for (let t of e) t.vsc && t.vsc.remove();
      (this.mutationObserver &&
        (this.mutationObserver.stop(), (this.mutationObserver = null)),
        this.eventManager &&
          (this.eventManager.cleanup(), (this.eventManager = null)),
        this.siteHandlerManager && this.siteHandlerManager.cleanup(),
        this._controllerSheet &&
          document.adoptedStyleSheets &&
          ((document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
            (t) => t !== this._controllerSheet,
          )),
          (this._controllerSheet = null)),
        (this.actionHandler = null),
        (this.mediaObserver = null),
        (this.initialized = !1),
        (window.VSC.initialized = !1));
    }
    onVideoRemoved(e) {
      try {
        e.vsc &&
          (this.logger.debug("Removing controller from video element"),
          e.vsc.remove());
      } catch (t) {
        this.logger.error(`Failed to remove video controller: ${t.message}`);
      }
    }
  };
  (function () {
    let r = new $();
    if (
      (document.documentElement.addEventListener("VSC_MESSAGE", (e) => {
        let t = e.detail;
        if (typeof t == "object" && t.type && t.type.startsWith("VSC_")) {
          let o = r.actionHandler?.getActionableMediaElements
            ? r.actionHandler.getActionableMediaElements()
            : window.VSC.stateManager
              ? window.VSC.stateManager.getAllMediaElements()
              : window.VSC.DomUtils.findMediaElements(
                  document,
                  r.config?.settings?.audioBoolean,
                );
          switch (t.type) {
            case window.VSC.Constants.MESSAGE_TYPES.SET_SPEED:
              if (t.payload && typeof t.payload.speed == "number") {
                let { MIN: i, MAX: n } = window.VSC.Constants.SPEED_LIMITS,
                  s = Math.min(Math.max(t.payload.speed, i), n);
                (o.forEach((a) => {
                  r.actionHandler
                    ? r.actionHandler.adjustSpeed(a, s)
                    : (a.playbackRate = s);
                }),
                  window.VSC.logger?.debug(
                    `Set speed to ${s} on ${o.length} media elements`,
                  ));
              }
              break;
            case window.VSC.Constants.MESSAGE_TYPES.ADJUST_SPEED:
              if (t.payload && typeof t.payload.delta == "number") {
                let i = t.payload.delta;
                (o.forEach((n) => {
                  if (r.actionHandler)
                    r.actionHandler.adjustSpeed(n, i, { relative: !0 });
                  else {
                    let { MIN: s, MAX: a } = window.VSC.Constants.SPEED_LIMITS,
                      l = Math.min(Math.max(n.playbackRate + i, s), a);
                    n.playbackRate = l;
                  }
                }),
                  window.VSC.logger?.debug(
                    `Adjusted speed by ${i} on ${o.length} media elements`,
                  ));
              }
              break;
            case window.VSC.Constants.MESSAGE_TYPES.RESET_SPEED:
              (o.forEach((i) => {
                r.actionHandler
                  ? r.actionHandler.resetSpeed(i, 1)
                  : (i.playbackRate = 1);
              }),
                window.VSC.logger?.debug(
                  `Reset speed on ${o.length} media elements`,
                ));
              break;
            case window.VSC.Constants.MESSAGE_TYPES.REWIND:
              typeof t.payload?.delta == "number" &&
                r.actionHandler?.runAction("rewind", t.payload.delta, null);
              break;
            case window.VSC.Constants.MESSAGE_TYPES.ADVANCE:
              typeof t.payload?.delta == "number" &&
                r.actionHandler?.runAction("advance", t.payload.delta, null);
              break;
            case window.VSC.Constants.MESSAGE_TYPES.ADJUST_VOLUME:
              if (t.payload && typeof t.payload.delta == "number") {
                let i = t.payload.delta;
                (o.forEach((n) => {
                  r.actionHandler
                    ? r.actionHandler.adjustVolume(n, i, { relative: !0 })
                    : (n.volume = Math.min(1, Math.max(0.01, n.volume + i)));
                }),
                  window.VSC.logger?.debug(
                    `Adjusted volume by ${i} on ${o.length} media elements`,
                  ));
              }
              break;
            case window.VSC.Constants.MESSAGE_TYPES.RESET_VOLUME:
              (o.forEach((i) => {
                r.actionHandler
                  ? r.actionHandler.resetVolume(i)
                  : (i.volume = 1);
              }),
                window.VSC.logger?.debug(
                  `Reset volume on ${o.length} media elements`,
                ));
              break;
            case window.VSC.Constants.MESSAGE_TYPES.TOGGLE_DISPLAY:
              r.actionHandler &&
                r.actionHandler.runAction("display", null, null);
              break;
            case window.VSC.Constants.MESSAGE_TYPES.TEARDOWN:
              r.teardown();
              break;
            case window.VSC.Constants.MESSAGE_TYPES.REINIT:
              r.initialize();
              break;
          }
        }
      }),
      window.VSC_controller && window.VSC_controller.initialized)
    ) {
      window.VSC.logger?.info("VSC already initialized, skipping re-injection");
      return;
    }
    (r.initialize().catch((e) => {
      window.VSC.logger.error(`Extension initialization failed: ${e.message}`);
    }),
      (window.VSC_controller = r));
  })();
})();
