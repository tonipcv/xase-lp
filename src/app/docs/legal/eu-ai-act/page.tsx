'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function EUAIActPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          EU AI Act Compliance
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Xase helps AI Labs and Data Holders comply with the EU AI Act by providing governance controls, evidence generation, and regulatory documentation for high-risk AI systems.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          EU AI Act overview
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            The EU AI Act is the world's first comprehensive regulatory framework for AI systems, establishing:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Risk-based approach</span> with specific requirements for high-risk AI</li>
            <li>— <span className="text-neutral-300">Technical documentation</span> requirements for AI systems</li>
            <li>— <span className="text-neutral-300">Human oversight</span> for significant decisions</li>
            <li>— <span className="text-neutral-300">Transparency</span> and explainability obligations</li>
            <li>— <span className="text-neutral-300">Risk management</span> and quality management systems</li>
            <li>— <span className="text-neutral-300">Conformity assessment</span> procedures and CE marking</li>
          </ul>
          <p className="pt-2">
            The EU AI Act applies to <span className="text-white">providers, deployers, and importers</span> of AI systems used in the EU, regardless of where they are established.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Key EU AI Act requirements
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Article 11: Technical Documentation</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Xase automatically generates technical documentation for high-risk AI systems:
            </p>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Generate EU AI Act technical documentation
tech_doc = client.compliance.create_technical_documentation(
    model_id="diagnostic-model-v2",
    documentation_type="eu_ai_act",
    sections=[
        "system_description",
        "risk_management",
        "data_governance",
        "technical_specifications",
        "human_oversight_measures",
        "accuracy_metrics",
        "cybersecurity_measures"
    ],
    format="pdf"  # or "html", "markdown"
)

# Save documentation for conformity assessment
tech_doc.download("./eu_ai_act_technical_documentation.pdf")`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Article 14: Human Oversight</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Xase enables and documents human oversight:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Configure human oversight requirements
client.compliance.configure_human_oversight(
    model_id="diagnostic-model-v2",
    requirements={
        "review_percentage": 100,  # 100% human review
        "oversight_roles": ["medical_professional", "legal_advisor"],
        "review_timeout_hours": 24,  # Maximum time allowed for review
        "escalation_path": "medical_director@hospital.org",
        "required_documentation": ["review_reason", "decision_rationale"]
    }
)

# Record human intervention with all required EU AI Act fields
intervention = client.interventions.create(
    record_id="rec_a1b2c3",
    actor_email="doctor@hospital.org",
    actor_role="medical_professional",
    action="APPROVED",
    reason="Clinical indicators consistent with model output",
    oversight_notes="Verified with patient history and latest lab results",
    response_time_minutes=45
)`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Article 17: Quality Management System</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Xase facilitates quality management documentation and audits:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "quality_management": {
    "documented_procedures": [
      {
        "procedure_id": "AI-QMS-001",
        "title": "Testing Strategy for High-Risk AI Systems",
        "version": "1.2",
        "last_updated": "2025-12-15T10:30:00Z",
        "responsible_party": "QA Manager",
        "link_to_document": "https://xase.ai/evidence/docs/AI-QMS-001.pdf"
      },
      {
        "procedure_id": "AI-QMS-002",
        "title": "Risk Management for AI Systems",
        "version": "2.0",
        "last_updated": "2026-01-10T14:15:00Z",
        "responsible_party": "Risk Officer",
        "link_to_document": "https://xase.ai/evidence/docs/AI-QMS-002.pdf"
      },
      {
        "procedure_id": "AI-QMS-003",
        "title": "Post-Market Monitoring of AI Systems",
        "version": "1.1",
        "last_updated": "2026-01-05T09:45:00Z",
        "responsible_party": "Product Manager",
        "link_to_document": "https://xase.ai/evidence/docs/AI-QMS-003.pdf"
      }
    ]
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Article 61: Post-Market Monitoring</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Continuous monitoring and evidence collection:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Configure post-market monitoring
client.compliance.setup_monitoring(
    model_id="diagnostic-model-v2",
    monitoring_config={
        "performance_metrics": ["accuracy", "fairness", "drift"],
        "alert_thresholds": {
            "accuracy_drop": 0.05,  # Alert on 5% accuracy decrease
            "drift_score": 0.15,    # Alert on 15% distribution drift
            "fairness_disparity": 0.10  # Alert on 10% disparity
        },
        "monitoring_frequency": "daily",
        "reporting_frequency": "monthly",
        "responsible_contacts": [
            "ai_safety@company.com", 
            "compliance@company.com"
        ]
    }
)

# Generate post-market monitoring report
monitoring_report = client.compliance.generate_monitoring_report(
    model_id="diagnostic-model-v2",
    start_date="2026-01-01",
    end_date="2026-01-31",
    include_incidents=True,
    include_performance_metrics=True,
    format="pdf"
)

# Save report for regulatory submission
monitoring_report.download("./eu_ai_act_monitoring_report_jan_2026.pdf")`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          How Xase helps with EU AI Act compliance
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Runtime Governance</h3>
            <p className="text-[14px] text-neutral-500">
              Policy Engine ensures AI systems operate only within permitted parameters, with real-time enforcement of usage rules.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Evidence Generation</h3>
            <p className="text-[14px] text-neutral-500">
              Automatic creation of immutable evidence bundles for all AI operations, supporting conformity assessment and audits.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Human Oversight</h3>
            <p className="text-[14px] text-neutral-500">
              Structured workflow for human review of AI decisions with complete traceability and documentation.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Technical Documentation</h3>
            <p className="text-[14px] text-neutral-500">
              Auto-generated EU AI Act-compliant documentation that evolves with your AI system.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Risk Management</h3>
            <p className="text-[14px] text-neutral-500">
              Tools to identify, assess, and mitigate risks in AI systems throughout their lifecycle.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">CE Marking Support</h3>
            <p className="text-[14px] text-neutral-500">
              Readiness assessment and documentation preparation for conformity assessment procedures.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          EU AI Act compliance checklist
        </h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Risk classification assessment</h4>
                <p className="text-[14px] text-neutral-500">
                  Determine if your AI system is high-risk under EU AI Act criteria
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Technical documentation</h4>
                <p className="text-[14px] text-neutral-500">
                  Generate and maintain comprehensive technical documentation
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Human oversight measures</h4>
                <p className="text-[14px] text-neutral-500">
                  Implement and document human oversight mechanisms
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Quality management system</h4>
                <p className="text-[14px] text-neutral-500">
                  Establish a quality management system for AI development
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Post-market monitoring</h4>
                <p className="text-[14px] text-neutral-500">
                  Implement continuous monitoring and reporting system
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Conformity assessment</h4>
                <p className="text-[14px] text-neutral-500">
                  Complete relevant conformity assessment procedure
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">CE marking</h4>
                <p className="text-[14px] text-neutral-500">
                  Apply CE marking once conformity is demonstrated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
          Next steps
        </h2>
        
        <div className="space-y-3">
          <a 
            href="/docs/legal/lgpd" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">LGPD Compliance</span>
              <span className="text-[14px] text-neutral-600 ml-3">Brazilian data protection requirements</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <a 
            href="/docs/guides/policy" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Policy Engine</span>
              <span className="text-[14px] text-neutral-600 ml-3">Configure EU AI Act-compliant policies</span>
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
