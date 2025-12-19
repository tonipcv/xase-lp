import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function ApiAlertsPage() {
  const baseUrl = 'https://api.xase.ai/v1';

  const listCurl = `curl -G ${baseUrl}/alerts \
  -H "Authorization: Bearer xase_pk_..." \
  --data-urlencode "status=active" \
  --data-urlencode "severity=critical"`;

  const resolveCurl = `curl -X POST ${baseUrl}/alerts/alert_xyz/resolve \
  -H "Authorization: Bearer xase_pk_..." \
  -H "Content-Type: application/json" \
  -d '{
    "resolution_note": "Investigated and resolved"
  }'`;

  const response = `{
  "id": "alert_xyz",
  "type": "override.rate.high",
  "severity": "critical",
  "message": "Override rate exceeded threshold",
  "status": "active",
  "created_at": "2025-01-15T14:00:00Z"
}`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">API Reference: Alerts</h1>
        <p className="text-lg text-gray-400 mb-8">Endpoints for listing and resolving alerts.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">List Alerts — GET /alerts</h2>
        <CodeBlock language="bash" code={listCurl} />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={`[{\n  "id": "alert_xyz",\n  "type": "override.rate.high",\n  "severity": "critical",\n  "message": "Override rate exceeded threshold",\n  "status": "active"\n}]`} />

        <h2 className="text-2xl font-light mt-8 mb-3">Resolve Alert — POST /alerts/{'{id}'}/resolve</h2>
        <CodeBlock language="bash" code={resolveCurl} />
        <h3 className="text-lg text-gray-300 mb-2">Response</h3>
        <CodeBlock language="json" code={response} />

        <Callout type="info">Alerts help detect anomalies (e.g., high override rates). Use webhooks for real-time notifications.</Callout>
      </main>
    </div>
  );
}
