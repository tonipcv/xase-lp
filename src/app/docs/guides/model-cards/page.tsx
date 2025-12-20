'use client';
import Tabs from '../../../../components/docs/Tabs';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function GuideModelCardsPage() {
  const python = `model = client.models.create(
  model_id="credit-model-v2",
  version="2.1.0",
  model_hash="sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
  training_date="2025-01-01",
  framework="scikit-learn",
  performance={"accuracy": 0.94, "precision": 0.91, "recall": 0.89, "auc_roc": 0.97},
  intended_use="Consumer credit decisions under $100K",
  limitations="Not validated for business credit",
  input_schema={"income": "float", "debt_ratio": "float", "credit_score": "int"},
  output_schema={"decision": "enum[APPROVED, REJECTED]", "credit_limit": "float", "interest_rate": "float"}
)`;

  const node = `const model = await xase.models.create({
  modelId: 'credit-model-v2',
  version: '2.1.0',
  modelHash: 'sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
  trainingDate: '2025-01-01',
  framework: 'tensorflow',
  performance: { accuracy: 0.94, precision: 0.91, recall: 0.89, aucRoc: 0.97 },
  intendedUse: 'Consumer credit decisions under $100K',
  limitations: 'Not validated for business credit',
  inputSchema: { income: 'float', debtRatio: 'float', creditScore: 'int' },
  outputSchema: { decision: 'enum[APPROVED, REJECTED]', creditLimit: 'float', interestRate: 'float' }
});`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Model Cards</h1>
        <p className="text-lg text-gray-400 mb-8">Document your models: versions, hashes, metrics, schemas, intended use, limitations.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Register a Model</h2>
        <Tabs
          tabs={[
            { title: 'Python', content: <CodeBlock language="python" filename="model_card.py" code={python} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="model_card.ts" code={node} /> },
          ]}
        />

        <Callout type="info">Include <code className='text-gray-300'>model_hash</code> (sha256) for artifact verification and schemas for downstream validation.</Callout>
      </main>
    </DocsContent>
  );
}
