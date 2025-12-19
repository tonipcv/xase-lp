import Sidebar from '../../../../components/docs/Sidebar';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function GuideDashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Dashboard & Alerts</h1>
        <p className="text-lg text-gray-400 mb-8">Use the dashboard to monitor override rates, export evidence, and configure alerts.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Key Views</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Records: search and filter decisions.</li>
          <li>Interventions: audit human actions.</li>
          <li>Models: versions, hashes, performance.</li>
          <li>Exports: create and download evidence bundles.</li>
          <li>Alerts: thresholds and notifications.</li>
        </ul>

        <h2 className="text-2xl font-light mt-8 mb-3">Alerting</h2>
        <CodeBlock language="json" code={`{
  "type": "override.rate.high",
  "threshold": 0.1,
  "window": "1h",
  "channels": ["email:compliance@company.com", "webhook:https://hooks.company.com/xase"]
}`} />
        <Callout type="info">Configure alert channels and thresholds in the Dashboard. Use webhooks for automation.</Callout>
      </main>
    </div>
  );
}
