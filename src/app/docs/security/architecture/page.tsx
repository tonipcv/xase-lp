import Sidebar from '../../../../components/docs/Sidebar';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function SecurityArchitecturePage() {
  const arch = `┌─────────────┐
│   Your App  │
└──────┬──────┘
       │ HTTPS/TLS 1.3
       ▼
┌─────────────────────┐
│   XASE API Gateway  │
│   (Rate limiting)   │
└──────┬──────────────┘
       │
       ▼
┌──────────────────────┐
│  Immutable Ledger    │
│  (WORM + Hash Chain) │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  AWS KMS Signing     │
│  (RSA-SHA256)        │
└──────────────────────┘`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Security Architecture</h1>
        <p className="text-lg text-gray-400 mb-8">Multi-layered security with encryption, immutability, and cryptographic signing.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">System Architecture</h2>
        <CodeBlock language="text" code={arch} />

        <h2 className="text-2xl font-light mt-8 mb-3">Security Layers</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><span className="text-white">Transport:</span> TLS 1.3 for all API calls</li>
          <li><span className="text-white">Storage:</span> AES-256 encryption at rest</li>
          <li><span className="text-white">Immutability:</span> WORM storage + SQL triggers prevent edits</li>
          <li><span className="text-white">Integrity:</span> SHA-256 hash chains link records</li>
          <li><span className="text-white">Signatures:</span> RSA-SHA256 via AWS KMS</li>
          <li><span className="text-white">Access Control:</span> RBAC + API key scopes</li>
        </ul>

        <Callout type="info">All evidence bundles are verifiable offline without trusting XASE infrastructure.</Callout>
      </main>
    </div>
  );
}
