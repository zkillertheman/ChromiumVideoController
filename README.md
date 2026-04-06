# Video Controller

Video Controller is a Manifest V3 browser extension for Opera and Chromium-based
browsers that adds fast keyboard-driven control over HTML5 video and audio.

It injects a lightweight controller into pages with playable media and lets you
change speed, seek, jump to markers, adjust volume, toggle the overlay, and use
custom shortcuts without depending on site-specific players.

## Features

- Playback speed control from very slow to very fast
- Forward and reverse seeking by configurable time steps
- Chapter skip shortcuts that jump directly to 0% through 90% of a clip
- Audio and video support
- Marker set/jump workflow for quick revisits
- Volume increase and decrease shortcuts
- Draggable on-page controller with optional pinning
- Per-site rules and custom controller CSS
- Customizable keyboard bindings with modifier support

## How It Works

The extension has three main runtime pieces:

- `background.js` manages startup behavior, storage migration, and default settings
- `content-bridge.js` and `inject.js` load into pages, discover media elements, and handle playback actions
- `ui/options` contains the settings page used to edit shortcuts, site rules, and controller behavior

When a page loads, the injected script searches for HTML5 media elements and
attaches the controller logic. Keyboard events are matched against saved
bindings, then routed to the active media element. For direct seek actions like
rewind, advance, and chapter skip, the extension resolves the most relevant
media element first and applies the action there.

Settings are stored with `chrome.storage.sync`, so predefined shortcuts and
schema updates can be migrated when the extension loads.

## Default Shortcuts

- `S` decreases playback speed
- `D` increases playback speed
- `Z` rewinds by 10 seconds
- `X` advances by 10 seconds
- `Shift+Space` pauses or resumes playback
- `0` jumps to the start of the media
- `1` through `9` jump to 10% through 90% of the media

Most shortcuts can be changed from the options page.

## Chapter Skip

Chapter skip is intended for quick navigation through long clips without needing
fixed seek amounts.

- `0` jumps to 0%
- `1` jumps to 10%
- `2` jumps to 20%
- `3` jumps to 30%
- `4` jumps to 40%
- `5` jumps to 50%
- `6` jumps to 60%
- `7` jumps to 70%
- `8` jumps to 80%
- `9` jumps to 90%

Each chapter skip is stored as its own binding, so any one of them can be
rebound independently in the settings UI.

## Loading the Extension in Opera

1. Open the extensions page in Opera.
2. Enable developer mode.
3. Choose `Load unpacked`.
4. Select this folder.

The extension should then appear as an unpacked addon and can be reloaded after
local changes.

## Project Structure

- `manifest.json`: extension manifest and metadata
- `background.js`: startup, migration, and persisted defaults
- `inject.js`: media discovery, keyboard handling, and playback actions
- `content-bridge.js`: bridge used to inject runtime logic into pages
- `ui/options`: settings UI
- `ui/popup`: popup UI
- `styles`: injected stylesheet assets
- `assets`: icons and packaged resources

## Notes

- This addon is designed around HTML5 media elements.
- Some sites override or interfere with native media behavior; the extension
  includes fight-back logic and site-specific handling where needed.
- Shortcut changes usually require refreshing the page before they take effect
  on already loaded tabs.

## Development

For local changes:

1. Edit the extension files.
2. Reload the unpacked extension in Opera.
3. Refresh the target page.
4. Test behavior on a page with HTML5 media.

## License

This repository is licensed under the MIT License. See `LICENSE` for details.
