import Sidebar from '../../../../components/docs/Sidebar';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function CertificationsPage() {
  const certs = `Certification   Status        Audit Frequency
SOC 2 Type II   Certified     Annual
ISO 27001       Certified     Annual
GDPR            Compliant     Continuous
HIPAA           Available     On request (Enterprise)`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Certifications</h1>
        <p className="text-lg text-gray-400 mb-8">Industry-recognized security and compliance certifications.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Current Certifications</h2>
        <CodeBlock language="text" code={certs} />

        <h2 className="text-2xl font-light mt-8 mb-3">Audit Reports</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>SOC 2 Type II reports available under NDA</li>
          <li>Penetration testing performed quarterly</li>
          <li>Vulnerability disclosure program active</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">Request Reports</h2>
        <p className="text-gray-400">Contact <a href="mailto:security@xase.ai" className="text-white hover:underline">security@xase.ai</a> to request audit reports.</p>
      </main>
    </div>
  );
}
