import CodeBlock from '../../../components/docs/CodeBlock';
import DocsContent from '../../../components/docs/DocsContent';
import Callout from '../../../components/docs/Callout';

export default function CoreConceptsPage() {
  const archDiagram = `AI Lab/       XASE SDK          XASE Core                 Auditor
Data Holder       │                 │                        │
    │             │                 │                        │
    ├─── data ───► access()    ────► Policy Engine           │
    │             │                 │  (runtime governance)  │
    │             │                 │                        │
    │             │                 ▼                        │
    │             │                 │  Session Management    │
    │             │                 │  (tracking + proof)    │
    │             │                 │                        │
    │             │                 ▼                        │
    │             │                 │  Evidence Bundle  ────►│
    │             │                 │  (cryptographic proof) │
    │             │                 │                        │
    │             │                 ◄──── verify.sh ◄────────┘`;

  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Core Concepts
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Xase enables legally valid AI data usage through runtime governance, cryptographic proof, and automated billing.
        </p>
      </div>
      
      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Architecture
        </h2>
        <CodeBlock language="text" code={archDiagram} />
        <div className="mt-6 space-y-4">
          <p className="text-[15px] text-neutral-400">
            Xase provides three core components that work together to enable governed data access:
          </p>
          <ul className="space-y-3 ml-4 text-[14px] text-neutral-500">
            <li>— <span className="text-white">Policy Engine:</span> Runtime enforcement of access policies</li>
            <li>— <span className="text-white">Evidence System:</span> Cryptographic proof of compliant data usage</li>
            <li>— <span className="text-white">Billing System:</span> Automatic usage metering and settlement</li>
          </ul>
        </div>

      </section>
      
      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Policy Engine
        </h2>
        <p className="text-[15px] text-neutral-400 mb-4">
          The Policy Engine determines whether AI can access data in real-time—at the exact moment of use.
        </p>
        <CodeBlock language="json" filename="policy.json" code={`{
  "id": "policy_medical_research",
  "name": "Medical Research Access",
  "rules": [
    {
      "allowed_models": ["research-v1", "research-v2"],
      "allowed_purposes": ["training", "validation"],
      "max_duration": "30d",
      "jurisdictions": ["EU", "UK"],
      "require_approval": true
    }
  ],
  "rejection_behavior": "block_access"
}`} />
        
        <div className="mt-6 space-y-2 text-[14px] text-neutral-500">
          <p>The Policy Engine evaluates each access request against defined rules, ensuring:</p>
          <ul className="space-y-1 ml-4">
            <li>— <span className="text-neutral-300">Only authorized models</span> can access specific datasets</li>
            <li>— <span className="text-neutral-300">Purpose limitations</span> are enforced</li>
            <li>— <span className="text-neutral-300">Time restrictions</span> are respected</li>
            <li>— <span className="text-neutral-300">Regulatory requirements</span> are satisfied</li>
          </ul>
        </div>

      </section>
      
      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Access Sessions
        </h2>
        <p className="text-[15px] text-neutral-400 mb-4">
          Access Sessions enable AI systems to use real data with strict governance and evidence generation.
        </p>
        <CodeBlock language="json" filename="session.json" code={`{
  "session_id": "sess_7f6e5d4c",
  "dataset_id": "medical-records-2025",
  "status": "ACTIVE",
  "created_at": "2026-01-15T14:30:00Z",
  "expires_at": "2026-02-14T14:30:00Z",
  "purpose": "model-training",
  "model_id": "research-v2",
  "requester": {
    "id": "user_123abc",
    "email": "researcher@ai-lab.com"
  },
  "policy_id": "policy_medical_research",
  "usage_stats": {
    "records_accessed": 12547,
    "operations_performed": 89
  }
}`} />
        
        <div className="mt-6 space-y-2 text-[14px] text-neutral-500">
          <p>Each session provides a governed interface to data:</p>
          <ul className="space-y-1 ml-4">
            <li>— <span className="text-neutral-300">Policy-approved access</span> to specific datasets</li>
            <li>— <span className="text-neutral-300">Purpose-bound operations</span> that track all usage</li>
            <li>— <span className="text-neutral-300">Time-limited duration</span> with automatic expiration</li>
            <li>— <span className="text-neutral-300">Revocable access</span> at any time by data holders</li>
          </ul>
        </div>

      </section>
      
      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Evidence Bundles
        </h2>
        <p className="text-[15px] text-neutral-400 mb-4">
          Evidence Bundles are cryptographically-signed packages providing court-ready proof of compliant data usage.
        </p>
        <CodeBlock language="text" code={`evidence_bundle_a1b2c3d4.zip
├── manifest.json            # Bundle metadata and integrity hashes
├── session.json             # Access session details
├── policy.json              # Policy that was applied
├── authorization.json       # Authorization details and signatures
├── usage_logs.json          # Access and operation logs
├── signatures/
│   ├── bundle.sig           # Signature of the entire bundle
│   ├── certificate.pem      # Xase signing certificate
│   └── timestamp_token.tst  # Qualified timestamp (eIDAS)
└── verify.sh                # Offline verification script`} />

        <div className="mt-6 p-4 border border-blue-800/30 bg-blue-900/10 rounded-lg">
          <p className="text-[14px] text-neutral-400">
            <strong className="text-blue-300">Pro tip:</strong> Auditors and regulators can verify bundles in air-gapped environments without depending on Xase.
          </p>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Billing & settlement
        </h2>
        <p className="text-[15px] text-neutral-400 mb-4">
          Automatic usage tracking and billing ensures transparent and accurate financial transactions.
        </p>
        <CodeBlock language="json" filename="usage_metrics.json" code={`{
  "session_id": "sess_7f6e5d4c",
  "time_metrics": {
    "session_duration_hours": 6.25,
    "active_time_minutes": 217.4
  },
  "volume_metrics": {
    "records_accessed": 15273,
    "total_data_gb": 2.47
  },
  "operation_metrics": {
    "read_operations": 157,
    "filter_operations": 23,
    "transform_operations": 45,
    "total_operations": 225
  }
}`} />

        <div className="mt-6 space-y-2 text-[14px] text-neutral-500">
          <p>The billing system provides:</p>
          <ul className="space-y-1 ml-4">
            <li>— <span className="text-neutral-300">Automatic metering</span> of all data usage</li>
            <li>— <span className="text-neutral-300">Transparent pricing</span> with usage breakdowns</li>
            <li>— <span className="text-neutral-300">Automatic settlement</span> between parties</li>
            <li>— <span className="text-neutral-300">Usage controls</span> with spending limits and alerts</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Security & compliance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Security</h3>
            <ul className="space-y-2 text-[14px] text-neutral-500 ml-3">
              <li>— SHA-256 hashing, RSA-SHA256 signatures</li>
              <li>— KMS-managed encryption keys</li>
              <li>— Write-once-read-many (WORM) storage</li>
              <li>— End-to-end encryption for all data</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Compliance</h3>
            <ul className="space-y-2 text-[14px] text-neutral-500 ml-3">
              <li>— EU AI Act (Articles 11 & 14)</li>
              <li>— LGPD (Brazilian data protection)</li>
              <li>— SOC 2 (Trust Services Criteria)</li>
              <li>— ISO 27001 (Information security)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
          Next steps
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/docs/guides/policy" className="p-4 border border-neutral-800 rounded-lg hover:bg-white/[0.02] transition-colors">
            <div className="text-[15px] font-medium text-white mb-1">Policy Engine</div>
            <div className="text-[14px] text-neutral-600">Learn how to configure policies</div>
          </a>
          <a href="/docs/guides/bundles" className="p-4 border border-neutral-800 rounded-lg hover:bg-white/[0.02] transition-colors">
            <div className="text-[15px] font-medium text-white mb-1">Evidence Bundles</div>
            <div className="text-[14px] text-neutral-600">Understand cryptographic evidence</div>
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
    </DocsContent>
  );
}
