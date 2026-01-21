'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function LGPDPage() {
  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          LGPD Compliance
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Xase helps you comply with Brazil's Lei Geral de Proteção de Dados (LGPD) by providing governance controls, data access evidence, and proof of compliance for AI systems.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          LGPD requirements for AI
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            The LGPD establishes <span className="text-white">strict requirements</span> for organizations that use AI systems processing personal data, including:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Article 7</span> — Legal basis for data processing</li>
            <li>— <span className="text-neutral-300">Article 9</span> — Right to information and transparency</li>
            <li>— <span className="text-neutral-300">Article 10</span> — Purpose limitation and data minimization</li>
            <li>— <span className="text-neutral-300">Article 20</span> — Right to explanation for automated decisions</li>
            <li>— <span className="text-neutral-300">Article 46</span> — Security measures and data protection</li>
            <li>— <span className="text-neutral-300">Article 50</span> — Governance programs for data protection</li>
          </ul>
          <p className="pt-2">
            Organizations using AI systems must be able to <span className="text-white">prove compliance</span> with these requirements.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          How Xase helps with LGPD compliance
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">1. Legal Basis for Processing (Art. 7)</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Xase's Policy Engine ensures every data access has a valid legal basis:
            </p>
            <CodeBlock 
              language="json" 
              code={`{
  "policy_id": "policy_lgpd_compliance",
  "rules": [
    {
      "legal_basis": {
        "type": "consent",
        "verification_required": true
      },
      "data_categories": ["name", "email", "behavioral"],
      "allowed_purposes": ["model-training", "quality-improvement"],
      "retention_period": "180d"
    }
  ]
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">2. Purpose Limitation (Art. 10)</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Every access session must specify and enforce a purpose:
            </p>
            <CodeBlock 
              language="python" 
              code={`import xase

client = xase.Client(api_key="sk_...")

# Purpose is required and enforced
session = client.access(
    dataset="brazilian_customer_data",
    purpose="fraud-detection",  # Must match allowed purposes
    duration="30d"
)`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">3. Right to Explanation (Art. 20)</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Evidence bundles contain all data needed for explanations:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Access decision data for LGPD explanation
decision_record = client.records.get("rec_a1b2c3")

# Generate LGPD-compliant explanation
explanation = {
    "data_subject_id": "user_123",
    "decision_made": decision_record.output.decision,
    "factors_considered": decision_record.input.factors,
    "logic_used": "Decision tree with feature importance: " + 
                 str(decision_record.explanation.feature_importance),
    "human_oversight": decision_record.intervention.actor_email if decision_record.intervention else "No human review"
}

# Send explanation to data subject
client.notifications.send_explanation(
    data_subject_id="user_123",
    explanation=explanation,
    format="pdf"
)`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">4. Data Security (Art. 46)</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Comprehensive security measures for all data access:
            </p>
            <ul className="space-y-2 text-[14px] text-neutral-500 ml-4">
              <li>— End-to-end encryption for all data in transit</li>
              <li>— KMS-based encryption for data at rest</li>
              <li>— Cryptographic access logging and verification</li>
              <li>— Identity-verified access control</li>
              <li>— Multi-factor authentication for sensitive operations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">5. Governance Programs (Art. 50)</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Audit trails and reports support governance programs:
            </p>
            <CodeBlock 
              language="python" 
              code={`# Generate LGPD governance report
lgpd_report = client.compliance.create_report(
    report_type="lgpd_compliance",
    start_date="2026-01-01",
    end_date="2026-01-31",
    include_sections=[
        "legal_basis_summary",
        "purpose_limitation_evidence",
        "security_measures",
        "data_subject_requests",
        "data_access_log"
    ],
    format="pdf"
)

# Download report for ANPD inspection
lgpd_report.download("./lgpd_compliance_report.pdf")`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          LGPD-specific features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Data Subject Requests</h3>
            <p className="text-[14px] text-neutral-500">
              Built-in handling of access, deletion, and portability requests from Brazilian data subjects, with automatic evidence of compliance.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Data Processing Records</h3>
            <p className="text-[14px] text-neutral-500">
              Automatic generation of data processing records (RDPAs) required by LGPD, with complete activity logs.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">DPO Support</h3>
            <p className="text-[14px] text-neutral-500">
              Tools for Data Protection Officers to monitor compliance, respond to ANPD inquiries, and generate reports.
            </p>
          </div>
          
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Breach Notification</h3>
            <p className="text-[14px] text-neutral-500">
              Detection and documentation of potential data breaches, with notification workflows for ANPD reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          LGPD compliance checklist
        </h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Define legal basis for AI data use</h4>
                <p className="text-[14px] text-neutral-500">
                  Document the specific LGPD legal basis for each AI data processing activity
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Implement purpose limitation</h4>
                <p className="text-[14px] text-neutral-500">
                  Use Xase's Policy Engine to enforce purpose limitation for all data access
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Record all automated decisions</h4>
                <p className="text-[14px] text-neutral-500">
                  Capture all AI decisions with Xase's evidence system to enable explanations
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Implement security measures</h4>
                <p className="text-[14px] text-neutral-500">
                  Use Xase's security controls to protect personal data during AI processing
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-neutral-800 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-neutral-500 mt-0.5">✓</div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-1">Maintain governance documentation</h4>
                <p className="text-[14px] text-neutral-500">
                  Generate regular compliance reports using Xase's reporting tools
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
            href="/docs/legal/eu-ai-act" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">EU AI Act</span>
              <span className="text-[14px] text-neutral-600 ml-3">Compliance with European AI regulations</span>
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
              <span className="text-[14px] text-neutral-600 ml-3">Configure LGPD-compliant data access policies</span>
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
