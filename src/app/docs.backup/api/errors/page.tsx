'use client';
import CodeBlock from '../../../../components/docs/CodeBlock';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';

export default function ApiErrorsPage() {
  const errorFormat = `{
  "error": {
    "code": "validation_error",
    "message": "Invalid request body",
    "details": [
      { "field": "model_id", "message": "Required field missing" }
    ]
  }
}`;

  const codes = `Code                   HTTP   Description
authentication_error   401    Invalid or missing API key
authorization_error    403    API key lacks permission
not_found              404    Resource doesn't exist
validation_error       400    Invalid request body
rate_limit_exceeded    429    Too many requests
internal_error         500    Server error`;

  const rateHeaders = `X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1642265700`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">API Reference: Errors</h1>
        <p className="text-lg text-gray-400 mb-8">Standard error formats and rate limiting headers.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Error Format</h2>
        <CodeBlock language="json" code={errorFormat} />

        <h2 className="text-2xl font-light mt-8 mb-3">Error Codes</h2>
        <CodeBlock language="text" code={codes} />

        <h2 className="text-2xl font-light mt-8 mb-3">Rate Limits</h2>
        <CodeBlock language="text" code={`Tier   Requests/minute   Requests/hour\nDeveloper   60   1,000\nScale       300  10,000\nEnterprise  Custom  Custom`} />
        <h3 className="text-lg text-gray-300 mb-2">Headers</h3>
        <CodeBlock language="text" code={rateHeaders} />
      </main>
    </DocsContent>
  );
}
