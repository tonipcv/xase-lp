import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
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
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
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
    </div>
  );
}
