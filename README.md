# 🎮 My Awesome Games Website! 🎮

A super cool, colorful website where a 10-year-old game creator can showcase their games and share about themselves!

## 🌟 What's Inside?

This website has:
- **About Me Section**: Tell everyone about yourself!
- **Games Gallery**: Show off all your awesome games
- **Cool Stats**: Display your gaming achievements
- **Contact Section**: Let people reach out (with parent permission!)
- **Interactive Features**: Click, edit, and customize everything!

## 🚀 How to Use

1. **Open the Website**: Just open `index.html` in your web browser!
2. **Edit About Me**: Click the "Edit About Me" button to change your info
3. **Add Games**: Click the "Add New Game" card to add your own games
4. **Customize**: Edit the contact section to add your info (ask your parents first!)

## ✨ Cool Features

- Colorful animated background that changes colors
- Fun hover effects on all buttons and cards
- Confetti animation when you click "Play Now!"
- Smooth scrolling navigation
- Mobile-friendly design
- Secret Konami code easter egg! (Try: ↑ ↑ ↓ ↓ ← → ← → B A)

## 📝 Customizing Your Website

You can easily customize by:
- Using the built-in "Edit" buttons on the page
- Changing the emojis in the HTML file
- Adding your own game descriptions
- Changing colors in the CSS file

Have fun with your awesome website! 🎉

---

## Playwright MCP Integration

This project also includes Playwright MCP integration for browser automation and testing.

## Playwright MCP Setup

This project includes Playwright MCP (Model Context Protocol) server for browser automation capabilities.

### Installation

Dependencies are already installed. To reinstall:

```bash
npm install
```

### Configuration

The MCP configuration is available in `mcp-config.json`. This configuration can be used with Claude Code, VS Code, Cursor, or other MCP-compatible tools.

Basic configuration:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### Usage

Run the Playwright MCP server:

```bash
npx @playwright/mcp@latest
```

#### Configuration Options

- `--browser`: Choose browser (chrome, firefox, webkit, msedge)
- `--headless`: Run in headless mode
- `--port`: Enable HTTP transport on specified port
- `--isolated`: Keep browser profile in memory only
- `--device`: Emulate specific devices (e.g., "iPhone 15")
- `--viewport-size`: Set browser viewport dimensions
- `--timeout-action`: Configure action timeout (default: 5000ms)

#### Example with options:

```bash
npx @playwright/mcp@latest --browser chrome --headless
```

#### Standalone Server Mode

For headless environments:

```bash
npx @playwright/mcp@latest --port 8931
```

### Integration

To integrate with Claude Code or other MCP clients, reference the `mcp-config.json` file or add the configuration to your tool's MCP settings.