import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function GuideXAIPage() {
  const shapPy = `record = client.records.create(
  model_id="credit-model-v2",
  input={"income": 85000, "debt_ratio": 0.32, "credit_score": 720},
  output={"decision": "APPROVED", "limit": 25000},
  confidence=0.94,
  explanation={
    "method": "SHAP",
    "values": {"income": 0.35, "debt_ratio": -0.28, "credit_score": 0.22}
  }
)`;

  const shapTs = `const record = await xase.records.create({
  modelId: 'credit-model-v2',
  input: { income: 85000, debtRatio: 0.32, creditScore: 720 },
  output: { decision: 'APPROVED', limit: 25000 },
  confidence: 0.94,
  explanation: {
    method: 'SHAP',
    values: { income: 0.35, debtRatio: -0.28, creditScore: 0.22 }
  }
});`;

  const bundle = `explanation.json
{
  "method": "SHAP",
  "values": {
    "income": 0.35,
    "debt_ratio": -0.28,
    "credit_score": 0.22
  },
  "version": "1.0.0"
}`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Explainability (XAI)</h1>
        <p className="text-lg text-gray-400 mb-8">Attach SHAP/LIME values to each decision so auditors can see why the model decided.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Capture SHAP/LIME</h2>
        <Tabs
          tabs={[
            { title: 'Python', content: <CodeBlock language="python" filename="xai.py" code={shapPy} /> },
            { title: 'Node.js', content: <CodeBlock language="typescript" filename="xai.ts" code={shapTs} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">Bundle Artifact</h2>
        <CodeBlock language="json" filename="explanation.json" code={bundle} />

        <Callout type="tip">For deterministic explanations, pin data preprocessing versions and model versions (see Model Cards).</Callout>
      </main>
    </div>
  );
}
