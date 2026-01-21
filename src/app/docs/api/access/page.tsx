'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function AccessAPIPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Access API
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          The Access API enables AI systems to request governed access to datasets, ensuring compliance with data holder policies and automatically generating evidence.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          API endpoints
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Request Access</h3>
            <CodeBlock 
              language="bash" 
              code={`POST https://api.xase.ai/v1/access

# Request Body
{
  "dataset_id": "dataset_medical_records_2025",
  "purpose": "model-training",
  "model_id": "diagnostic-model-v2",
  "duration": "30d",
  "metadata": {
    "project": "Medical Diagnosis Improvement",
    "requester_notes": "Training on anonymized patient data"
  }
}

# Response (200 OK)
{
  "session_id": "sess_7f6e5d4c",
  "dataset_id": "dataset_medical_records_2025",
  "status": "ACTIVE",
  "created_at": "2026-01-15T14:30:00Z",
  "expires_at": "2026-02-14T14:30:00Z",
  "policy_id": "policy_medical_research",
  "policy_version": "1.2"
}`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>This endpoint initiates a new access request and performs policy evaluation.</p>
              <p>If approved, a new session is created and returned.</p>
              <p>If rejected, an error response is returned with the specific policy violation.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Get Access Status</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/access/{session_id}

# Response (200 OK)
{
  "session_id": "sess_7f6e5d4c",
  "dataset_id": "dataset_medical_records_2025",
  "status": "ACTIVE",  // ACTIVE, PENDING, EXPIRED, REVOKED
  "created_at": "2026-01-15T14:30:00Z",
  "expires_at": "2026-02-14T14:30:00Z",
  "usage_stats": {
    "records_accessed": 12547,
    "operations_performed": 89,
    "last_access": "2026-01-15T16:45:23Z"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">List Access Sessions</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/access?dataset_id=dataset_medical_records_2025&status=ACTIVE

# Query Parameters
# dataset_id (optional) - Filter by dataset ID
# status (optional) - Filter by status (ACTIVE, PENDING, EXPIRED, REVOKED)
# created_after (optional) - Filter by creation date
# created_before (optional) - Filter by creation date
# limit (optional) - Limit results (default: 20, max: 100)
# offset (optional) - Pagination offset

# Response (200 OK)
{
  "data": [
    {
      "session_id": "sess_7f6e5d4c",
      "dataset_id": "dataset_medical_records_2025",
      "status": "ACTIVE",
      "created_at": "2026-01-15T14:30:00Z",
      "expires_at": "2026-02-14T14:30:00Z"
    },
    {
      "session_id": "sess_8g7h6i5j",
      "dataset_id": "dataset_medical_records_2025",
      "status": "ACTIVE",
      "created_at": "2026-01-10T09:15:00Z",
      "expires_at": "2026-02-09T09:15:00Z"
    }
  ],
  "pagination": {
    "total": 5,
    "limit": 20,
    "offset": 0,
    "has_more": false
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Terminate Access</h3>
            <CodeBlock 
              language="bash" 
              code={`DELETE https://api.xase.ai/v1/access/{session_id}

# Request Body (optional)
{
  "reason": "Training completed early"
}

# Response (200 OK)
{
  "session_id": "sess_7f6e5d4c",
  "status": "TERMINATED",
  "terminated_at": "2026-01-20T11:42:17Z",
  "reason": "Training completed early"
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Error responses
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Policy Violation</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "error": {
    "type": "policy_violation",
    "message": "Access denied due to policy violation",
    "details": {
      "policy_id": "policy_medical_research",
      "policy_version": "1.2",
      "violations": [
        {
          "rule": "allowed_models",
          "message": "Model 'research-v3' is not in the allowed list: ['research-v1', 'research-v2']"
        }
      ]
    },
    "request_id": "req_d4e5f6g7"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Approval Required</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "error": {
    "type": "approval_required",
    "message": "This access request requires explicit approval",
    "details": {
      "policy_id": "policy_medical_research",
      "policy_version": "1.2",
      "approval_request_id": "approval_e5f6g7h8",
      "approvers": ["data_admin@hospital.org"],
      "status": "PENDING"
    },
    "request_id": "req_d4e5f6g7"
  }
}`}
            />
            <p className="mt-4 text-[14px] text-neutral-500">
              When approval is required, check the approval status using{' '}
              <span className="text-white font-mono text-xs">
                GET /v1/access/approvals/{'{approval_request_id}'}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Resource Not Found</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "error": {
    "type": "not_found",
    "message": "Session not found",
    "details": {
      "session_id": "sess_not_exists"
    },
    "request_id": "req_d4e5f6g7"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Validation Error</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "error": {
    "type": "validation_error",
    "message": "Validation failed",
    "details": {
      "fields": [
        {
          "field": "duration",
          "message": "Invalid duration format. Use format like '30d', '24h', '2w'"
        },
        {
          "field": "purpose",
          "message": "Purpose is required"
        }
      ]
    },
    "request_id": "req_d4e5f6g7"
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          SDK usage
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Python SDK</h3>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Request access
try:
    session = client.access(
        dataset="medical-records-2024",
        purpose="model-training",
        model_id="diagnostic-model-v2",
        duration="30d",
        metadata={
            "project": "Medical Diagnosis Improvement",
            "requester_notes": "Training on anonymized patient data"
        }
    )
    
    print(f"Access granted! Session ID: {session.id}")
    print(f"Expires at: {session.expires_at}")
    
except xase.PolicyViolationError as e:
    print(f"Access denied: {e.message}")
    for violation in e.violations:
        print(f"- {violation.rule}: {violation.message}")
        
except xase.ApprovalRequiredError as e:
    print(f"Approval required: {e.message}")
    print(f"Approval request ID: {e.approval_request_id}")
    print(f"Check status later with: client.get_approval_status('{e.approval_request_id}')")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Managing Access</h3>
            <CodeBlock 
              language="python" 
              code={`# Get access session details
session = client.get_session("sess_7f6e5d4c")
print(f"Status: {session.status}")
print(f"Records accessed: {session.usage_stats.records_accessed}")

# List active sessions
active_sessions = client.list_sessions(status="ACTIVE")
for sess in active_sessions:
    print(f"Session {sess.id} for {sess.dataset_id}")
    
# Terminate session when done
client.terminate_session(
    session_id="sess_7f6e5d4c",
    reason="Training completed"
)`}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
          Next steps
        </h2>
        
        <div className="space-y-3">
          <a 
            href="/docs/api/sessions" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Sessions API</span>
              <span className="text-[14px] text-neutral-600 ml-3">Use active sessions to access data</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <a 
            href="/docs/api/evidence" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Evidence API</span>
              <span className="text-[14px] text-neutral-600 ml-3">Generate and verify evidence bundles</span>
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
