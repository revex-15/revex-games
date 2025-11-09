# revex-games

A game project with Playwright MCP integration for browser automation and testing.

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