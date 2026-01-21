'use client';
import Tabs from '../../../components/docs/Tabs';
import DocsContent from '../../../components/docs/DocsContent';
import CodeBlock from '../../../components/docs/CodeBlock';
import Callout from '../../../components/docs/Callout';

export default function QuickstartPage() {
  const pythonInstall = `pip install xase`;
  const nodeInstall = `npm install @xase/sdk
# or
yarn add @xase/sdk
# or
pnpm add @xase/sdk`;
  const goInstall = `go get github.com/xase-ai/xase-go`;
  const curlAccess = `curl -X POST https://api.xase.ai/v1/access \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "dataset_id": "medical-records-2025",
    "purpose": "model-training",
    "model_id": "diagnostic-model-v2",
    "duration": "30d"
  }'`;

  const pythonAccess = `import xase

client = xase.Client(api_key="xase_pk_...")

# Request access to data
session = client.access(
    dataset="medical-records-2025",
    purpose="model-training",
    model_id="diagnostic-model-v2",
    duration="30d"
)

print(f"Access granted! Session ID: {session.id}")`;

  const nodeAccess = `import { Xase } from '@xase/sdk';

const xase = new Xase({ apiKey: 'xase_pk_...' });

// Request access to data
const session = await xase.access({
  dataset: 'medical-records-2025',
  purpose: 'model-training',
  modelId: 'diagnostic-model-v2',
  duration: '30d'
});

console.log('Access granted! Session ID:', session.id);`;

  const pythonStream = `# Stream data in batches
for batch in session.stream(batch_size=32):
    # Train your model
    model.train_on_batch(batch)
    
    # All operations automatically tracked`;

  const nodeStream = `// Stream data in batches
for await (const batch of session.stream({ batchSize: 32 })) {
  // Train your model
  await model.trainOnBatch(batch);
  
  // All operations automatically tracked
}`;

  const pythonEvidence = `# Get evidence bundle for session
bundle = session.get_evidence()

# Download the bundle
bundle.download("./evidence_bundle.zip")`;
  const nodeEvidence = `// Get evidence bundle for session
const bundle = await session.getEvidence();

// Download the bundle
await bundle.download('./evidence_bundle.zip');`;

  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Quickstart
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Get started with governed data access in 5 minutes.
        </p>

        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Get started
          </h2>
          
          <h3 className="text-[17px] font-medium text-white mb-3">1. Get Your API Key</h3>
          <ol className="list-decimal list-inside text-neutral-400 space-y-1 ml-4">
            <li>Go to dashboard.xase.ai</li>
            <li>Create an account (free tier available)</li>
            <li>Navigate to <span className="text-white">Settings → API Keys</span></li>
            <li>Click <span className="text-white">Create API Key</span></li>
            <li>Copy the key (starts with <span className="text-neutral-600">xase_pk_...</span>)</li>
          </ol>
          <div className="mt-4 p-4 border border-amber-800/30 bg-amber-900/10 rounded-lg">
            <p className="text-[14px] text-neutral-400">
              <strong className="text-amber-300">Warning:</strong> Store your API key securely. It won't be shown again.
            </p>
          </div>

        </section>
        
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Installation
          </h2>
        
          <h3 className="text-[17px] font-medium text-white mb-3">2. Install SDK</h3>
          <Tabs
            tabs={[
              { title: 'Python', content: <CodeBlock language="bash" code={pythonInstall} /> },
              { title: 'Node.js', content: <CodeBlock language="bash" code={nodeInstall} /> },
              { title: 'Go', content: <CodeBlock language="bash" code={goInstall} /> },
            ]}
          />

        </section>
        
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Request access to data
          </h2>
        
          <h3 className="text-[17px] font-medium text-white mb-3">3. Request Governed Access</h3>
          <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
            Create an access session with specified purpose and duration:
          </p>

          <Tabs
            tabs={[
              { title: 'Python', content: <CodeBlock language="python" filename="access.py" code={pythonAccess} /> },
              { title: 'Node.js', content: <CodeBlock language="typescript" filename="access.ts" code={nodeAccess} /> },
              { title: 'cURL', content: <CodeBlock language="bash" code={curlAccess} /> },
            ]}
          />
          
          <p className="text-[14px] text-neutral-500 mt-4 leading-relaxed">
            Policy evaluation happens automatically. If approved, a session is created. If rejected, an error with the specific policy violation is returned.
          </p>

        </section>
        
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Use the data
          </h2>
          
          <h3 className="text-[17px] font-medium text-white mb-3">4. Stream Data</h3>
          <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
            Access and process data through the session interface:
          </p>
          
          <Tabs
            tabs={[
              { title: 'Python', content: <CodeBlock language="python" filename="stream.py" code={pythonStream} /> },
              { title: 'Node.js', content: <CodeBlock language="typescript" filename="stream.ts" code={nodeStream} /> },
            ]}
          />

        </section>
        
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Generate evidence
          </h2>
        
          <h3 className="text-[17px] font-medium text-white mb-3">5. Get Evidence Bundle</h3>
          <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
            Generate cryptographic proof of compliant data use:
          </p>
          
          <Tabs
            tabs={[
              { title: 'Python', content: <CodeBlock language="python" filename="evidence.py" code={pythonEvidence} /> },
              { title: 'Node.js', content: <CodeBlock language="typescript" filename="evidence.ts" code={nodeEvidence} /> },
            ]}
          />

        </section>
        
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Verify evidence
          </h2>
        
          <h3 className="text-[17px] font-medium text-white mb-3">6. Verify the Bundle (Offline)</h3>
          <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
            Verify the evidence bundle without depending on Xase infrastructure:
          </p>
          
          <CodeBlock language="bash" code={`unzip evidence_bundle.zip\n./verify.sh\n\n# ✓ Signature valid\n# ✓ Hash chain intact\n# ✓ Timestamps consistent\n# RESULT: Evidence is authentic`} />
        </section>

        <section>
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
            Next steps
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/docs/concepts" className="p-4 border border-neutral-800 rounded-lg hover:bg-white/[0.02] transition-colors">
              <div className="text-[15px] font-medium text-white mb-1">Core Concepts</div>
              <div className="text-[14px] text-neutral-600">Understand the architecture</div>
            </a>
            <a href="/docs/guides/policy" className="p-4 border border-neutral-800 rounded-lg hover:bg-white/[0.02] transition-colors">
              <div className="text-[15px] font-medium text-white mb-1">Policy Engine</div>
              <div className="text-[14px] text-neutral-600">Configure governed access</div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-neutral-800/50 flex items-center justify-between text-[13px] text-neutral-600">
          <span>© 2025 Xase</span>
          <a href="mailto:founders@xase.ai" className="hover:text-neutral-400 transition-colors">
            founders@xase.ai
          </a>
        </div>
      </div>
    </DocsContent>
  );
}
