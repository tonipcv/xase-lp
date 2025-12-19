import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function GuideHITLPage() {
  const python = `intervention = client.records.intervene(
  record_id=record.id,
  actor_email="analyst@company.com",
  action="APPROVED",  # or REJECTED, OVERRIDE, ESCALATED
  reason="Documentation verified manually"
)`;

  const node = `const intervention = await xase.records.intervene({
  recordId: record.id,
  actorEmail: 'analyst@company.com',
  action: 'APPROVED',
  reason: 'Documentation verified manually'
});`;

  const override = `# OVERRIDE requires new_outcome
intervention = client.records.intervene(
  record_id=record.id,
  actor_email="analyst@company.com",
  action="OVERRIDE",
  new_outcome={
    "decision": "APPROVED",
    "limit": 30000,
  },
  reason="Additional collateral provided"
)`;

  const payload = `Field           Type     Required        Notes
actor_email     string   Yes             Human identity (email)
action          string   Yes             APPROVED | REJECTED | OVERRIDE | ESCALATED
reason          string   Yes             Why the human acted
new_outcome     object   If OVERRIDE     New decision payload
evidence_urls   array    No              Links to documents
metadata        object   No              Extra info (duration, checklist)`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Human‑in‑the‑Loop (HITL)</h1>
        <p className="text-lg text-gray-400 mb-8">Record signed, identity‑linked human interventions on AI decisions.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">When to record</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Approval/rejection of an AI decision.</li>
          <li>Override: human changes the outcome (requires <code className='text-gray-300'>new_outcome</code>).</li>
          <li>Escalation events for audit trail completeness.</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">Payload</h2>
        <CodeBlock language="text" code={payload} />

        <h2 className="text-2xl font-light mt-8 mb-3">Examples</h2>
        <Tabs
          tabs={[
            { title: 'Python (approve)', content: <CodeBlock language="python" filename="approve.py" code={python} /> },
            { title: 'Node.js (approve)', content: <CodeBlock language="typescript" filename="approve.ts" code={node} /> },
            { title: 'Python (override)', content: <CodeBlock language="python" filename="override.py" code={override} /> },
          ]}
        />

        <Callout type="info">HITL records are signed (RSA‑SHA256), timestamped, and linked to identity. They are included in the evidence bundle.</Callout>
      </main>
    </div>
  );
}
