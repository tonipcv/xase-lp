'use client';
import Tabs from '../../../../components/docs/Tabs';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function GuideExportsPage() {
  const python = `bundle = client.exports.create(record_id=record.id, include_related=True)
# Download the ZIP file
bundle.download("./evidence_bundle.zip")`;

  const node = `const bundle = await xase.exports.create({ recordId: record.id, includeRelated: true });
await bundle.download('./evidence_bundle.zip');`;

  const layout = `evidence_txn_8a7f3b2c.zip
├── decision.json
├── explanation.json
├── intervention.json
├── model_card.json
├── policy.json
├── chain_proof.json
├── signature.sig
└── verify.sh`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Exporting Evidence</h1>
        <p className="text-lg text-gray-400 mb-8">Create a self-contained ZIP with everything auditors need. Verifiable offline.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Create Export</h2>
        <Tabs
          tabs={[
            { title: 'Python', content: <CodeBlock language="python" filename="export.py" code={python} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="export.ts" code={node} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">Bundle Layout</h2>
        <CodeBlock language="text" code={layout} />
        <Callout type="info">You can verify with <code className='text-gray-300'>verify.sh</code> without internet access.</Callout>
      </main>
    </DocsContent>
  );
}
