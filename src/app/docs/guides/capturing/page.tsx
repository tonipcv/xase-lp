import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function GuideCapturingPage() {
  const python = `import xase\n\nclient = xase.Client(api_key="xase_pk_...")\n\nrecord = client.records.create(\n    model_id="credit-model-v2",\n    input={\n        "customer_id": "cust_123",\n        "income": 85000,\n        "debt_ratio": 0.32,\n        "credit_score": 720\n    },\n    output={\n        "decision": "APPROVED",\n        "limit": 25000,\n        "interest_rate": 12.5\n    },\n    confidence=0.94,\n    idempotency_key="req_unique_123"\n)\n\nprint(record.id)`;

  const node = `import { Xase } from '@xase/sdk';\n\nconst xase = new Xase({ apiKey: process.env.XASE_API_KEY! });\n\nconst record = await xase.records.create({\n  modelId: 'credit-model-v2',\n  input: { customerId: 'cust_123', income: 85000, debtRatio: 0.32, creditScore: 720 },\n  output: { decision: 'APPROVED', limit: 25000, interestRate: 12.5 },\n  confidence: 0.94,\n  idempotencyKey: 'req_unique_123'\n});\n\nconsole.log(record.id);`;

  const curl = `curl -X POST https://api.xase.ai/v1/records \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "model_id": "credit-model-v2",
    "input": {"customer_id": "cust_123", "income": 85000, "debt_ratio": 0.32, "credit_score": 720},
    "output": {"decision": "APPROVED", "limit": 25000, "interest_rate": 12.5},
    "confidence": 0.94,
    "idempotency_key": "req_unique_123"
  }'`;

  const schema = `Field            Type      Required  Notes\nmodel_id         string    Yes       Which model produced the decision\ninput            object    Yes       Raw inputs (PII redaction is caller's responsibility)\noutput           object    Yes       Model result (decision + attributes)\nconfidence       number    No        0-1 score\nidempotency_key  string    No        Required for safe retries\npolicy_id        string    No        Business rules identifier at decision time\ncontext          object    No        Extra metadata (channel, session, etc.)\nexplanation      object    No        SHAP/LIME values if provided/auto-generated`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Capturing Decisions</h1>
        <p className="text-lg text-gray-400 mb-8">Capture every AI decision with enough context to survive audits and enable offline verification.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Request Schema</h2>
        <CodeBlock language="text" code={schema} />
        <Callout type="info">Include your internal reference (e.g., <code className='text-gray-300'>transaction_id</code>) in <code className='text-gray-300'>context</code> or a dedicated field.</Callout>

        <h2 className="text-2xl font-light mt-8 mb-3">Examples</h2>
        <Tabs
          tabs={[
            { title: 'Python', content: <CodeBlock language="python" filename="capture.py" code={python} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="capture.ts" code={node} /> },
            { title: 'cURL', content: <CodeBlock language="bash" code={curl} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><span className="text-white">Use idempotency keys:</span> make retries safe.</li>
          <li><span className="text-white">Attach business policy:</span> record <code className='text-gray-300'>policy_id</code> used at decision time.</li>
          <li><span className="text-white">Explainability:</span> enable SHAP/LIME capture for auditability.</li>
          <li><span className="text-white">PII:</span> redact sensitive inputs before sending, if required.</li>
        </ul>
      </main>
    </div>
  );
}
