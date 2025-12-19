import Sidebar from '../../../../components/docs/Sidebar';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function EUAIActPage() {
  const mapping = `Article   Requirement              XASE Solution
Art. 11   Model documentation      Model cards with version, hash, metrics
Art. 14   Human oversight          Signed HITL records with identity + timestamp
Art. 15   Accuracy/Robustness      Evidence bundles + registry checks
Art. 12   Record keeping           Immutable ledger (WORM + hash chain)
Art. 13   Transparency             SHAP/LIME explanations in every bundle`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">EU AI Act Compliance</h1>
        <p className="text-lg text-gray-400 mb-8">XASE maps directly to high-risk system requirements: oversight, traceability, documentation.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Article Mapping</h2>
        <CodeBlock language="text" code={mapping} />

        <h2 className="text-2xl font-light mt-8 mb-3">Key Requirements</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><span className="text-white">Art. 11 — Technical Documentation:</span> Model cards capture version, hash, performance metrics, intended use.</li>
          <li><span className="text-white">Art. 14 — Human Oversight:</span> Every intervention is signed, timestamped, and identity-linked.</li>
          <li><span className="text-white">Art. 15 — Accuracy & Robustness:</span> Evidence bundles include model registry verification.</li>
        </ul>

        <Callout type="info">This is technical mapping. Consult legal counsel for compliance certification.</Callout>
      </main>
    </div>
  );
}
