'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function SessionsAPIPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Sessions API
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          The Sessions API allows AI systems to interact with data through active access sessions, providing governed access with full tracking and evidence generation.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          API endpoints
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Stream Data</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/sessions/{session_id}/stream

# Query Parameters
# batch_size (optional) - Number of records per batch (default: 32, max: 100)
# filter (optional) - JSON filter expression
# fields (optional) - Comma-separated list of fields to include
# sort (optional) - Field to sort by

# Response (200 OK)
{
  "batch": [
    {
      "record_id": "rec_a1b2c3",
      "patient_id": "p12345",
      "age": 57,
      "diagnosis": "diabetes",
      "symptoms": ["fatigue", "thirst", "blurred vision"]
    },
    // ... more records
  ],
  "batch_id": "batch_d4e5f6",
  "record_count": 32,
  "has_more": true,
  "next_cursor": "cursor_g7h8i9"
}

# To get next batch
GET https://api.xase.ai/v1/sessions/{session_id}/stream?cursor=cursor_g7h8i9`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>This endpoint streams data in batches from the dataset associated with the active session.</p>
              <p>Each request returns a batch of records and a cursor for pagination.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Get Specific Record</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/sessions/{session_id}/records/{record_id}

# Response (200 OK)
{
  "record_id": "rec_a1b2c3",
  "patient_id": "p12345",
  "age": 57,
  "diagnosis": "diabetes",
  "symptoms": ["fatigue", "thirst", "blurred vision"],
  "treatments": ["insulin", "dietary changes"],
  "lab_results": {
    "glucose": 210,
    "a1c": 8.1
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Apply Filter</h3>
            <CodeBlock 
              language="bash" 
              code={`POST https://api.xase.ai/v1/sessions/{session_id}/filter

# Request Body
{
  "filter": {
    "age": {"$gte": 50},
    "diagnosis": {"$in": ["diabetes", "hypertension"]},
    "$or": [
      {"lab_results.glucose": {"$gte": 200}},
      {"lab_results.bp_systolic": {"$gte": 140}}
    ]
  },
  "fields": ["patient_id", "age", "diagnosis", "lab_results"],
  "sort": {"age": -1},
  "limit": 100
}

# Response (200 OK)
{
  "records": [
    {
      "patient_id": "p12345",
      "age": 72,
      "diagnosis": "hypertension",
      "lab_results": {
        "bp_systolic": 155,
        "bp_diastolic": 95
      }
    },
    // ... more records
  ],
  "record_count": 87,
  "has_more": false
}`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>This endpoint applies MongoDB-like query filters to data without downloading everything.</p>
              <p>Filtering happens server-side to reduce bandwidth and processing requirements.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Apply Transformation</h3>
            <CodeBlock 
              language="bash" 
              code={`POST https://api.xase.ai/v1/sessions/{session_id}/transform

# Request Body
{
  "record_ids": ["rec_a1b2c3", "rec_d4e5f6"],
  "transformation": "anonymize",
  "parameters": {
    "fields": ["patient_id", "name", "address"],
    "method": "hash"
  },
  "metadata": {
    "purpose": "privacy protection",
    "operator": "data_scientist@company.com"
  }
}

# Response (200 OK)
{
  "transformed_records": [
    {
      "record_id": "rec_a1b2c3",
      "patient_id": "b3d8e9f2a7c1...", // Hashed
      "age": 57,
      "diagnosis": "diabetes"
      // Other fields preserved
    },
    // ... more records
  ],
  "transformation_id": "transform_h8i9j0",
  "evidence_url": "https://api.xase.ai/v1/evidence/transform_h8i9j0"
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Record Operation</h3>
            <CodeBlock 
              language="bash" 
              code={`POST https://api.xase.ai/v1/sessions/{session_id}/operations

# Request Body
{
  "operation_type": "TRAIN",
  "records": ["rec_a1b2c3", "rec_d4e5f6"],
  "metadata": {
    "model_id": "diagnostic-model-v2",
    "training_step": 1452,
    "metrics": {
      "loss": 0.0342,
      "accuracy": 0.967
    }
  }
}

# Response (200 OK)
{
  "operation_id": "op_j0k1l2",
  "created_at": "2026-01-15T17:23:45Z",
  "status": "RECORDED",
  "evidence_id": "ev_m3n4o5"
}`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>This endpoint records operations performed on data, such as training, analysis, or validation.</p>
              <p>Each operation is recorded with evidence for later verification and audit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Error responses
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Session Expired</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "error": {
    "type": "session_expired",
    "message": "This session has expired",
    "details": {
      "session_id": "sess_7f6e5d4c",
      "expired_at": "2026-02-14T14:30:00Z",
      "current_time": "2026-02-15T09:12:34Z"
    },
    "request_id": "req_p6q7r8s9"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Access Revoked</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "error": {
    "type": "access_revoked",
    "message": "Access to this dataset has been revoked",
    "details": {
      "session_id": "sess_7f6e5d4c",
      "revoked_at": "2026-01-25T18:42:17Z",
      "reason": "Data holder has revoked access",
      "revoked_by": "data_admin@hospital.org"
    },
    "request_id": "req_t9u8v7w6"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Rate Limit</h3>
            <CodeBlock 
              language="json" 
              code={`{
  "error": {
    "type": "rate_limit_exceeded",
    "message": "Rate limit exceeded",
    "details": {
      "limit": 100,
      "period": "1m",
      "reset_at": "2026-01-15T17:30:00Z"
    },
    "request_id": "req_x5y4z3a2"
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
            <h3 className="text-[17px] font-medium text-white mb-3">Streaming Data</h3>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Get access session
session = client.access(
    dataset="medical-records-2024",
    purpose="model-training",
    duration="30d"
)

# Stream data for training
for batch in session.stream(batch_size=32):
    # Train model on batch
    model.train(batch)
    
    # Record training operation with metrics
    session.record_operation(
        operation_type="TRAIN",
        records=batch.record_ids,
        metadata={
            "model_id": "diagnostic-model-v2",
            "metrics": {"loss": model.current_loss, "accuracy": model.current_accuracy}
        }
    )`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Filtering and Transformations</h3>
            <CodeBlock 
              language="python" 
              code={`# Apply filters
elderly_diabetics = session.filter(
    query={
        "age": {"$gte": 65},
        "diagnosis": "diabetes"
    },
    sort={"age": -1},
    limit=100
)

print(f"Found {len(elderly_diabetics)} records")

# Apply transformations
anonymized = session.transform(
    records=elderly_diabetics,
    transformation="anonymize",
    parameters={
        "fields": ["patient_id", "name", "address"],
        "method": "hash"
    }
)

# Get specific record
patient = session.get_record("rec_a1b2c3")
print(f"Patient age: {patient.age}, diagnosis: {patient.diagnosis}")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Working with Aggregations</h3>
            <CodeBlock 
              language="python" 
              code={`# Perform aggregations server-side
results = session.aggregate([
    {"$match": {"age": {"$gte": 50}}},
    {"$group": {
        "_id": "$diagnosis",
        "count": {"$sum": 1},
        "avg_age": {"$avg": "$age"}
    }},
    {"$sort": {"count": -1}}
])

for result in results:
    print(f"Diagnosis: {result['_id']}")
    print(f"Count: {result['count']}")
    print(f"Average age: {result['avg_age']}")

# Close session when done
session.close(reason="Analysis complete")`}
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
          
          <a 
            href="/docs/api/billing" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Billing API</span>
              <span className="text-[14px] text-neutral-600 ml-3">Manage usage metrics and billing</span>
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
