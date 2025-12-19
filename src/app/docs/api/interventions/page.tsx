import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function ApiInterventionsPage() {
  const baseUrl = 'https://api.xase.ai/v1';

  const createCurl = `curl -X POST ${baseUrl}/records/rec_8a7f3b2c/intervene \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "actor_email": "joao.silva@company.com",
    "action": "OVERRIDE",
    "reason": "Additional documentation verified",
    "new_outcome": {
      "decision": "APPROVED",
      "credit_limit": 30000
    },
    "evidence_urls": [
      "https://storage.company.com/docs/collateral_123.pdf"
    ],
    "metadata": {
      "review_duration_seconds": 340
    }
  }'`;

  const createPython = `intervention = client.records.intervene(
  record_id="rec_8a7f3b2c",
  actor_email="joao.silva@company.com",
  action="OVERRIDE",
  new_outcome={"decision": "APPROVED", "credit_limit": 30000},
  reason="Additional documentation verified",
  evidence_urls=["https://storage.company.com/docs/collateral_123.pdf"],
  metadata={"review_duration_seconds": 340}
)`;

  const createNode = `const intervention = await xase.records.intervene({
  recordId: 'rec_8a7f3b2c',
  actorEmail: 'joao.silva@company.com',
  action: 'OVERRIDE',
  newOutcome: { decision: 'APPROVED', creditLimit: 30000 },
  reason: 'Additional documentation verified',
  evidenceUrls: ['https://storage.company.com/docs/collateral_123.pdf'],
  metadata: { reviewDurationSeconds: 340 }
});`;

  const response = `{
  "id": "int_7f6e5d4c3b2a1098",
  "record_id": "rec_8a7f3b2c4d5e6f7a",
  "actor_email": "joao.silva@company.com",
  "action": "OVERRIDE",
  "reason": "Additional documentation verified",
  "new_outcome": { "decision": "APPROVED", "credit_limit": 30000 },
  "signature": "RSA-SHA256:abc123...",
  "signed_at": "2025-01-15T14:35:00.000Z"
}`;

  const fields = `Field           Type     Required  Description
actor_email     string   Yes       Email of the human reviewer
action          string   Yes       APPROVED, REJECTED, OVERRIDE, ESCALATED
reason          string   Yes       Explanation for the action
new_outcome     object   If OVERRIDE  The new decision
evidence_urls   array    No        Links to documents
metadata        object   No        Additional data`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">API Reference: Interventions</h1>
        <p className="text-lg text-gray-400 mb-8">Endpoints for recording human-in-the-loop actions on decisions.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Create Intervention — POST /records/{'{id}'}/intervene</h2>
        <CodeBlock language="text" code={fields} />
        <Tabs
          tabs={[
            { title: 'cURL', content: <CodeBlock language="bash" code={createCurl} /> },
            { title: 'Python', content: <CodeBlock language="python" filename="intervene.py" code={createPython} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="intervene.ts" code={createNode} /> },
          ]}
        />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={response} />

        <Callout type="info">All interventions are signed with RSA-SHA256 and identity-linked. Timestamps must be strictly monotonic with the decision.</Callout>
      </main>
    </div>
  );
}
