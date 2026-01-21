'use client';
import CodeBlock from '../../../../components/docs/CodeBlock';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import Callout from '../../../../components/docs/Callout';

export default function LGPDPage() {
  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">LGPD Compliance</h1>
        <p className="text-lg text-gray-400 mb-8">Right to explanation and accountability for automated decisions.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Key Articles</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><span className="text-white">Art. 20 — Right to Explanation:</span> SHAP/LIME values included in every evidence bundle.</li>
          <li><span className="text-white">Accountability:</span> Human interventions are identity-linked with cryptographic signatures.</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">XASE Implementation</h2>
        <CodeBlock language="json" code={`{
  "explanation": {
    "method": "SHAP",
    "values": {"income": 0.35, "debt_ratio": -0.28}
  },
  "intervention": {
    "actor_email": "analyst@company.com",
    "signature": "RSA-SHA256:..."
  }
}`} />

        <Callout type="info">LGPD requires transparency in automated decision-making. XASE provides cryptographic proof of human oversight and explainability.</Callout>
      </main>
    </DocsContent>
  );
}
