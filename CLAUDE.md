# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chrome extension that modifies YouTube's grid layout to display 5 videos per row instead of the default variable grid. The extension uses CSS custom property overrides to force YouTube's rich-grid components to display exactly 5 columns.

## Architecture

- **manifest.json**: Chrome extension manifest (v3) that defines the extension metadata and content script injection
- **content.js**: Main content script that runs on YouTube pages to apply grid modifications
- **README.md**: Basic project description

## Core Functionality

The extension works by:
1. Overriding the CSS custom property `--ytd-rich-grid-items-per-row` to "5" on the document root
2. Applying the same override to individual `ytd-rich-grid-renderer` elements for redundancy
3. Using a MutationObserver to continuously reapply changes as YouTube's SPA updates the DOM

## Development Notes

- No build process required - this is vanilla JavaScript
- Changes to `content.js` require reloading the extension in Chrome's developer mode
- The extension targets `https://www.youtube.com/*` and runs at `document_start`
- Uses `!important` CSS declarations to override YouTube's styling
- Designed to work with YouTube's current DOM structure and CSS custom properties

## Testing

To test changes:
1. Load the extension in Chrome developer mode
2. Navigate to YouTube
3. Verify that video grids show exactly 5 columns
4. Test on different YouTube pages (home, search results, channel pages)