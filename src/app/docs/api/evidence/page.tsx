'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function EvidenceAPIPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Evidence API
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          The Evidence API allows you to generate, retrieve, and verify cryptographic proof of data access, ensuring regulatory compliance and creating legal defensibility.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          API endpoints
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Generate Evidence Bundle</h3>
            <CodeBlock 
              language="bash" 
              code={`POST https://api.xase.ai/v1/evidence/bundles

# Request Body
{
  "session_id": "sess_7f6e5d4c",
  "purpose": "regulatory_audit",
  "format": "standard",  // standard, pdf, legal_bundle
  "include_operations": true
}

# Response (200 OK)
{
  "bundle_id": "bundle_a1b2c3d4",
  "status": "PROCESSING",
  "created_at": "2026-01-20T14:30:00Z",
  "estimated_completion": "2026-01-20T14:32:00Z",
  "session_id": "sess_7f6e5d4c"
}`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>This endpoint initiates the creation of an evidence bundle for a specific session.</p>
              <p>Bundle generation happens asynchronously. Poll the bundle status endpoint to check when it's ready.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Get Bundle Status</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/evidence/bundles/{bundle_id}

# Response (200 OK)
{
  "bundle_id": "bundle_a1b2c3d4",
  "status": "COMPLETED",  // PROCESSING, COMPLETED, FAILED
  "created_at": "2026-01-20T14:30:00Z",
  "completed_at": "2026-01-20T14:31:45Z",
  "session_id": "sess_7f6e5d4c",
  "size_bytes": 1457892,
  "download_url": "https://api.xase.ai/v1/evidence/bundles/bundle_a1b2c3d4/download",
  "contents": {
    "records": 157,
    "operations": 89,
    "timestamp_range": {
      "first": "2026-01-15T14:32:00Z",
      "last": "2026-01-20T14:28:12Z"
    }
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Download Bundle</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/evidence/bundles/{bundle_id}/download

# Response
# Binary file (application/zip)
# Contains evidence bundle as a ZIP file`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">List Evidence Bundles</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/evidence/bundles?session_id=sess_7f6e5d4c

# Query Parameters
# session_id (optional) - Filter by session ID
# status (optional) - Filter by status (PROCESSING, COMPLETED, FAILED)
# created_after (optional) - Filter by creation date
# created_before (optional) - Filter by creation date
# limit (optional) - Limit results (default: 20, max: 100)
# offset (optional) - Pagination offset

# Response (200 OK)
{
  "data": [
    {
      "bundle_id": "bundle_a1b2c3d4",
      "status": "COMPLETED",
      "created_at": "2026-01-20T14:30:00Z",
      "completed_at": "2026-01-20T14:31:45Z",
      "session_id": "sess_7f6e5d4c",
      "size_bytes": 1457892
    },
    {
      "bundle_id": "bundle_e5f6g7h8",
      "status": "COMPLETED",
      "created_at": "2026-01-15T18:12:00Z",
      "completed_at": "2026-01-15T18:14:22Z",
      "session_id": "sess_7f6e5d4c",
      "size_bytes": 982451
    }
  ],
  "pagination": {
    "total": 2,
    "limit": 20,
    "offset": 0,
    "has_more": false
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Verify Bundle</h3>
            <CodeBlock 
              language="bash" 
              code={`POST https://api.xase.ai/v1/evidence/verify

# Request Body
{
  "bundle_id": "bundle_a1b2c3d4"
}

# Alternative: Upload a bundle file
# POST https://api.xase.ai/v1/evidence/verify
# Content-Type: multipart/form-data
# bundle: [binary file]

# Response (200 OK)
{
  "verification": {
    "valid": true,
    "signature_valid": true,
    "chain_intact": true,
    "timestamps_valid": true,
    "contents_valid": true
  },
  "details": {
    "signing_authority": "Xase Certificate Authority",
    "signature_algorithm": "RSA-SHA256",
    "timestamp_authority": "SwissSign TSA",
    "records_count": 157,
    "operations_count": 89
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Bundle contents
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Standard Bundle</h3>
            <CodeBlock 
              language="text" 
              code={`evidence_bundle_{id}.zip
├── manifest.json            # Bundle metadata and integrity hashes
├── session.json             # Access session details
├── policy.json              # Policy that was applied
├── authorization.json       # Authorization details and signatures
├── records/                 # Records accessed in the session
│   ├── record_001.json
│   ├── record_002.json
│   └── ...
├── operations/              # Operations performed on records
│   ├── operation_001.json
│   ├── operation_002.json
│   └── ...
├── signatures/
│   ├── bundle.sig           # Signature of the entire bundle
│   ├── certificate.pem      # Xase signing certificate
│   └── timestamp_token.tst  # Qualified timestamp (eIDAS)
└── verify.sh                # Offline verification script`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>This is the standard bundle format containing all necessary proof elements.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Legal Bundle</h3>
            <CodeBlock 
              language="text" 
              code={`evidence_bundle_{id}.zip
├── [Standard Bundle Contents]
├── legal_documentation/
│   ├── legal_summary.pdf          # Legal summary of the evidence
│   ├── compliance_statement.pdf   # Compliance with regulations
│   ├── chain_of_custody.pdf       # Chain of custody documentation
│   └── expert_analysis.pdf        # Technical expert analysis
└── report.pdf                     # Complete evidence report in PDF format`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>The legal bundle includes additional documentation suitable for legal proceedings.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Manifest Format</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "bundle_id": "bundle_a1b2c3d4",
  "created_at": "2026-01-20T14:30:00Z",
  "version": "1.0",
  "session_id": "sess_7f6e5d4c",
  "format": "standard",
  "contents": [
    {
      "file": "session.json",
      "hash": "sha256:8a02a0ab12fe4c8b3487bb9f2aef57b82d90b7ec4e0b04ef9d731e8m7f7dfd1a"
    },
    {
      "file": "policy.json",
      "hash": "sha256:7f8e9d2b34a5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1"
    },
    {
      "file": "records/record_001.json",
      "hash": "sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
    },
    // ... more file hashes
  ],
  "merkle_root": "sha256:9f8e7d6c5b4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7"
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          SDK usage
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Generating Evidence</h3>
            <CodeBlock 
              language="python" 
              code={`import xase
import time

client = xase.Client(api_key="sk_...")

# Generate evidence bundle
bundle_request = client.evidence.create_bundle(
    session_id="sess_7f6e5d4c",
    purpose="regulatory_audit",
    format="legal_bundle",
    include_operations=True
)

# Poll for completion
while bundle_request.status == "PROCESSING":
    print("Processing bundle...")
    time.sleep(5)
    bundle_request.refresh()

if bundle_request.status == "COMPLETED":
    # Download bundle
    bundle_request.download("./evidence_bundle.zip")
    print(f"Bundle downloaded: {bundle_request.size_bytes} bytes")
else:
    print(f"Bundle generation failed: {bundle_request.error}")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Listing Evidence</h3>
            <CodeBlock 
              language="python" 
              code={`# List all evidence bundles
bundles = client.evidence.list_bundles(
    session_id="sess_7f6e5d4c",
    status="COMPLETED"
)

for bundle in bundles:
    print(f"Bundle {bundle.id}")
    print(f"Created: {bundle.created_at}")
    print(f"Size: {bundle.size_bytes} bytes")
    
    # Download specific bundle
    bundle.download(f"./evidence_{bundle.id}.zip")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Verifying Evidence</h3>
            <CodeBlock 
              language="python" 
              code={`# Verify bundle by ID
verification = client.evidence.verify_bundle(bundle_id="bundle_a1b2c3d4")

if verification.valid:
    print("Bundle is valid!")
    print(f"Signed by: {verification.details.signing_authority}")
    print(f"Timestamp: {verification.details.timestamp_authority}")
else:
    print("Bundle verification failed:")
    for error in verification.errors:
        print(f"- {error}")
        
# Verify local bundle file
with open("./evidence_bundle.zip", "rb") as f:
    local_verification = client.evidence.verify_bundle_file(f)
    
if local_verification.valid:
    print("Local bundle is valid!")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Working with Bundle Contents</h3>
            <CodeBlock 
              language="python" 
              code={`# Extract and parse bundle contents
import zipfile
import json
import os

# Extract bundle
with zipfile.ZipFile("./evidence_bundle.zip", "r") as zip_ref:
    zip_ref.extractall("./evidence_extracted")

# Read manifest
with open("./evidence_extracted/manifest.json") as f:
    manifest = json.load(f)

# Read session details
with open("./evidence_extracted/session.json") as f:
    session = json.load(f)
    
print(f"Session ID: {session['session_id']}")
print(f"Dataset: {session['dataset_id']}")

# Verify individual files against manifest
for content in manifest["contents"]:
    file_path = os.path.join("./evidence_extracted", content["file"])
    if os.path.exists(file_path):
        # Verify hash matches manifest
        # (implementation not shown)`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Regulatory value
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">EU AI Act Compliance</h3>
            <p className="text-[14px] text-neutral-500">
              Evidence bundles provide the required documentation for high-risk AI systems under Articles 11 and 14 of the EU AI Act, including technical documentation and activity logging.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">GDPR Compliance</h3>
            <p className="text-[14px] text-neutral-500">
              Satisfies GDPR Article 22 requirements for human oversight, transparency, and explainability of automated decision-making affecting individuals.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Court Admissibility</h3>
            <p className="text-[14px] text-neutral-500">
              eIDAS-qualified timestamps and cryptographic signatures ensure legal validity and court admissibility across EU jurisdictions.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Audit Readiness</h3>
            <p className="text-[14px] text-neutral-500">
              Provides complete, verified records for SOC 2, ISO 27001, and industry-specific audits with minimal preparation time.
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
            href="/docs/api/billing" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Billing API</span>
              <span className="text-[14px] text-neutral-600 ml-3">Manage usage metrics and billing</span>
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
              <span className="text-[15px] text-white">Verification Guide</span>
              <span className="text-[14px] text-neutral-600 ml-3">Learn how to verify bundles offline</span>
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
