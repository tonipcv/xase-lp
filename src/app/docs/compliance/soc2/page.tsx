import Sidebar from '../../../../components/docs/Sidebar';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function SOC2Page() {
  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">SOC 2 Compliance</h1>
        <p className="text-lg text-gray-400 mb-8">Immutable audit trails and access controls for trust service criteria.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Trust Service Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><span className="text-white">Security:</span> AES-256 encryption at rest, TLS 1.3 in transit, RSA-SHA256 signatures.</li>
          <li><span className="text-white">Availability:</span> Multi-region deployment, 99.9% SLA.</li>
          <li><span className="text-white">Processing Integrity:</span> Hash chains prevent tampering, WORM storage.</li>
          <li><span className="text-white">Confidentiality:</span> RBAC + API key scopes.</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">Audit Logging</h2>
        <CodeBlock language="text" code={`Every action logged:
- Record creation
- Intervention
- Export request
- Alert resolution

All logs are immutable and included in audit reports.`} />

        <Callout type="info">XASE provides immutable audit trails required for SOC 2 Type II certification.</Callout>
      </main>
    </div>
  );
}
