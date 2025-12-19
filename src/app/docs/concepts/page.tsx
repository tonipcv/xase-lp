import Sidebar from '../../../components/docs/Sidebar';
import CodeBlock from '../../../components/docs/CodeBlock';
import Callout from '../../../components/docs/Callout';

export default function CoreConceptsPage() {
  const archDiagram = `Your App/API    XASE SDK          XASE Core                 Auditor\n    │             │                 │                        │\n    ├─ decision ─► capture()  ─────► immutable ledger        │\n    │             │                 │  (WORM + hash chain)   │\n    │             │                 │                        │\n    ├─ review  ──► intervene() ─────► signed HITL records    │\n    │             │                 │  (identity + ts)       │\n    │             │                 │                        │\n    │             │                 ├─ export()  ───────────►│\n    │             │                 │  evidence bundle       │\n    │             │                 │                        │\n    │             │                 ◄──────── verify.sh ◄────┘`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Core Concepts</h1>
        <p className="text-lg text-gray-400 mb-8">Understand how XASE captures decisions, links human oversight, and produces offline-verifiable evidence.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Architecture</h2>
        <CodeBlock language="text" code={archDiagram} />
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
          <li><span className="text-white">Immutable Ledger:</span> append-only (WORM) with hash chaining across records.</li>
          <li><span className="text-white">HITL Records:</span> interventions are signed and identity-linked with precise timestamps.</li>
          <li><span className="text-white">Evidence Bundles:</span> portable proof (ZIP) with verify.sh for offline validation.</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">Records</h2>
        <p className="text-gray-400 mb-3">A decision record contains input, output, model metadata, optional explanation data, and a chain/hash pointer.</p>
        <CodeBlock language="json" filename="record.json" code={`{
  "id": "rec_8a7f3b2c",
  "model_id": "credit-model-v2",
  "input": {"customer_id": "cust_123", "income": 85000},
  "output": {"decision": "APPROVED", "limit": 25000},
  "confidence": 0.94,
  "hash": "sha256:...",
  "previous_hash": "sha256:...",
  "created_at": "2025-01-15T14:32:00Z"
}`} />

        <h2 className="text-2xl font-light mt-8 mb-3">Interventions (HITL)</h2>
        <p className="text-gray-400 mb-3">When a human approves, rejects, or overrides, the action is signed and bound to the actor identity.</p>
        <CodeBlock language="json" filename="intervention.json" code={`{
  "id": "int_7f6e5d4c",
  "record_id": "rec_8a7f3b2c",
  "actor_email": "analyst@company.com",
  "action": "OVERRIDE",
  "reason": "Documentation verified",
  "signature": "RSA-SHA256:...",
  "signed_at": "2025-01-15T14:35:00Z"
}`} />

        <h2 className="text-2xl font-light mt-8 mb-3">Evidence Bundles</h2>
        <p className="text-gray-400 mb-3">Each bundle includes the decision, explanation, interventions, model card, policy snapshot, chain proof, signature, and verification script.</p>
        <CodeBlock language="text" code={`evidence_txn_8a7f3b2c.zip
├── decision.json
├── explanation.json
├── intervention.json
├── model_card.json
├── policy.json
├── chain_proof.json
├── signature.sig
└── verify.sh`} />

        <Callout type="tip">Auditors run verify.sh in air‑gapped environments. No API calls. No vendor dependency.</Callout>

        <h2 className="text-2xl font-light mt-8 mb-3">Security & Compliance</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Crypto: SHA-256 hashing, RSA-SHA256 signatures via KMS.</li>
          <li>Controls: WORM storage, SQL triggers to prevent edits.</li>
          <li>Mapping: EU AI Act (Art. 11/14), LGPD, SOC 2, ISO 27001.</li>
        </ul>
      </main>
    </div>
  );
}
