'use client';
import CodeBlock from '../../../../components/docs/CodeBlock';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import Callout from '../../../../components/docs/Callout';

export default function GuideVerifyPage() {
  const offline = `# Extract the bundle
unzip evidence_bundle.zip
cd evidence_bundle

# Run verification
./verify.sh

# Expected output:
# ✓ Checking signature... Valid (RSA-SHA256)
# ✓ Checking hash chain... Intact (block 847 of 12,847)
# ✓ Checking timestamps... Consistent
# ✓ Checking model registry... Hash matches credit-scoring-v4.2.1
# 
# RESULT: Evidence bundle is AUTHENTIC`;

  const whatVerified = `Check             What It Proves
Signature         Bundle was signed by XASE KMS, not modified after
Hash Chain        This record links to previous/next records correctly
Timestamps        Decision and intervention times are consistent
Model Hash        Model version matches registered model card
Actor Identity    Human reviewer's identity is cryptographically bound`;

  const manual = `# 1) Verify Signature (manual)
openssl x509 -in certificate.pem -pubkey -noout > pubkey.pem
openssl dgst -sha256 -verify pubkey.pem -signature signature.sig decision.json
# Output: Verified OK

# 2) Verify Record Hash
python3 - <<'PY'
import hashlib, json
with open('decision.json') as f:
  decision = json.load(f)
record_hash = hashlib.sha256(
  json.dumps(decision, sort_keys=True).encode()
).hexdigest()
assert record_hash == decision['hash']
print('Hash OK')
PY

# 3) Verify Timestamps
python3 - <<'PY'
from datetime import datetime
import json
with open('decision.json') as f:
  decision = json.load(f)
with open('intervention.json') as f:
  intervention = json.load(f)
assert datetime.fromisoformat(intervention['signed_at']) > datetime.fromisoformat(decision['created_at'])
print('Timestamps OK')
PY`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Verifying Bundles</h1>
        <p className="text-lg text-gray-400 mb-8">Verify a XASE evidence bundle offline. Auditors can validate integrity in air-gapped environments.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Offline Verification</h2>
        <CodeBlock language="bash" filename="verify.sh" code={offline} />

        <h2 className="text-2xl font-light mt-8 mb-3">What Gets Verified</h2>
        <CodeBlock language="text" code={whatVerified} />
        <Callout type="info">Public key/certificates and chain proofs are included in the bundle.</Callout>

        <h2 className="text-2xl font-light mt-8 mb-3">Manual Verification (Advanced)</h2>
        <CodeBlock language="bash" code={manual} />
      </main>
    </DocsContent>
  );
}
