import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function PolicyEnginePage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Policy Engine
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          The Policy Engine determines whether AI can access data in real-time—at the exact moment of use—not days or weeks later.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          What it does
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            The Policy Engine evaluates <span className="text-white">every access request in real-time</span> against a set of rules defined by the data holder.
          </p>
          <p>
            It acts as the gatekeeper between AI systems and sensitive data, determining:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Which model</span> can access the data</li>
            <li>— <span className="text-neutral-300">For what purpose</span> (training, inference, QA)</li>
            <li>— <span className="text-neutral-300">For how long</span> (expiration)</li>
            <li>— <span className="text-neutral-300">With which constraints</span> (regulators, jurisdictions)</li>
          </ul>
          <p className="pt-2">
            If the policy evaluation fails at any point, <span className="text-white">access does not happen</span>.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          How it works
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">1. Define Policies</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Data holders define access policies using a simple JSON format:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "id": "policy_medical_research",
  "name": "Medical Research Access",
  "rules": [
    {
      "allowed_models": ["research-v1", "research-v2"],
      "allowed_purposes": ["training", "validation"],
      "max_duration": "30d",
      "jurisdictions": ["EU", "UK"],
      "require_approval": true
    }
  ],
  "rejection_behavior": "block_access"
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">2. Request Access</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              AI systems request access with specific parameters:
            </p>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Request governed access
session = client.access(
    dataset="medical-records-2024",
    purpose="training",
    model_id="research-v2",
    duration="30d"
)

# Policy evaluation happens HERE in real-time
# If approved, session is created
# If rejected, AccessDeniedError is raised`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">3. Policy Evaluation</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              The policy engine evaluates each request against all applicable rules:
            </p>
            <ul className="space-y-2 text-[14px] text-neutral-500 ml-4">
              <li>— Is this model allowed to access this dataset?</li>
              <li>— Is this purpose allowed?</li>
              <li>— Is the requested duration within limits?</li>
              <li>— Does this comply with regulatory requirements?</li>
              <li>— Is human approval required before access?</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">4. Access Result</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Based on the evaluation:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-green-800/30 bg-green-900/10 rounded-lg">
                <div className="text-[15px] font-medium text-green-400 mb-2">✓ Approved</div>
                <ul className="space-y-1 text-[13px] text-neutral-500">
                  <li>- Session created</li>
                  <li>- Access granted</li>
                  <li>- Evidence recorded</li>
                  <li>- Usage metering starts</li>
                </ul>
              </div>
              <div className="p-4 border border-red-800/30 bg-red-900/10 rounded-lg">
                <div className="text-[15px] font-medium text-red-400 mb-2">✗ Denied</div>
                <ul className="space-y-1 text-[13px] text-neutral-500">
                  <li>- AccessDeniedError raised</li>
                  <li>- Denial logged</li>
                  <li>- Detailed reason provided</li>
                  <li>- No data access occurs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Policy features
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Conditions</h3>
            <p className="text-[14px] text-neutral-500">
              Fine-grained conditions based on model, purpose, time, and metadata.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Human Approval</h3>
            <p className="text-[14px] text-neutral-500">
              Optional human approval workflow before access is granted.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Versioning</h3>
            <p className="text-[14px] text-neutral-500">
              Policy changes are versioned with full history for audit.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Regulatory Compliance</h3>
            <p className="text-[14px] text-neutral-500">
              Built-in rules for GDPR, LGPD, and EU AI Act compliance.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
          Next steps
        </h2>
        
        <div className="space-y-3">
          <a 
            href="/docs/guides/sessions" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Access Sessions</span>
              <span className="text-[14px] text-neutral-600 ml-3">Use data after policy approval</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <a 
            href="/docs/guides/streaming" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Data Streaming</span>
              <span className="text-[14px] text-neutral-600 ml-3">Access data without downloading</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-neutral-800/50 flex items-center justify-between text-[13px] text-neutral-600">
        <span>© 2025 Xase</span>
        <a href="mailto:founders@xase.ai" className="hover:text-neutral-400 transition-colors">
          founders@xase.ai
        </a>
      </div>
    </DocsContent>
  );
}
