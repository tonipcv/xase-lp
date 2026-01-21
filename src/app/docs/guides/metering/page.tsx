'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function UsageMeteringPage() {
  const sessionUsageCode = `import xase

client = xase.Client(api_key="sk_...")

# Get session usage
session_usage = client.billing.get_session_usage("sess_7f6e5d4c")
print(f"Duration: ${'${session_usage.time_metrics.session_duration_hours}'} hours")
print(f"Records: ${'${session_usage.volume_metrics.records_accessed}'}")
print(f"Estimated cost: $${'${session_usage.estimated_cost}'}")

# Get usage breakdown
usage_breakdown = session_usage.get_breakdown()
for category, cost_amount in usage_breakdown.items():
    print(f"${'${category}'}: $${'${cost_amount}'}")`;

  const usageReportCode = `# Generate monthly usage report
usage_report = client.billing.generate_usage_report(
    start_date="2026-01-01",
    end_date="2026-01-31",
    dataset_id="dataset_medical_records_2025",
    format="csv"  # or "json", "pdf"
)

# Save the report
usage_report.download("./january_usage_report.csv")

# Get aggregated metrics
usage_metrics = client.billing.get_aggregated_metrics(
    start_date="2026-01-01",
    end_date="2026-01-31"
)
print(f"Total sessions: ${'${usage_metrics.total_sessions}'}")
print(f"Total records: ${'${usage_metrics.total_records}'}")
print(f"Total hours: ${'${usage_metrics.total_hours}'}")
print(f"Total cost: $${'${usage_metrics.total_cost}'}")`;

  const realtimeMonitoringCode = `# Get active sessions
active_sessions = client.sessions.list(status="ACTIVE")

# Monitor usage in real-time
for session_obj in active_sessions:
    realtime_usage = client.billing.get_session_usage(session_obj.id)
    print(f"Session ${'${session_obj.id}'}")
    print(f"Runtime: ${'${realtime_usage.time_metrics.session_duration_hours}'} hours")
    print(f"Current cost: $${'${realtime_usage.estimated_cost}'}")
    
    # Set usage alerts
    client.billing.set_usage_alert(
        session_id=session_obj.id,
        threshold_amount=100,  # USD
        notification_email="alerts@company.com"
    )`;

  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Usage Metering
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Data usage is automatically metered, providing precise billing, transparent usage tracking, and predictable costs for AI labs and data holders.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          How usage metering works
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            Xase's Usage Metering system <span className="text-white">automatically tracks</span> how data is used, providing precise billing without manual intervention.
          </p>
          <p>
            The metering system records:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Records accessed</span> — Number of data points/records accessed</li>
            <li>— <span className="text-neutral-300">Volume</span> — Total data size in GB/TB</li>
            <li>— <span className="text-neutral-300">Duration</span> — Time spent using the data</li>
            <li>— <span className="text-neutral-300">Operations</span> — Computational operations performed</li>
            <li>— <span className="text-neutral-300">Sessions</span> — Number of access sessions</li>
          </ul>
          <p className="pt-2">
            This creates <span className="text-white">automatic billing</span> with no manual tracking needed.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Billing dimensions
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">1. Time-Based Metrics</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Usage is measured based on time:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "session_id": "sess_7f6e5d4c",
  "time_metrics": {
    "session_duration_hours": 6.25,
    "active_time_minutes": 217.4,
    "idle_time_minutes": 157.6,
    "time_rate": "$10/hour"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">2. Volume-Based Metrics</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Usage based on data volume:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "session_id": "sess_7f6e5d4c",
  "volume_metrics": {
    "records_accessed": 15273,
    "total_data_gb": 2.47,
    "record_rate": "$0.001/record",
    "volume_rate": "$5/GB"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">3. Operation-Based Metrics</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Usage based on operations performed:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "session_id": "sess_7f6e5d4c",
  "operation_metrics": {
    "read_operations": 157,
    "filter_operations": 23,
    "transform_operations": 45,
    "train_operations": 89,
    "operation_rate": "$0.005/operation"
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">4. Special Metrics</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Domain-specific metrics:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "session_id": "sess_7f6e5d4c",
  "special_metrics": {
    "healthcare_patient_records": 4739,
    "healthcare_rate": "$0.02/patient",
    "financial_transactions": 8214,
    "financial_rate": "$0.01/transaction"
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Accessing usage data
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Session Usage</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Access usage data for a specific session:
            </p>
            <CodeBlock 
              language="python" 
              code={sessionUsageCode}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Usage Reports</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Generate usage reports for time periods:
            </p>
            <CodeBlock 
              language="python" 
              code={usageReportCode}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Real-Time Monitoring</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Monitor usage in real-time:
            </p>
            <CodeBlock 
              language="python" 
              code={realtimeMonitoringCode}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Billing models
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Pay-per-Use</h3>
            <p className="text-[14px] text-neutral-500">
              Standard pricing based on exact usage metrics with no minimums. Ideal for variable or experimental usage.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Usage Tiers</h3>
            <p className="text-[14px] text-neutral-500">
              Volume discounts automatically applied as usage increases, with rates decreasing at higher tiers.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Committed Use</h3>
            <p className="text-[14px] text-neutral-500">
              Discounted rates for upfront commitments to a certain usage level, with flexible terms.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Custom Pricing</h3>
            <p className="text-[14px] text-neutral-500">
              For enterprise clients with unique requirements, custom pricing models can be configured.
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
            href="/docs/guides/settlement" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Settlement</span>
              <span className="text-[14px] text-neutral-600 ml-3">Learn about automated billing and payment</span>
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
              <span className="text-[14px] text-neutral-600 ml-3">Complete API reference for billing operations</span>
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
