import Tabs from '../../../components/docs/Tabs';
import CodeBlock from '../../../components/docs/CodeBlock';
import Callout from '../../../components/docs/Callout';
import Sidebar from '../../../components/docs/Sidebar';

export default function QuickstartPage() {
  const pythonInstall = `pip install xase`;
  const nodeInstall = `npm install @xase/sdk
# or
yarn add @xase/sdk
# or
pnpm add @xase/sdk`;
  const goInstall = `go get github.com/xase-ai/xase-go`;
  const curlCreate = `curl -X POST https://api.xase.ai/v1/records \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "model_id": "credit-model-v1",
    "input": {"customer_id": "cust_123", "income": 85000},
    "output": {"decision": "APPROVED", "limit": 25000},
    "confidence": 0.94
  }'`;

  const pythonFirstRecord = `import xase

client = xase.Client(api_key="xase_pk_...")

record = client.records.create(
    model_id="credit-model-v1",
    input={"customer_id": "cust_123", "income": 85000},
    output={"decision": "APPROVED", "limit": 25000},
    confidence=0.94
)

print(f"Recorded: {record.id}")`;

  const nodeFirstRecord = `import { Xase } from '@xase/sdk';

const xase = new Xase({ apiKey: 'xase_pk_...' });

const record = await xase.records.create({
  modelId: 'credit-model-v1',
  input: { customerId: 'cust_123', income: 85000 },
  output: { decision: 'APPROVED', limit: 25000 },
  confidence: 0.94
});

console.log('Recorded:', record.id);`;

  const curlIntervene = `curl -X POST https://api.xase.ai/v1/records/rec_8a7f3b2c/intervene \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "actor_email": "analyst@company.com",
    "action": "APPROVED",
    "reason": "Documentation verified manually"
  }'`;

  const pythonExport = `bundle = client.exports.create(record_id=record.id)
# Download the ZIP file
bundle.download("./evidence_bundle.zip")`;
  const nodeExport = `const bundle = await xase.exports.create({ recordId: record.id });
await bundle.download('./evidence_bundle.zip');`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Quickstart</h1>
        <p className="text-lg text-gray-400 mb-8">Get XASE running in 5 minutes. The examples below show Python and Node.js, but the concepts apply to all SDKs.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">1. Get Your API Key</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-1">
          <li>Go to dashboard.xase.ai</li>
          <li>Create an account (free tier available)</li>
          <li>Navigate to <span className="text-gray-400">Settings → API Keys</span></li>
          <li>Click <span className="text-gray-400">Create API Key</span></li>
          <li>Copy the key (starts with <span className="text-gray-500">xase_pk_...</span>)</li>
        </ol>
        <Callout type="warning">Store your API key securely. It won't be shown again.</Callout>

        <h2 className="text-2xl font-light mt-8 mb-3">2. Install the SDK</h2>
        <Tabs
          tabs={[
            { title: 'Python', content: <CodeBlock language="bash" code={pythonInstall} /> },
            { title: 'Node.js', content: <CodeBlock language="bash" code={nodeInstall} /> },
            { title: 'Go', content: <CodeBlock language="bash" code={goInstall} /> },
            { title: 'cURL', content: <CodeBlock language="bash" code={curlCreate} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">3. Capture Your First Decision</h2>
        <Tabs
          tabs={[
            { title: 'Python', content: <CodeBlock language="python" filename="first.py" code={pythonFirstRecord} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="first.ts" code={nodeFirstRecord} /> },
            { title: 'cURL', content: <CodeBlock language="bash" code={curlCreate} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">4. Record Human Intervention</h2>
        <Tabs
          tabs={[
            { title: 'cURL', content: <CodeBlock language="bash" code={curlIntervene} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">5. Export Evidence Bundle</h2>
        <Tabs
          tabs={[
            { title: 'Python', content: <CodeBlock language="python" filename="export.py" code={pythonExport} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="export.ts" code={nodeExport} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">6. Verify the Bundle (Offline)</h2>
        <CodeBlock language="bash" code={`unzip evidence_bundle.zip\n./verify.sh\n\n# ✓ Signature valid\n# ✓ Hash chain intact\n# ✓ Timestamps consistent\n# RESULT: Evidence is authentic`} />

        <div className="mt-10 grid md:grid-cols-2 gap-3">
          <a href="/docs/concepts" className="p-4 bg-[#0a0a0a] border border-[#222] rounded-lg hover:border-[#333] transition-colors">
            <div className="text-white">Core Concepts</div>
            <div className="text-sm text-gray-500">Understand the architecture</div>
          </a>
          <a href="/docs/sdk/python" className="p-4 bg-[#0a0a0a] border border-[#222] rounded-lg hover:border-[#333] transition-colors">
            <div className="text-white">Python SDK</div>
            <div className="text-sm text-gray-500">Full installation guide</div>
          </a>
        </div>
      </main>
    </div>
  );
}
