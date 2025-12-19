import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function ApiExportsPage() {
  const baseUrl = 'https://api.xase.ai/v1';

  const createCurl = `curl -X POST ${baseUrl}/exports \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "record_id": "rec_8a7f3b2c",
    "include_related": true,
    "format": "zip"
  }'`;

  const createPython = `export = client.exports.create(
  record_id="rec_8a7f3b2c",
  include_related=True,
  format="zip"
)
print(export.id)
export.download("./evidence_bundle.zip")`;

  const createNode = `const job = await xase.exports.create({
  recordId: 'rec_8a7f3b2c',
  includeRelated: true,
});
await job.download('./evidence_bundle.zip');`;

  const statusCurl = `curl -X GET ${baseUrl}/exports/exp_abc123 \
  -H "Authorization: Bearer xase_pk_..."`;

  const response = `{
  "id": "exp_abc123",
  "status": "ready",
  "download_url": "https://exports.xase.ai/exp_abc123.zip?token=...",
  "expires_at": "2025-01-15T15:32:00.000Z",
  "file_size": 15234,
  "records_count": 1
}`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">API Reference: Exports</h1>
        <p className="text-lg text-gray-400 mb-8">Endpoints for creating and retrieving evidence bundles.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Create Export — POST /exports</h2>
        <Tabs
          tabs={[
            { title: 'cURL', content: <CodeBlock language="bash" code={createCurl} /> },
            { title: 'Python', content: <CodeBlock language="python" filename="create_export.py" code={createPython} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="create_export.ts" code={createNode} /> },
          ]}
        />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={response} />

        <h2 className="text-2xl font-light mt-8 mb-3">Get Export Status — GET /exports/{'{id}'}</h2>
        <CodeBlock language="bash" code={statusCurl} />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={response} />

        <Callout type="info">Exports are time-limited links. You can also request batch exports by `record_ids` or `filters`.</Callout>
      </main>
    </div>
  );
}
