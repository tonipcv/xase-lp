import Sidebar from '../../../../components/docs/Sidebar';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function StandardsPage() {
  const standards = `Standard      Coverage
ISO 27001     Information security management
ISO 42001     AI management system
GDPR          Data protection and privacy
FCRA          Fair credit reporting (US)
NYC Local 144 Automated employment decisions`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Evidence Standards</h1>
        <p className="text-lg text-gray-400 mb-8">XASE aligns with international standards for AI governance and evidence management.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Supported Standards</h2>
        <CodeBlock language="text" code={standards} />

        <h2 className="text-2xl font-light mt-8 mb-3">Evidence Bundle Structure</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Decision record (input, output, model metadata)</li>
          <li>Explanation (SHAP/LIME values)</li>
          <li>Intervention records (signed, timestamped)</li>
          <li>Model card (version, hash, metrics)</li>
          <li>Policy snapshot (business rules at decision time)</li>
          <li>Chain proof (previous/next record hashes)</li>
          <li>Cryptographic signature (RSA-SHA256)</li>
          <li>Verification script (verify.sh)</li>
        </ul>
      </main>
    </div>
  );
}
