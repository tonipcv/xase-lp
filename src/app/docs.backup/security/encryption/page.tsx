'use client';
import CodeBlock from '../../../../components/docs/CodeBlock';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';

export default function EncryptionPage() {
  const specs = `Layer              Algorithm         Key Management
At Rest            AES-256-GCM       AWS KMS
In Transit         TLS 1.3           Certificate rotation (90d)
Signatures         RSA-SHA256        AWS KMS (4096-bit)
Hash Chain         SHA-256           N/A (deterministic)`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Encryption</h1>
        <p className="text-lg text-gray-400 mb-8">Industry-standard encryption at every layer.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Encryption Specifications</h2>
        <CodeBlock language="text" code={specs} />

        <h2 className="text-2xl font-light mt-8 mb-3">Key Management</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>All keys managed via AWS KMS (FIPS 140-2 Level 3)</li>
          <li>Automatic key rotation every 90 days</li>
          <li>Keys never leave KMS hardware security modules</li>
          <li>Separate keys per customer for Enterprise tier</li>
        </ul>
      </main>
    </DocsContent>
  );
}
