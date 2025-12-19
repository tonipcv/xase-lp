import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';
import Sidebar from '../../../../components/docs/Sidebar';

export default function NodeSDKPage() {
  const npm = `npm install @xase/sdk`;
  const yarn = `yarn add @xase/sdk`;
  const pnpm = `pnpm add @xase/sdk`;

  const verify = `import { Xase } from '@xase/sdk';
console.log(Xase.VERSION);
// Output: 1.0.0`;

  const basicSetup = `import { Xase } from '@xase/sdk';

// Option 1: pass API key
const xase = new Xase({ apiKey: 'xase_pk_...' });

// Option 2: env var (recommended)
// export XASE_API_KEY=...
const xaseEnv = new Xase();`;

  const env = `# .env
XASE_API_KEY=xase_pk_...
XASE_BASE_URL=https://api.xase.ai  # Optional
XASE_TIMEOUT=30000  # ms`;

  const advanced = `const xase = new Xase({
  apiKey: 'xase_pk_...',
  baseUrl: 'https://api.xase.ai',
  timeout: 30000,
  maxRetries: 3,
  debug: false,
});`;

  const createRecord = `const record = await xase.records.create({
  modelId: 'credit-model-v2',
  input: {
    customerId: 'cust_123',
    income: 85000,
    debtRatio: 0.32,
    creditScore: 720,
  },
  output: {
    decision: 'APPROVED',
    creditLimit: 25000,
    interestRate: 12.5,
  },
  confidence: 0.94,
  idempotencyKey: 'req_unique_123',
});

console.log(record.id);`;

  const intervene = `const intervention = await xase.records.intervene({
  recordId: 'rec_8a7f3b2c',
  actorEmail: 'joao.silva@company.com',
  action: 'OVERRIDE',
  newOutcome: {
    decision: 'APPROVED',
    creditLimit: 30000,
    interestRate: 11.0,
  },
  reason: 'Customer provided additional collateral',
  evidenceUrls: ['https://storage.company.com/docs/collateral_123.pdf'],
  metadata: { reviewDurationSeconds: 340, checklistCompleted: true },
});

console.log(intervention.id);`;

  const exportBundle = `const job = await xase.exports.create({
  recordId: 'rec_8a7f3b2c',
  includeRelated: true,
});
await job.download('./evidence_bundle.zip');`;

  const express = `import express from 'express';
import { Xase } from '@xase/sdk';

const app = express();
app.use(express.json());
const xase = new Xase();

app.post('/api/credit-decision', async (req, res) => {
  const { input } = req.body;
  const aiResult = await yourAIModel.predict(input);
  const record = await xase.records.create({
    modelId: 'credit-model-v2',
    input,
    output: aiResult,
    transactionId: req.headers['x-request-id'] as string,
  });
  res.json({ ...aiResult, xaseRecordId: record.id });
});

export default app;`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Node.js SDK</h1>
        <p className="text-lg text-gray-400 mb-8">Complete guide to installing and using the XASE Node.js SDK.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Requirements</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Node.js 18+</li>
          <li>npm, yarn, or pnpm</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">Installation</h2>
        <Tabs
          tabs={[
            { title: 'npm', content: <CodeBlock language="bash" code={npm} /> },
            { title: 'yarn', content: <CodeBlock language="bash" code={yarn} /> },
            { title: 'pnpm', content: <CodeBlock language="bash" code={pnpm} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">Verify Installation</h2>
        <CodeBlock language="typescript" filename="verify.ts" code={verify} />

        <h2 className="text-2xl font-light mt-8 mb-3">Configuration</h2>
        <h3 className="text-lg text-gray-300 mb-2">Basic Setup</h3>
        <CodeBlock language="typescript" filename="basic.ts" code={basicSetup} />
        <h3 className="text-lg text-gray-300 mb-2">Environment Variables</h3>
        <CodeBlock language="bash" filename=".env" code={env} />
        <h3 className="text-lg text-gray-300 mb-2">Advanced Configuration</h3>
        <CodeBlock language="typescript" filename="advanced.ts" code={advanced} />

        <h2 className="text-2xl font-light mt-8 mb-3">Usage</h2>
        <h3 className="text-lg text-gray-300 mb-2">Create a Record</h3>
        <CodeBlock language="typescript" filename="create-record.ts" code={createRecord} />
        <h3 className="text-lg text-gray-300 mb-2">Record an Intervention</h3>
        <CodeBlock language="typescript" filename="intervene.ts" code={intervene} />
        <h3 className="text-lg text-gray-300 mb-2">Export Evidence Bundle</h3>
        <CodeBlock language="typescript" filename="export.ts" code={exportBundle} />

        <h2 className="text-2xl font-light mt-8 mb-3">Express.js Integration</h2>
        <CodeBlock language="typescript" filename="express.ts" code={express} />
      </main>
    </div>
  );
}
