import Sidebar from '../../../components/docs/Sidebar';
import CodeBlock from '../../../components/docs/CodeBlock';
import Callout from '../../../components/docs/Callout';

export default function AuthPage() {
  const headers = `Authorization: Bearer xase_pk_...
# or
X-API-Key: xase_pk_...`;

  const env = `# .env
XASE_API_KEY=xase_pk_...
XASE_BASE_URL=https://api.xase.ai`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Authentication</h1>
        <p className="text-lg text-gray-400 mb-8">Authenticate using an API key. Include it in headers for every request.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Headers</h2>
        <CodeBlock language="bash" code={headers} />

        <h2 className="text-2xl font-light mt-8 mb-3">Environment Variables</h2>
        <CodeBlock language="bash" code={env} />

        <Callout type="warning">Never commit API keys to source control. Use environment variables or secrets management.</Callout>
      </main>
    </div>
  );
}
