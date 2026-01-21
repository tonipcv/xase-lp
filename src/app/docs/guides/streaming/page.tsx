import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function DataStreamingPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Data Streaming
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Access and train on sensitive data without downloading it. Data streaming ensures governance while providing full utility.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          The problem with data transfers
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            Traditionally, AI teams need to <span className="text-white">download data</span> to use it. This creates immediate problems:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Data leakage risk</span> — Once downloaded, controls are lost</li>
            <li>— <span className="text-neutral-300">Regulatory issues</span> — Data crossing borders triggers compliance problems</li>
            <li>— <span className="text-neutral-300">Governance gaps</span> — No way to enforce policies after transfer</li>
            <li>— <span className="text-neutral-300">Legal exposure</span> — Clear chain of liability to the AI team</li>
          </ul>
          <p className="pt-2">
            Xase enables <span className="text-white">data use without downloads</span> through governed streaming.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          How data streaming works
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">1. Create Access Session</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Start with policy-approved access:
            </p>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Get governed access to data
session = client.access(
    dataset="patient-records-2025",
    purpose="model-training",
    duration="30d"
)`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">2. Stream Data</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Stream batches for training with full governance:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Stream batches for training
for batch in session.stream(batch_size=32):
    # Train on data without downloading
    model.train_on_batch(batch)
    
    # All usage is automatically tracked
    # All policy constraints are enforced
    # All evidence is automatically generated`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">3. Access Specific Records</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Access specific entries when needed:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Get specific patient record
patient = session.get("patient_45678")

# Apply transformation with tracking
processed = session.transform(
    data=patient,
    function=anonymize_fields,
    metadata={"purpose": "privacy protection"}
)`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">4. Filtering and Queries</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Apply filters without downloading all data:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Stream with filters
filtered_data = session.stream(
    filter={
        "age": {"$gte": 18},
        "diagnosis": {"$in": ["diabetes", "hypertension"]}
    },
    batch_size=32
)

for batch in filtered_data:
    model.train_on_batch(batch)`}
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
            <h3 className="text-[17px] font-medium text-white mb-2">No Data Downloads</h3>
            <p className="text-[14px] text-neutral-500">
              Data never leaves the governed environment. All processing happens through the streaming interface.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Runtime Policy Enforcement</h3>
            <p className="text-[14px] text-neutral-500">
              Policies are continuously enforced during streaming. Revoked access stops streams immediately.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Automatic Tracking</h3>
            <p className="text-[14px] text-neutral-500">
              Every record access and operation is logged with identity, timestamp, and purpose.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Server-Side Filtering</h3>
            <p className="text-[14px] text-neutral-500">
              Apply filters server-side to reduce bandwidth and process only relevant data.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Advanced usage
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Streaming Aggregations</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Compute aggregations without downloading raw data:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Get aggregated statistics
stats = session.aggregate(
    pipeline=[
        {"$match": {"age": {"$gte": 30}}},
        {"$group": {
            "_id": "$diagnosis",
            "count": {"$sum": 1},
            "avg_age": {"$avg": "$age"}
        }}
    ]
)

for result in stats:
    print(f"Diagnosis: {result['_id']}")
    print(f"Count: {result['count']}")
    print(f"Avg age: {result['avg_age']}")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Streaming with Transforms</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Apply transformations during streaming:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Stream with transformation
for batch in session.stream(
    batch_size=32,
    transform=lambda data: normalize(data)
):
    model.train_on_batch(batch)`}
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
            href="/docs/guides/bundles" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Evidence Bundles</span>
              <span className="text-[14px] text-neutral-600 ml-3">Understand automatic evidence generation</span>
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
