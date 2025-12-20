'use client';
import CodeBlock from '../../../../components/docs/CodeBlock';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import Callout from '../../../../components/docs/Callout';

export default function ResidencyPage() {
  const regions = `Region         Location            Compliance
US East        Virginia (us-east-1)  SOC 2, HIPAA
EU Central     Frankfurt (eu-central-1)  GDPR, EU AI Act
Brazil         São Paulo (sa-east-1)  LGPD`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Data Residency</h1>
        <p className="text-lg text-gray-400 mb-8">Choose where your data is stored and processed.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Available Regions</h2>
        <CodeBlock language="text" code={regions} />

        <h2 className="text-2xl font-light mt-8 mb-3">Data Sovereignty</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Data never leaves your selected region</li>
          <li>Backups stored in same geographic area</li>
          <li>On-prem deployment available for Enterprise</li>
        </ul>

        <Callout type="info">Configure region in Dashboard → Settings → Data Residency</Callout>
      </main>
    </DocsContent>
  );
}
