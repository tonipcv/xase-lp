'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';
import { useDocsTheme } from '../../ThemeContext';

export default function CliGuidePage() {
  const light = useDocsTheme();

  const install = `npm i -g xase
xase --help

# If command not found (nvm users):
echo 'export PATH="$PATH:$(npm prefix -g)/bin"' >> ~/.zprofile
source ~/.zprofile`;

  const configure = `xase config set baseUrl https://api.xase.ai/api/xase/v1
xase auth login   # email + password, or press Enter to paste an API key
xase auth status`;

  const quickstart = `# Metrics
xase metrics summary --period week

# Keys
xase keys create --scopes records:read,metrics:read --ttl 24h --save
xase keys list
xase keys revoke <id>

# Records
xase records list --limit 5`;

  const jsonOut = `xase records list --json | jq '.data[0]'
xase metrics summary --json > metrics.json`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">CLI Guide</h1>
        <p className={`text-base md:text-lg mb-6 ${light ? 'text-gray-600' : 'text-gray-400'}`}>
          Install and use the XASE command-line interface to authenticate, manage API keys, view metrics, and work with records.
        </p>

        <h2 className="text-xl md:text-2xl font-light mt-6 md:mt-8 mb-3">Install</h2>
        <CodeBlock language="bash" code={install} />

        <h2 className="text-xl md:text-2xl font-light mt-6 md:mt-8 mb-3">Configure</h2>
        <CodeBlock language="bash" code={configure} />
        <Callout type="info" light={light}>Config is stored per-user. macOS: <code className='text-gray-300'>~/Library/Preferences/xase-nodejs/config.json</code>. Linux: <code className='text-gray-300'>~/.config/xase-nodejs/config.json</code>. Windows: <code className='text-gray-300'>%APPDATA%\xase-nodejs\config.json</code>.</Callout>

        <h2 className="text-xl md:text-2xl font-light mt-6 md:mt-8 mb-3">Quickstart</h2>
        <CodeBlock language="bash" code={quickstart} />

        <h2 className="text-xl md:text-2xl font-light mt-6 md:mt-8 mb-3">Commands</h2>
        <CodeBlock
          language="bash"
          code={`# Authentication
xase auth login
xase auth status
xase auth whoami
xase auth logout

# Config
xase config set <key> <value>
xase config get <key>
xase config list

# Dashboard
xase dashboard

# Records
xase records list [--limit <n>] [--json]
xase records get <transaction_id>
xase records create   # interactive
xase records search --query <text> [--limit <n>] [--json]

# Interventions (HITL)
xase intervene list <record_id> [--json]
xase intervene create <record_id>   # interactive
xase intervene approve <record_id>

# Exports
xase export create <record_id>
xase export download <record_id> [-o ./evidence.zip] [--include-payloads]
xase export batch --input ./ids.txt [-o ./out/]

# Verify
xase verify bundle ./evidence.zip [--verbose]
xase verify record <transaction_id>
xase verify chain

# Models
xase models list [--json]
xase models get <model_id>
xase models register   # interactive

# Metrics & Alerts
xase metrics summary [--period day|week|month] [--json]
xase metrics alerts [--json]
xase metrics override-rate [--period day|week|month] [--json]

# API Keys
xase keys create --scopes <scopes> --ttl <duration> [--save]
xase keys list [--json]
xase keys revoke <id>

# Tenant
xase tenant list
xase tenant select`}
        />

        <h2 className="text-xl md:text-2xl font-light mt-6 md:mt-8 mb-3">JSON Output</h2>
        <CodeBlock language="bash" code={jsonOut} />

        <h2 className="text-xl md:text-2xl font-light mt-6 md:mt-8 mb-3">Troubleshooting</h2>
        <ul className={`${light ? 'text-gray-700' : 'text-gray-300'} list-disc list-inside space-y-1`}>
          <li>Command not found: ensure npm global bin is in PATH (see Install).</li>
          <li>401 Unauthorized: check <code className='text-gray-300'>xase auth status</code> and API key scopes.</li>
          <li>404 Not Found: verify <code className='text-gray-300'>baseUrl</code> is <code className='text-gray-300'>https://api.xase.ai/api/xase/v1</code>.</li>
        </ul>
      </main>
    </DocsContent>
  );
}
