# Privacy Policy

Last updated: 2026-05-03

This Privacy Policy explains how Video Controller (the "Extension") handles data.

## Summary

- The Extension does not collect personal data for the developer.
- The Extension does not sell data.
- The Extension does not run analytics or tracking beacons.
- Settings are stored in browser extension storage and may sync through your browser account if sync is enabled.

## What Data the Extension Uses

The Extension processes only the data needed to provide video/audio controls on pages you visit.

### 1. Extension settings

The Extension stores user preferences such as:

- Keyboard shortcuts
- Site-specific rules
- UI/controller options
- Enable/disable state and related configuration

Storage location:

- `chrome.storage.sync` (or equivalent Chromium sync storage)

If browser sync is enabled, these settings may be synced by your browser vendor across your signed-in devices.

### 2. Page and media context (runtime only)

To work, the Extension reads page/media state at runtime (for example current media time, playback rate, and media element availability).

- This runtime data is used only to execute requested controls.
- It is not transmitted to the developer.
- It is not sold or used for advertising.

## Permissions and Why They Are Needed

- `storage`: Save and load Extension settings.
- Content script access on `http://*/*`, `https://*/*`, and `file:///*`: Detect and control HTML5 media on pages where you use the Extension.

Excluded domains are defined in the manifest where applicable.

## Data Sharing

The developer does not receive your settings or media activity data from the Extension.

Possible third-party handling outside developer control:

- Browser sync services may store synchronized extension settings when sync is enabled.
- Browser/extension store update infrastructure may process technical data needed to deliver extension updates.

## Data Retention and Deletion

- Settings remain in extension storage until you change or clear them.
- You can remove stored data by:
  - Resetting/clearing Extension settings
  - Removing the Extension from your browser
  - Clearing browser extension storage/sync data through browser settings

## Security

The project aims to minimize data use and retain only required settings. No privacy policy can guarantee absolute security.

## Children

The Extension is not specifically directed to children under 13.

## Changes to This Policy

This policy may be updated when features or data practices change. The latest version will be kept in this repository.

## Contact

Project homepage:

- https://github.com/zkillertheman/ChromiumVideoController
