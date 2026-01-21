# XASE CLI

The XASE CLI lets you authenticate, manage API keys, inspect metrics, and work with records from your terminal.

## Install

```bash
npm i -g xase
xase --help
```

If the command is not found after install and you use nvm, add npm global bin to PATH:
```bash
echo 'export PATH="$PATH:$(npm prefix -g)/bin"' >> ~/.zprofile
source ~/.zprofile
```

## Configure

```bash
xase config set baseUrl https://api.xase.ai/api/xase/v1
xase auth login   # email + password, or press Enter to paste an API key
```

Config and credentials are stored per-user at:
- macOS: `~/Library/Preferences/xase-nodejs/config.json`
- Linux: `~/.config/xase-nodejs/config.json`
- Windows: `%APPDATA%\xase-nodejs\config.json`

## Quickstart

```bash
# Check status
xase auth status

# Metrics
xase metrics summary --period week

# Keys
xase keys create --scopes records:read,metrics:read --ttl 24h --save
xase keys list
xase keys revoke <id>

# Records
xase records list --limit 5
```

## Commands

- **auth**
  - `xase auth login`                # Authenticate with API key or email/password
  - `xase auth status`               # Show current auth and API URL
  - `xase auth whoami`               # Show current user/tenant (if available)
  - `xase auth logout`
- **config**
  - `xase config set <key> <value>`  # e.g. `baseUrl`
- **tenant**
  - `xase tenant list`
  - `xase tenant select`
- **keys**
  - `xase keys create --scopes <scopes> --ttl <duration> [--save]`
  - `xase keys list`
  - `xase keys revoke <id>`
- **records**
  - `xase records list [--limit <n>]`
  - `xase records get <transaction_id>`
  - `xase records create`            # interactive
- **intervene (HITL)**
  - `xase intervene list <record_id>`
  - `xase intervene create <record_id>`
  - `xase intervene approve <record_id>`
- **export**
  - `xase export download <record_id> [-o ./evidence.zip] [--include-payloads]`
- **verify**
  - `xase verify bundle ./evidence.zip [--verbose]`
  - `xase verify record <transaction_id>`
  - `xase verify chain`
- **models**
  - `xase models list`
  - `xase models get <model_id>`
  - `xase models register`
- **metrics**
  - `xase metrics summary [--period day|week|month] [--json]`
  - `xase metrics alerts`
  - `xase metrics override-rate`
- **dashboard**
  - `xase dashboard`

## API Keys

- Recommended header: `X-API-Key`
- To create a scoped key with TTL and persist it locally:
```bash
xase keys create --scopes records:read,records:write,metrics:read --ttl 24h --save
```
- Revoke by id:
```bash
xase keys revoke <id>
```

## JSON output

Most list/summary commands support `--json` for machine-readable output:
```bash
xase records list --json | jq '.data[0]'
xase metrics summary --json > metrics.json
```

## Troubleshooting

- Command not found after install:
  - Ensure npm global bin is in PATH (see Install section).
- Using nvm and multiple nodes:
  - Confirm the Node used in your shell matches the one used to install the CLI: `which node`, `node -v`.
- 401 Unauthorized:
  - Check `xase auth status` and your API key scopes.
- 404 Not Found:
  - Confirm `baseUrl` is `https://api.xase.ai/api/xase/v1`.

## Update / Uninstall

```bash
npm i -g xase@latest
# or uninstall
npm uninstall -g xase
```

---

## Add to Docs Navigation (maintainers)

This page lives at `src/app/docs/guides/cli.md`.
To surface it in the docs index/navigation, link it from your docs landing (`src/app/docs/page.tsx`) or the sidebar component if you use one.
For example, add a Guides link:

```tsx
// In src/app/docs/page.tsx
// Add a link under Guides section
import Link from 'next/link'
...
<li><Link href="/docs/guides/cli">CLI</Link></li>
```

If you use a centralized nav config, add an entry pointing to `/docs/guides/cli`.
