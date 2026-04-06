(() => {
  const MESSAGE_TYPES = {
    ADJUST_SPEED: "VSC_ADJUST_SPEED",
    RESET_SPEED: "VSC_RESET_SPEED",
    REWIND: "VSC_REWIND",
    ADVANCE: "VSC_ADVANCE",
    ADJUST_VOLUME: "VSC_ADJUST_VOLUME",
    RESET_VOLUME: "VSC_RESET_VOLUME",
  };

  document.addEventListener("DOMContentLoaded", () => {
    bindStaticActions();
    loadPopupState();
  });

  function bindStaticActions() {
    document.querySelector("#config").addEventListener("click", () => {
      chrome.runtime.openOptionsPage();
    });

    document.querySelector("#disable").addEventListener("click", function () {
      let enabled = this.classList.contains("disabled");
      setEnabled(enabled, showEnabledState);
    });

    document.querySelector("#seek-backward").addEventListener("click", function () {
      sendToActiveTab(MESSAGE_TYPES.REWIND, {
        delta: Math.abs(parseFloat(this.dataset.delta || "10")),
      });
    });

    document.querySelector("#seek-forward").addEventListener("click", function () {
      sendToActiveTab(MESSAGE_TYPES.ADVANCE, {
        delta: Math.abs(parseFloat(this.dataset.delta || "10")),
      });
    });

    document.querySelector("#speed-decrease").addEventListener("click", function () {
      sendToActiveTab(MESSAGE_TYPES.ADJUST_SPEED, {
        delta: parseFloat(this.dataset.delta || "-0.1"),
      });
    });

    document.querySelector("#speed-increase").addEventListener("click", function () {
      sendToActiveTab(MESSAGE_TYPES.ADJUST_SPEED, {
        delta: parseFloat(this.dataset.delta || "0.1"),
      });
    });

    document.querySelector("#speed-reset").addEventListener("click", () => {
      sendToActiveTab(MESSAGE_TYPES.RESET_SPEED);
    });

    document.querySelector("#volume-decrease").addEventListener("click", function () {
      sendToActiveTab(MESSAGE_TYPES.ADJUST_VOLUME, {
        delta: parseFloat(this.dataset.delta || "-0.1"),
      });
    });

    document.querySelector("#volume-increase").addEventListener("click", function () {
      sendToActiveTab(MESSAGE_TYPES.ADJUST_VOLUME, {
        delta: parseFloat(this.dataset.delta || "0.1"),
      });
    });

    document.querySelector("#volume-reset").addEventListener("click", () => {
      sendToActiveTab(MESSAGE_TYPES.RESET_VOLUME);
    });
  }

  function loadPopupState() {
    chrome.storage.sync.get({ enabled: !0, keyBindings: [] }, (settings) => {
      renderEnabledState(settings.enabled !== !1);
      renderBindingValues(settings.keyBindings);
    });
  }

  function renderBindingValues(keyBindings) {
    let rewindValue = getBindingValue(keyBindings, "rewind", 10),
      advanceValue = getBindingValue(keyBindings, "advance", 10),
      slowerValue = getBindingValue(keyBindings, "slower", 0.1),
      fasterValue = getBindingValue(keyBindings, "faster", 0.1),
      softerValue = getBindingValue(keyBindings, "softer", 0.1),
      louderValue = getBindingValue(keyBindings, "louder", 0.1);

    updateButton("#seek-backward", rewindValue, `-${Math.abs(rewindValue)}s`);
    updateButton("#seek-forward", advanceValue, `+${Math.abs(advanceValue)}s`);
    updateButton("#speed-decrease", -slowerValue, `-${slowerValue}`);
    updateButton("#speed-increase", fasterValue, `+${fasterValue}`);
    updateButton("#volume-decrease", -softerValue, `-${Math.round(softerValue * 100)}%`);
    updateButton("#volume-increase", louderValue, `+${Math.round(louderValue * 100)}%`);
  }

  function updateButton(selector, delta, label) {
    let element = document.querySelector(selector);
    element && ((element.dataset.delta = String(delta)), (element.querySelector("span").textContent = label));
  }

  function getBindingValue(keyBindings, action, fallback) {
    let binding = Array.isArray(keyBindings)
      ? keyBindings.find((entry) => entry.action === action)
      : null;
    return Number.isFinite(binding?.value) ? binding.value : fallback;
  }

  function setEnabled(enabled, callback) {
    chrome.storage.sync.set({ enabled }, () => {
      renderEnabledState(enabled);
      callback && callback(enabled);
    });
  }

  function renderEnabledState(enabled) {
    let button = document.querySelector("#disable");
    button.classList.toggle("disabled", !enabled);
    button.title = enabled ? "Disable Extension" : "Enable Extension";
  }

  function showEnabledState(enabled) {
    let status = document.querySelector("#status");
    status.classList.toggle("hide", !1);
    status.innerText = `${enabled ? "Enabled" : "Disabled"}. Reload page.`;
  }

  function sendToActiveTab(type, payload) {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (tabs) => {
      tabs[0] && chrome.tabs.sendMessage(tabs[0].id, payload ? { type, payload } : { type });
    });
  }
})();
