import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function AccessSessionsPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Access Sessions
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Access Sessions enable AI systems to use real data with strict governance, explicit purpose, and automatic evidence generation.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          What are access sessions
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            An Access Session is a <span className="text-white">time-bound, purpose-specific</span> connection to data that automatically generates legal evidence.
          </p>
          <p>
            Sessions have a clear lifecycle:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Creation:</span> Policy evaluation approves access</li>
            <li>— <span className="text-neutral-300">Active period:</span> Data is accessed with governance</li>
            <li>— <span className="text-neutral-300">Termination:</span> Access expires or is revoked</li>
            <li>— <span className="text-neutral-300">Evidence:</span> Complete record is preserved</li>
          </ul>
          <p className="pt-2">
            Every aspect of the session is <span className="text-white">tracked, governed, and provable</span>.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          How to use access sessions
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">1. Create a Session</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Request access to data with explicit parameters:
            </p>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Request access (triggers policy evaluation)
session = client.access(
    dataset="medical-records-2024",
    purpose="model-training",
    duration="30d",
    model_id="research-v2"
)`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">2. Use the Session</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Access data through the governed session interface:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Stream data batches for training
for batch in session.stream():
    model.train(batch)

# Or access specific entries
patient_data = session.get("patient_123")

# Maintain full governance 
processed_data = session.with_tracking(
    lambda data: process(data),
    operation="preprocessing"
)`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">3. View Session Details</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Access details about the active session:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Get session details
print(session.id)          # "sess_8a72b9c1..."
print(session.dataset)     # "medical-records-2024" 
print(session.purpose)     # "model-training"
print(session.created_at)  # "2026-01-15T14:32:00Z"
print(session.expires_at)  # "2026-02-14T14:32:00Z"
print(session.status)      # "ACTIVE"

# Check governance
print(session.policy_id)         # "policy_medical_research"
print(session.authorized_by)     # "data_admin@hospital.com"
print(session.authorization_at)  # "2026-01-15T14:30:00Z"

# Check usage
print(session.usage_stats)  # {"rows_accessed": 1452, "operations": 28}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">4. Access Evidence</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Generate evidence of the session:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Get evidence bundle
evidence = session.get_evidence()
print(evidence.url)  # "https://xase.ai/evidence/bundle_a8f2c..."

# Download for offline verification
evidence.download("./session_evidence.zip")

# Contains:
# - session_details.json
# - policy_applied.json
# - authorization_proof.json
# - access_logs.json
# - usage_metrics.json
# - signature.sig
# - verify.sh`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">5. End Session</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Explicitly terminate a session:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Terminate the session early
session.close(reason="Training complete")

# Session automatically terminates if:
# - Duration expires
# - Policy is violated
# - Data holder revokes access`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Key features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Automatic Tracking</h3>
            <p className="text-[14px] text-neutral-500">
              Every data access, operation, and transformation is automatically tracked without developer effort.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Revocable Access</h3>
            <p className="text-[14px] text-neutral-500">
              Data holders can revoke access at any time, immediately terminating all active sessions.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Usage Metering</h3>
            <p className="text-[14px] text-neutral-500">
              Automatic measurement of data usage for billing and compliance purposes.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Evidence Generation</h3>
            <p className="text-[14px] text-neutral-500">
              Complete evidence package with cryptographic proof of policy compliance.
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
          
          <a 
            href="/docs/guides/bundles" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Evidence Bundles</span>
              <span className="text-[14px] text-neutral-600 ml-3">Understand the evidence format</span>
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
