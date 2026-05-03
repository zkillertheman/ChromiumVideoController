# Privacy Policy

**Last updated: 2026-05-03**

## Overview

Video Controller is a browser extension for Opera and Chromium-based browsers that
provides keyboard-driven control over HTML5 audio and video elements. This policy
describes what data the extension accesses, what it stores, and how it is used.

## Data Collection

Video Controller does **not** collect, transmit, or share any personal data.

- No analytics or telemetry are gathered.
- No usage data is sent to any server or third party.
- No information about the pages you visit or the media you watch is recorded or
  stored beyond what is described below.

## Data Storage

The extension uses `chrome.storage.sync` solely to save your personal settings:

- Keyboard shortcut bindings
- Playback seek step sizes
- Per-site rules and controller behavior preferences
- Controller appearance and CSS customizations

These settings are stored locally in your browser and, if you are signed into a
Chromium-based browser with sync enabled, may be synchronized across your own
devices by the browser's built-in sync service. This synchronization is handled
entirely by the browser; Video Controller does not interact with any external
server.

No settings contain personal information, browsing history, or media content.

## Permissions

The extension requests the following permission:

| Permission | Reason |
|---|---|
| `storage` | Save and load your shortcut and behavior settings |

Content scripts are injected into web pages to discover HTML5 media elements and
attach playback controls. These scripts do not read, record, or transmit any page
content, form data, or user input beyond the keyboard shortcuts used to trigger
playback actions.

## Third Parties

Video Controller does not integrate with any third-party services, APIs, or
advertising networks. No data of any kind is shared with third parties.

## Changes to This Policy

If this policy changes in a future release, the updated version will be committed
to this repository. The **Last updated** date at the top of this file will reflect
when the policy was last revised.

## Contact

This project is maintained at
[github.com/zkillertheman/ChromiumVideoController](https://github.com/zkillertheman/ChromiumVideoController).
Questions or concerns can be raised by opening an issue in that repository.
