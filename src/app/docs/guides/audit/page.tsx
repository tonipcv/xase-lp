import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function AuditTrailPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Audit Trail
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Every interaction with data is automatically tracked in an immutable audit trail, providing complete accountability and transparency.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          What is the audit trail
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            The Audit Trail is a <span className="text-white">comprehensive, immutable record</span> of every data access event and action taken within the Xase system.
          </p>
          <p>
            Every audit entry captures:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Who</span> — Identity of the actor</li>
            <li>— <span className="text-neutral-300">What</span> — Action performed</li>
            <li>— <span className="text-neutral-300">When</span> — Precise timestamp</li>
            <li>— <span className="text-neutral-300">Why</span> — Purpose of the action</li>
            <li>— <span className="text-neutral-300">Where</span> — Source IP and geographic location</li>
            <li>— <span className="text-neutral-300">How</span> — Method and authentication used</li>
          </ul>
          <p className="pt-2">
            This creates a <span className="text-white">chain of accountability</span> that can be presented to regulators, auditors, or courts.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Tracked events
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Access Events</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Session creation and data access events:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "event_id": "evt_a1b2c3d4",
  "event_type": "ACCESS_SESSION_CREATED",
  "timestamp": "2026-01-15T14:30:00Z",
  "actor": {
    "id": "user_123abc",
    "email": "researcher@ai-lab.com",
    "organization": "AI Research Lab"
  },
  "context": {
    "session_id": "sess_7f6e5d4c",
    "dataset_id": "dataset_medical_records",
    "purpose": "model-training",
    "ip_address": "203.0.113.42",
    "location": "New York, US",
    "auth_method": "mTLS",
    "user_agent": "Python/3.12 xase-client/1.4.2"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Authorization Events</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Policy evaluation and approval events:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "event_id": "evt_b2c3d4e5",
  "event_type": "ACCESS_AUTHORIZED",
  "timestamp": "2026-01-15T14:28:45Z",
  "actor": {
    "id": "user_456def",
    "email": "data-admin@hospital.org",
    "organization": "Metropolitan Hospital"
  },
  "context": {
    "session_id": "sess_7f6e5d4c",
    "policy_id": "policy_medical_research",
    "policy_version": "1.2",
    "authorization_id": "auth_b2c3d4",
    "ip_address": "198.51.100.73",
    "location": "Chicago, US",
    "auth_method": "2FA",
    "mfa_verified": true
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Data Usage Events</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Data operations and transformations:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "event_id": "evt_c3d4e5f6",
  "event_type": "DATA_ACCESSED",
  "timestamp": "2026-01-15T15:12:27Z",
  "actor": {
    "id": "user_123abc",
    "email": "researcher@ai-lab.com",
    "session_id": "sess_7f6e5d4c"
  },
  "context": {
    "record_count": 1000,
    "operation": "stream_batch",
    "filter_applied": {"age": {"$gte": 18}},
    "data_fields": ["patient_id", "diagnosis", "symptoms"],
    "purpose": "model-training"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Security Events</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Security-related events and anomalies:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "event_id": "evt_d4e5f6g7",
  "event_type": "ACCESS_DENIED",
  "timestamp": "2026-01-15T16:45:12Z",
  "actor": {
    "id": "user_789ghi",
    "email": "engineer@ai-lab.com",
    "organization": "AI Research Lab"
  },
  "context": {
    "dataset_id": "dataset_medical_records",
    "reason": "POLICY_VIOLATION",
    "details": "Model not in allowed list",
    "policy_id": "policy_medical_research",
    "ip_address": "203.0.113.55",
    "location": "New York, US"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Administrative Events</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              System configuration and policy changes:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "event_id": "evt_e5f6g7h8",
  "event_type": "POLICY_UPDATED",
  "timestamp": "2026-01-10T11:23:54Z",
  "actor": {
    "id": "user_456def",
    "email": "data-admin@hospital.org",
    "organization": "Metropolitan Hospital"
  },
  "context": {
    "policy_id": "policy_medical_research",
    "old_version": "1.1",
    "new_version": "1.2",
    "changes": [
      {
        "field": "allowed_models",
        "old": ["model_diagnostic_v1"],
        "new": ["model_diagnostic_v1", "model_diagnostic_v2"]
      }
    ],
    "ip_address": "198.51.100.73",
    "location": "Chicago, US"
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Working with the audit trail
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Querying Audit Logs</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Access audit events programmatically:
            </p>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Query audit logs
logs = client.audit.list(
    session_id="sess_7f6e5d4c",
    event_types=["ACCESS_SESSION_CREATED", "DATA_ACCESSED"],
    start_time="2026-01-15T00:00:00Z",
    end_time="2026-01-16T00:00:00Z",
    limit=100
)

for event in logs:
    print(f"Event: {event.event_type}")
    print(f"Time: {event.timestamp}")
    print(f"Actor: {event.actor.email}")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Audit Reports</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Generate audit reports for compliance:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Generate session audit report
report = client.audit.report(
    session_id="sess_7f6e5d4c",
    format="pdf",  # or "json", "csv"
    include_evidence=True
)

# Download report
report.download("./session_audit_report.pdf")

# For compliance reporting periods
monthly_report = client.audit.report(
    dataset_id="dataset_medical_records",
    start_time="2026-01-01T00:00:00Z",
    end_time="2026-01-31T23:59:59Z",
    format="csv"
)

monthly_report.download("./january_audit_report.csv")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Automated Notifications</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Configure notifications for important events:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Set up audit event notifications
client.audit.create_notification(
    name="access-denied-alert",
    event_types=["ACCESS_DENIED"],
    destination="security-team@company.com",
    channel="email"
)

# Webhook for security events
client.audit.create_notification(
    name="security-events-webhook",
    event_types=["ACCESS_DENIED", "ANOMALY_DETECTED"],
    destination="https://security.company.com/webhooks/xase",
    channel="webhook",
    include_full_event=True
)`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Security and retention
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Immutability</h3>
            <p className="text-[14px] text-neutral-500">
              Audit logs are append-only and cryptographically protected against tampering. Modifications are impossible, even by administrators.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Retention</h3>
            <p className="text-[14px] text-neutral-500">
              Audit logs are retained for 7 years by default. Custom retention policies can be configured to meet regulatory requirements.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Access Controls</h3>
            <p className="text-[14px] text-neutral-500">
              Audit logs have strict access controls. Only authorized personnel with explicit audit permissions can view them.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Cryptographic Protection</h3>
            <p className="text-[14px] text-neutral-500">
              All audit events are signed and can be verified using the same mechanisms as evidence bundles.
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
            href="/docs/guides/verify" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Verification</span>
              <span className="text-[14px] text-neutral-600 ml-3">Learn how to verify evidence bundles</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <a 
            href="/docs/guides/metering" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Usage Metering</span>
              <span className="text-[14px] text-neutral-600 ml-3">Learn how usage is measured and billed</span>
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
