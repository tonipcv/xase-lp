import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function EvidenceBundlesPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Evidence Bundles
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Evidence Bundles are cryptographically-signed packages containing all proof needed to verify AI data access was authorized, governed, and properly executed.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          What are evidence bundles
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            An Evidence Bundle is a <span className="text-white">tamper-proof package</span> of all proof related to data access, automatically generated for every session.
          </p>
          <p>
            Each bundle contains:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Access details</span> — Who accessed what, when, why</li>
            <li>— <span className="text-neutral-300">Policy proof</span> — What rules were applied and evaluated</li>
            <li>— <span className="text-neutral-300">Authorization chain</span> — Who approved the access</li>
            <li>— <span className="text-neutral-300">Usage logs</span> — What operations were performed</li>
            <li>— <span className="text-neutral-300">Cryptographic signatures</span> — Tamper-proof verification</li>
          </ul>
          <p className="pt-2">
            Evidence Bundles are designed to be <span className="text-white">court-ready</span> and <span className="text-white">auditor-accepted</span>.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Bundle contents
        </h2>
        
        <CodeBlock 
          language="text"
          code={`evidence_bundle_a1b2c3.zip
├── manifest.json            # Bundle metadata and integrity hashes
├── session.json             # Access session details
├── policy.json              # Policy that was applied
├── authorization.json       # Authorization details and signatures
├── usage_logs.json          # Access and operation logs
├── signatures/
│   ├── bundle.sig           # Signature of the entire bundle
│   ├── certificate.pem      # Xase signing certificate
│   └── timestamp_token.tst  # Qualified timestamp (eIDAS)
└── verify.sh                # Offline verification script`}
        />
        
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Bundle Manifest</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              The manifest contains metadata and integrity hashes:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "bundle_id": "bundle_a1b2c3d4",
  "created_at": "2026-01-15T14:32:00Z",
  "version": "1.0",
  "session_id": "sess_7f6e5d4c",
  "contents": [
    {
      "file": "session.json",
      "hash": "sha256:8a02a0ab12fe4c8b3487bb9f2aef57b82d90b7ec4e0b04ef9d731e8m7f7dfd1a"
    },
    {
      "file": "policy.json",
      "hash": "sha256:7f8e9d2b34a5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1"
    },
    // ...more file hashes
  ],
  "merkle_root": "sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Session Details</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Complete details of the access session:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "session_id": "sess_7f6e5d4c",
  "created_at": "2026-01-15T14:30:00Z",
  "expires_at": "2026-02-14T14:30:00Z",
  "status": "COMPLETED",
  "dataset": {
    "id": "dataset_medical_records_2025",
    "name": "Medical Records 2025",
    "owner": "Metropolitan Hospital"
  },
  "purpose": "model-training",
  "requester": {
    "id": "user_a1b2c3",
    "name": "AI Research Team",
    "email": "ai-team@research.org",
    "organization": "Medical AI Research"
  },
  "model": {
    "id": "model_diagnostic_v2",
    "version": "2.1.3",
    "hash": "sha256:f1e2d3c4b5a6978d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d"
  },
  "usage_summary": {
    "started_at": "2026-01-15T14:32:00Z",
    "ended_at": "2026-01-15T18:47:32Z",
    "records_accessed": 15273,
    "operations_performed": 127
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Policy and Authorization</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Detailed policy and authorization chain:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "policy_id": "policy_medical_research",
  "version": "1.2",
  "created_at": "2025-12-01T09:15:00Z",
  "rules": [
    {
      "allowed_models": ["model_diagnostic_v1", "model_diagnostic_v2"],
      "allowed_purposes": ["model-training", "validation"],
      "max_duration": "30d",
      "jurisdictions": ["EU", "UK"],
      "require_approval": true
    }
  ],
  "authorization": {
    "authorized_by": "admin@hospital.org",
    "authorized_at": "2026-01-15T14:28:45Z",
    "authorization_id": "auth_b2c3d4",
    "ip_address": "203.0.113.42",
    "auth_method": "2FA",
    "auth_signature": "RSA-SHA256:..."
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Working with bundles
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Generating Evidence</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Evidence is automatically generated for every session:
            </p>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Access session (this automatically creates evidence)
session = client.access(
    dataset="medical-records-2024",
    purpose="model-training",
    duration="30d"
)

# Use the session...
for batch in session.stream():
    model.train(batch)

# Get evidence bundle when done
evidence = session.get_evidence()
print(evidence.url)  # "https://xase.ai/evidence/bundle_a8f2c..."

# Download for offline verification
evidence.download("./session_evidence.zip")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Verifying Evidence</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Evidence bundles can be verified offline by auditors:
            </p>
            <CodeBlock 
              language="bash" 
              code={`# Extract the bundle
unzip evidence_bundle.zip
cd evidence_bundle

# Run verification script
./verify.sh

# Expected output:
# ✓ Bundle signature verified (RSA-SHA256)
# ✓ Certificate chain valid
# ✓ Timestamp token valid (TSA: SwissSign AG)
# ✓ File integrity verified (all hashes match)
# ✓ Session details intact
# ✓ Policy evaluation verified
# ✓ Authorization valid
# 
# RESULT: Evidence bundle AUTHENTIC`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">API Access to Evidence</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Retrieve and manage evidence programmatically:
            </p>
            <CodeBlock 
              language="python" 
              code={`# List all evidence bundles
bundles = client.evidence.list(
    dataset="medical-records-2024",
    date_from="2026-01-01",
    date_to="2026-01-31"
)

for bundle in bundles:
    print(f"Bundle {bundle.id}, Session: {bundle.session_id}")
    print(f"Created: {bundle.created_at}")
    print(f"Status: {bundle.status}")
    
# Get specific bundle
bundle = client.evidence.get("bundle_a1b2c3d4")

# Download bundle
bundle.download("./evidence.zip")

# Verify bundle
verification = client.evidence.verify("bundle_a1b2c3d4")
print(f"Verification status: {verification.status}")`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Legal considerations
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Court Admissibility</h3>
            <p className="text-[14px] text-neutral-500">
              Evidence bundles are designed to be admissible in court with cryptographic proof of integrity.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Qualified Timestamps</h3>
            <p className="text-[14px] text-neutral-500">
              eIDAS-qualified timestamps are included for full legal validity in EU jurisdictions.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Chain of Custody</h3>
            <p className="text-[14px] text-neutral-500">
              Complete chain of custody from data owner through to AI system with identity verification.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Regulatory Alignment</h3>
            <p className="text-[14px] text-neutral-500">
              Designed to satisfy EU AI Act, GDPR, and other regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
          Next steps
        </h2>
        
        <div className="space-y-3">
          <a 
            href="/docs/guides/audit" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Audit Trail</span>
              <span className="text-[14px] text-neutral-600 ml-3">Track all activity with the evidence system</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <a 
            href="/docs/guides/verify" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Verification</span>
              <span className="text-[14px] text-neutral-600 ml-3">Learn advanced verification methods</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
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
