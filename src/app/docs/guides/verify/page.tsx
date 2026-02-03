'use client';

import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function VerifyGuidePage() {
  const offline = `# Extract the bundle
unzip evidence_bundle.zip

# Run verification
chmod +x verify.sh
./verify.sh

# Expected output:
# ✓ Signature valid
# ✓ Manifest hashes match
# ✓ Hash chain intact
# ✓ Timestamps consistent
# RESULT: Evidence bundle is AUTHENTIC`;

  const whatVerified = `Check             What it proves
Signature         Bundle was signed and not modified after issuance
Manifest          Files match declared hashes in the bundle manifest
Hash chain        Session/record chain pointers are consistent
Timestamps        Evidence timestamps are consistent and ordered`;

  const manual = `# 1) Verify signature (manual)
openssl x509 -in certificate.pem -pubkey -noout > pubkey.pem
openssl dgst -sha256 -verify pubkey.pem -signature signatures/bundle.sig manifest.json
# Output: Verified OK

# 2) Verify manifest hashes
python3 - <<'PY'
import hashlib, json, pathlib
manifest = json.loads(pathlib.Path('manifest.json').read_text())
for entry in manifest['files']:
  p = pathlib.Path(entry['path'])
  digest = hashlib.sha256(p.read_bytes()).hexdigest()
  assert digest == entry['sha256'], (entry['path'], 'hash mismatch')
print('Manifest OK')
PY`;

  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Verification
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Verify evidence bundles offline. Auditors can validate integrity in air-gapped environments.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Offline verification
        </h2>
        <CodeBlock language="bash" filename="verify.sh" code={offline} />
        <div className="mt-4">
          <Callout type="tip">Offline verification requires no API calls and no dependency on Xase infrastructure.</Callout>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          What gets verified
        </h2>
        <CodeBlock language="text" code={whatVerified} />
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Manual verification (advanced)
        </h2>
        <CodeBlock language="bash" code={manual} />
      </section>

      <div className="mt-20 pt-8 border-t border-neutral-800/50 flex items-center justify-between text-[13px] text-neutral-600">
        <span>© 2025 Xase</span>
        <a href="mailto:founders@xase.ai" className="hover:text-neutral-400 transition-colors">
          founders@xase.ai
        </a>
      </div>
    </DocsContent>
  );
}
