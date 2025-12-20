'use client';
import Tabs from '../../../../components/docs/Tabs';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function PythonSDKPage() {
  const pip = `pip install xase`;
  const poetry = `poetry add xase`;
  const conda = `conda install -c conda-forge xase`;

  const verify = `import xase\nprint(xase.__version__)\n# Output: 1.0.0`;

  const basicSetup = `import xase\n\n# Option 1: Pass API key directly\nclient = xase.Client(api_key="xase_pk_...")\n\n# Option 2: Use environment variable (recommended)\n# Set XASE_API_KEY in your environment\nclient = xase.Client()`;

  const env = `# .env file\nXASE_API_KEY=xase_pk_...\nXASE_BASE_URL=https://api.xase.ai  # Optional, for self-hosted\nXASE_TIMEOUT=30  # Optional, request timeout in seconds`;

  const advanced = `client = xase.Client(\n    api_key="xase_pk_...",\n    base_url="https://api.xase.ai",\n    timeout=30,\n    max_retries=3,\n    debug=False\n)`;

  const createRecord = `record = client.records.create(\n    model_id="credit-model-v2",\n    input={\n        "customer_id": "cust_123",\n        "income": 85000,\n        "debt_ratio": 0.32,\n        "credit_score": 720\n    },\n    output={\n        "decision": "APPROVED",\n        "credit_limit": 25000,\n        "interest_rate": 12.5\n    },\n    confidence=0.94,\n    idempotency_key="req_unique_123"\n)\n\nprint(record.id)  # rec_8a7f3b2c...`;

  const intervene = `intervention = client.records.intervene(\n    record_id="rec_8a7f3b2c",\n    actor_email="joao.silva@company.com",\n    action="OVERRIDE",\n    new_outcome={\n      "decision": "APPROVED",\n      "credit_limit": 30000\n    },\n    reason="Customer provided additional collateral",\n    evidence_urls=[\n      "https://storage.company.com/docs/collateral_123.pdf"\n    ]\n)\n\nprint(intervention.id)`;

  const exportBundle = `export = client.exports.create(\n    record_id="rec_8a7f3b2c",\n    include_related=True,\n    format="zip"\n)\n\nprint(export.id)\nexport.download("./evidence_bundle.zip")`;

  const asyncExample = `import asyncio\nimport xase\n\nasync def main():\n    client = xase.AsyncClient(api_key="xase_pk_...")\n    record = await client.records.create(\n        model_id="credit-model-v2",\n        input={"customer_id": "123"},\n        output={"decision": "APPROVED"}\n    )\n    print(record.id)\n\nasyncio.run(main())`;

  const errorHandling = `import xase\nfrom xase.exceptions import (\n    XaseError, AuthenticationError, RateLimitError, ValidationError, NotFoundError\n)\n\nclient = xase.Client()\n\ntry:\n    record = client.records.create(...)\nexcept AuthenticationError:\n    print("Invalid API key")\nexcept RateLimitError as e:\n    print(f"Rate limited. Retry after {e.retry_after} seconds")\nexcept ValidationError as e:\n    print(f"Invalid request: {e.errors}")\nexcept NotFoundError:\n    print("Record not found")\nexcept XaseError as e:\n    print(f"XASE error: {e.message}")`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Python SDK</h1>
        <p className="text-lg text-gray-400 mb-8">Complete guide to installing and using the XASE Python SDK.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Requirements</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Python 3.8+</li>
          <li>pip or poetry</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">Installation</h2>
        <Tabs
          tabs={[
            { title: 'pip', content: <CodeBlock language="bash" code={pip} /> },
            { title: 'poetry', content: <CodeBlock language="bash" code={poetry} /> },
            { title: 'conda', content: <CodeBlock language="bash" code={conda} /> },
          ]}
        />

        <h2 className="text-2xl font-light mt-8 mb-3">Verify Installation</h2>
        <CodeBlock language="python" filename="verify.py" code={verify} />

        <h2 className="text-2xl font-light mt-8 mb-3">Configuration</h2>
        <h3 className="text-lg text-gray-300 mb-2">Basic Setup</h3>
        <CodeBlock language="python" filename="basic.py" code={basicSetup} />
        <h3 className="text-lg text-gray-300 mb-2">Environment Variables</h3>
        <CodeBlock language="bash" filename=".env" code={env} />
        <h3 className="text-lg text-gray-300 mb-2">Advanced Configuration</h3>
        <CodeBlock language="python" filename="advanced.py" code={advanced} />

        <h2 className="text-2xl font-light mt-8 mb-3">Usage</h2>
        <h3 className="text-lg text-gray-300 mb-2">Create a Record</h3>
        <CodeBlock language="python" filename="create_record.py" code={createRecord} />
        <h3 className="text-lg text-gray-300 mb-2">Record an Intervention</h3>
        <CodeBlock language="python" filename="intervene.py" code={intervene} />
        <h3 className="text-lg text-gray-300 mb-2">Export Evidence Bundle</h3>
        <CodeBlock language="python" filename="export.py" code={exportBundle} />

        <h2 className="text-2xl font-light mt-8 mb-3">Async Support</h2>
        <CodeBlock language="python" filename="async.py" code={asyncExample} />

        <h2 className="text-2xl font-light mt-8 mb-3">Error Handling</h2>
        <CodeBlock language="python" filename="errors.py" code={errorHandling} />
      </main>
    </DocsContent>
  );
}
