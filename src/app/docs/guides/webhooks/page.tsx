'use client';
import CodeBlock from '../../../../components/docs/CodeBlock';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import Callout from '../../../../components/docs/Callout';

export default function GuideWebhooksPage() {
  const events = `Event                Description
record.created       New decision recorded
intervention.created Human intervention recorded
alert.triggered      Alert threshold exceeded
export.ready         Batch export completed`;

  const payload = `{
  "id": "evt_abc123",
  "type": "intervention.created",
  "created_at": "2025-01-15T14:35:00.000Z",
  "data": {
    "intervention": {"id": "int_...", "record_id": "rec_..."}
  }
}`;

  const verify = `import crypto from 'crypto';

export function verifyWebhook(payload: string, signature: string, secret: string): boolean {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}`;

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Guide: Webhooks</h1>
        <p className="text-lg text-gray-400 mb-8">Receive real-time events from XASE for automation and monitoring.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Events</h2>
        <CodeBlock language="text" code={events} />

        <h2 className="text-2xl font-light mt-8 mb-3">Example Payload</h2>
        <CodeBlock language="json" code={payload} />

        <h2 className="text-2xl font-light mt-8 mb-3">Signature Verification</h2>
        <CodeBlock language="typescript" filename="verify.ts" code={verify} />
        <Callout type="warning">Always verify the <code className='text-gray-300'>X-Xase-Signature</code> header using your webhook secret before trusting the payload.</Callout>
      </main>
    </DocsContent>
  );
}
