import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function ApiModelsPage() {
  const baseUrl = 'https://api.xase.ai/v1';

  const createCurl = `curl -X POST ${baseUrl}/models \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "model_id": "credit-model-v2",
    "version": "2.1.0",
    "model_hash": "sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "training_date": "2025-01-01",
    "framework": "scikit-learn",
    "performance": {"accuracy": 0.94, "auc_roc": 0.97},
    "fairness": {"demographic_parity": 0.95},
    "intended_use": "Consumer credit decisions under $100K",
    "limitations": "Not validated for business credit"
  }'`;

  const createPython = `model = client.models.create(
  model_id="credit-model-v2",
  version="2.1.0",
  model_hash="sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
  training_date="2025-01-01",
  framework="scikit-learn",
  performance={"accuracy": 0.94, "auc_roc": 0.97},
  fairness={"demographic_parity": 0.95},
  intended_use="Consumer credit decisions under $100K",
  limitations="Not validated for business credit"
)`;

  const createNode = `const model = await xase.models.create({
  modelId: 'credit-model-v2',
  version: '2.1.0',
  modelHash: 'sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
  trainingDate: '2025-01-01',
  framework: 'tensorflow',
  performance: { accuracy: 0.94, aucRoc: 0.97 },
  intendedUse: 'Consumer credit decisions under $100K',
  limitations: 'Not validated for business credit'
});`;

  const getCurl = `curl -X GET ${baseUrl}/models/credit-model-v2 \
  -H "Authorization: Bearer xase_pk_..."`;

  const listCurl = `curl -X GET ${baseUrl}/models \
  -H "Authorization: Bearer xase_pk_..."`;

  const response = `{
  "model_id": "credit-model-v2",
  "version": "2.1.0",
  "model_hash": "sha256:9f86d081884c...",
  "training_date": "2025-01-01",
  "framework": "scikit-learn",
  "performance": {"accuracy": 0.94, "auc_roc": 0.97},
  "intended_use": "Consumer credit decisions under $100K",
  "limitations": "Not validated for business credit",
  "created_at": "2025-01-15T12:00:00Z"
}`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">API Reference: Models</h1>
        <p className="text-lg text-gray-400 mb-8">Endpoints for model registration and retrieval.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Create Model — POST /models</h2>
        <Tabs
          tabs={[
            { title: 'cURL', content: <CodeBlock language="bash" code={createCurl} /> },
            { title: 'Python', content: <CodeBlock language="python" filename="create_model.py" code={createPython} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="create_model.ts" code={createNode} /> },
          ]}
        />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={response} />

        <h2 className="text-2xl font-light mt-8 mb-3">Get Model — GET /models/{'{id}'}</h2>
        <CodeBlock language="bash" code={getCurl} />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={response} />

        <h2 className="text-2xl font-light mt-8 mb-3">List Models — GET /models</h2>
        <CodeBlock language="bash" code={listCurl} />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={`[{\n  "model_id": "credit-model-v2",\n  "version": "2.1.0"\n}]`} />

        <Callout type="info">Model cards should include artifact hash (sha256) for verification and intended use/limitations for compliance.</Callout>
      </main>
    </div>
  );
}
