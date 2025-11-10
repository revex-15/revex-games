# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**revex-games** is a personal games showcase website built with static HTML, CSS, and JavaScript. It features a collection of browser-based games (primarily Scratch embeds) with a modern, colorful UI designed for a young game creator.

## Quick Start

### Viewing the Website
Open `index.html` in a web browser - no build process required.

### Development
This is a static website with no build step. Simply edit HTML/CSS/JS files and refresh the browser.

### Playwright MCP (Browser Automation)
```bash
# Install dependencies
npm install

# Run Playwright MCP server
npx @playwright/mcp@latest

# With options
npx @playwright/mcp@latest --browser chrome --headless
```

## Architecture

### File Structure
```
/
├── index.html          # Homepage with game gallery, about, stats, contact
├── styles.css          # Shared styles for entire site
├── script.js           # Shared JavaScript functionality
├── games/              # Individual game detail pages
│   └── geometry-dash.html
└── images/             # Static assets (profile pictures, etc.)
```

### Page Architecture Pattern

**Homepage (`index.html`):**
- Sidebar navigation (responsive, collapsible on mobile)
- About Me section
- Games gallery with search functionality
- Stats display
- Contact section

**Game Detail Pages (`games/*.html`):**
All game pages follow a consistent structure:
1. Embedded Scratch iframe with the game
2. Fullscreen button (links to Scratch fullscreen view)
3. "Like & Comment" button (links to Scratch project page)
4. "How to Play" section with game-specific instructions
5. Back button to homepage

### Shared Resources
- All pages use the same `styles.css` and `script.js`
- Game detail pages reference these with relative paths (`../styles.css`, `../script.js`)
- Both main page and game pages include identical Mixpanel analytics initialization

### Scratch Game Embeds
Games are embedded from MIT's Scratch platform using iframes:
```html
<iframe src="https://scratch.mit.edu/projects/PROJECT_ID/embed"
        width="485" height="402" frameborder="0"
        scrolling="no" allowfullscreen></iframe>
```

Accompanying buttons:
- Fullscreen: `https://scratch.mit.edu/projects/PROJECT_ID/fullscreen`
- Project page: `https://scratch.mit.edu/projects/PROJECT_ID`

### Key JavaScript Features

**Theme System (`script.js`):**
- Light/dark mode toggle with localStorage persistence
- Theme preference survives page reloads
- Updates moon/sun emoji on toggle button

**Navigation:**
- Smooth scroll to sections on homepage
- Mobile menu with click-outside-to-close behavior
- Auto-close mobile menu on navigation

**Interactivity:**
- Game search filter (searches titles and descriptions)
- Confetti animation on play button clicks
- Konami code easter egg (↑↑↓↓←→←→BA) triggers rainbow mode
- Clickable email that reveals actual address

### Analytics Integration

Mixpanel is initialized on every page with project token `674553b555a2ad4fce54cdd659234eb6`:
- Homepage tracks as 'Page View' with page: 'Home'
- Game pages track with page: 'Geometry Dash Game' and include game name

## Adding New Games

To add a new game to the site:

1. **Add game card to homepage** (`index.html` in the `#gamesGrid` section):
```html
<div class="game-card">
    <div class="game-icon">🎮</div>
    <h3>Game Title</h3>
    <p>Game description</p>
    <div class="game-tags">
        <span class="tag">Genre</span>
        <span class="tag">Type</span>
    </div>
    <button class="play-button" onclick="window.location.href='games/game-name.html'">Play Now!</button>
</div>
```

2. **Create game detail page** in `games/` directory using `geometry-dash.html` as a template:
   - Update title, heading, and description
   - Replace Scratch project ID in iframe src
   - Update fullscreen and project page links
   - Customize "How to Play" section
   - Ensure Mixpanel tracking includes correct game name

3. **Update stats** if needed (game count in `#stats` section on homepage)

## Styling Guidelines

- CSS custom properties defined in `styles.css` for theming
- Color scheme uses lime/neon greens (`#dbff66`, `#b5f347`) as accent colors
- Dark mode uses `.dark` class on `<body>`
- Responsive breakpoint at 768px for mobile
- Emoji-heavy design for visual appeal

## Git Workflow

This project uses feature branches with the naming convention:
- Branch format: `claude/[feature-description]-[session-id]`
- Always develop on the designated branch (see task instructions)
- Commit with descriptive messages
- Push with `-u origin <branch-name>`

## Analytics & Tracking

Mixpanel token is included directly in HTML files. When adding new pages:
1. Copy the Mixpanel initialization script
2. Update the tracking event with appropriate page/game metadata
3. Ensure token remains `674553b555a2ad4fce54cdd659234eb6`
