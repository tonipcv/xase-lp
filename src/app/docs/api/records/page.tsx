import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function ApiRecordsPage() {
  const baseUrl = 'https://api.xase.ai/v1';

  const authHeader = `Authorization: Bearer xase_pk_...\n# or\nX-API-Key: xase_pk_...`;

  const createCurl = `curl -X POST ${baseUrl}/records \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "model_id": "credit-model-v2",
    "input": {"customer_id": "cust_123", "income": 85000},
    "output": {"decision": "APPROVED", "credit_limit": 25000},
    "confidence": 0.94,
    "transaction_id": "txn_abc123"
  }'`;

  const createPython = `record = client.records.create(
  model_id="credit-model-v2",
  input={"customer_id": "cust_123", "income": 85000},
  output={"decision": "APPROVED", "credit_limit": 25000},
  confidence=0.94,
  transaction_id="txn_abc123"
)`;

  const createNode = `const record = await xase.records.create({
  modelId: 'credit-model-v2',
  input: { customerId: 'cust_123', income: 85000 },
  output: { decision: 'APPROVED', creditLimit: 25000 },
  confidence: 0.94,
  transactionId: 'txn_abc123'
});`;

  const createResponse = `{
  "id": "rec_8a7f3b2c4d5e6f7a",
  "model_id": "credit-model-v2",
  "input": { "customer_id": "cust_123", "income": 85000 },
  "output": { "decision": "APPROVED", "credit_limit": 25000 },
  "confidence": 0.94,
  "transaction_id": "txn_abc123",
  "hash": "sha256:9f86d081884c...",
  "previous_hash": "sha256:abc123...",
  "created_at": "2025-01-15T14:32:00.000Z",
  "interventions": []
}`;

  const getCurl = `curl -X GET ${baseUrl}/records/rec_8a7f3b2c \
  -H "Authorization: Bearer xase_pk_..."`;

  const listCurl = `curl -G ${baseUrl}/records \
  -H "Authorization: Bearer xase_pk_..." \
  --data-urlencode "model_id=credit-model-v2" \
  --data-urlencode "start_date=2025-01-01" \
  --data-urlencode "end_date=2025-01-31" \
  --data-urlencode "has_intervention=true" \
  --data-urlencode "limit=20" \
  --data-urlencode "offset=0"`;

  const listResponse = `{
  "data": [ {"id": "rec_...", "output": {"decision": "APPROVED"}} ],
  "total": 1234,
  "limit": 20,
  "offset": 0
}`;

  const fieldsTable = `Field            Type      Required  Description\nmodel_id         string    Yes       Identifier of the model that made the decision\ninput            object    Yes       Input data sent to the model\noutput           object    Yes       Model's output/decision\nconfidence       number    No        Confidence score (0-1)\ntransaction_id   string    No        Your internal reference ID\npolicy_id        string    No        Business policy applied\ncontext          object    No        Additional metadata\nexplanation      object    No        XAI data (SHAP values, etc.)`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">API Reference: Records</h1>
        <p className="text-lg text-gray-400 mb-8">Endpoints for creating and retrieving decision records.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Base URL</h2>
        <CodeBlock language="text" code={`Base URL: ${baseUrl}`} />

        <h2 className="text-2xl font-light mt-8 mb-3">Authentication</h2>
        <CodeBlock language="bash" code={authHeader} />
        <Callout type="info">All requests must include an API key. We recommend using the Authorization header.</Callout>

        <h2 className="text-2xl font-light mt-8 mb-3">Create Record — POST /records</h2>
        <CodeBlock language="text" code={fieldsTable} />
        <Tabs
          tabs={[
            { title: 'cURL', content: <CodeBlock language="bash" code={createCurl} /> },
            { title: 'Python', content: <CodeBlock language="python" filename="create.py" code={createPython} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="create.ts" code={createNode} /> },
          ]}
        />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={createResponse} />

        <h2 className="text-2xl font-light mt-8 mb-3">Get Record — GET /records/{'{id}'}</h2>
        <Tabs tabs={[{ title: 'cURL', content: <CodeBlock language="bash" code={getCurl} /> }]} />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={createResponse} />

        <h2 className="text-2xl font-light mt-8 mb-3">List Records — GET /records</h2>
        <Tabs tabs={[{ title: 'cURL', content: <CodeBlock language="bash" code={listCurl} /> }]} />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={listResponse} />

        <h2 className="text-2xl font-light mt-8 mb-3">Errors</h2>
        <CodeBlock language="json" code={`{\n  "error": {\n    "code": "validation_error",\n    "message": "Invalid request body",\n    "details": [{ "field": "model_id", "message": "Required field missing" }]\n  }\n}`} />
      </main>
    </div>
  );
}
