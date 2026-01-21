'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function SettlementPage() {
  const aiLabsPayersCode = `import xase

client = xase.Client(api_key="sk_...")

# Get invoices for a period
invoices = client.billing.list_invoices(
    start_date="2026-01-01",
    end_date="2026-01-31",
    status="PENDING"  # or "PAID", "OVERDUE"
)

for invoice in invoices:
    print(f"Invoice {invoice.id}: ${'${invoice.total}'} due on {invoice.due_date}")

    # Get invoice details
    details = client.billing.get_invoice(invoice.id)
    for item in details.line_items:
        print(f"- {item.description}: ${'${item.amount}'}")

    # Pay an invoice
    payment = client.billing.pay_invoice(
        invoice_id=invoice.id,
        payment_method_id="pm_visa_1234"
    )
    print(f"Payment status: {payment.status}")
    print(f"Receipt: {payment.receipt_url}")`;

  const dataHoldersPayeesCode = `# For data holders
import xase

client = xase.Client(api_key="sk_...")

# Get revenue overview
revenue = client.billing.get_revenue_summary(
    start_date="2026-01-01",
    end_date="2026-01-31"
)
print(f"Total revenue: ${'${revenue.total}'}")
print(f"Platform fees: ${'${revenue.platform_fees}'}")
print(f"Net revenue: ${'${revenue.net}'}")

# Get payouts
payouts = client.billing.list_payouts(
    start_date="2026-01-01",
    end_date="2026-01-31"
)
for payout in payouts:
    print(f"Payout {payout.id}: ${'${payout.amount}'} on {payout.date}")

# Set payout preferences
client.billing.update_payout_preferences(
    frequency="MONTHLY",  # or "WEEKLY", "DAILY"
    threshold=100.00,  # minimum amount to trigger payout
    method={
        "type": "bank_account",
        "account_id": "ba_123def"
    }
)`;

  const usageControlsCode = `# Set spending limits
import xase

client = xase.Client(api_key="sk_...")

client.billing.set_spending_limit(
    dataset_id="dataset_medical_records_2025",
    limit_amount=5000.00,
    period="MONTHLY"
)

# Configure alerts
client.billing.create_billing_alert(
    name="High usage alert",
    threshold_amount=1000.00,
    threshold_type="MONTHLY_SPENDING",
    notification_email="finance@company.com"
)

# Set auto-suspension
client.billing.set_auto_suspension(
    threshold_amount=10000.00,
    notification_email="finance@company.com",
    allow_override=True,
    override_approvers=["cfo@company.com"]
)`;

  return (
    <DocsContent>
      <div className="mb-16">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Settlement
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Settlement automates the financial transactions between AI labs and data holders, with transparent, accurate, and automatic payment processing.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          How settlement works
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            Xase&apos;s settlement system <span className="text-white">automatically processes payments</span> between AI labs and data holders based on metered usage.
          </p>
          <p>The settlement flow includes:</p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— <span className="text-neutral-300">Usage calculation</span> — Precise tracking of usage metrics</li>
            <li>— <span className="text-neutral-300">Pricing application</span> — Rates applied to usage</li>
            <li>— <span className="text-neutral-300">Invoice generation</span> — Automatic billing documents</li>
            <li>— <span className="text-neutral-300">Payment processing</span> — Secure financial transactions</li>
            <li>— <span className="text-neutral-300">Revenue distribution</span> — Payments to data holders</li>
          </ul>
          <p className="pt-2">
            This creates a <span className="text-white">trustless financial relationship</span> between all parties.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Settlement process
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">1. Usage Calculation</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">At the end of a billing cycle, usage is tallied:</p>
            <CodeBlock
              language="json"
              code={`{
  "period_start": "2026-01-01T00:00:00Z",
  "period_end": "2026-01-31T23:59:59Z",
  "dataset_id": "dataset_medical_records_2025",
  "usage_summary": {
    "total_sessions": 14,
    "total_hours": 247.5,
    "total_records": 157842,
    "total_gb": 32.7
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">2. Pricing Calculation</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">Rates are applied to usage:</p>
            <CodeBlock
              language="json"
              code={`{
  "pricing_tiers": {
    "time_rate": [
      {"tier": "0-100 hours", "rate": 10.00},
      {"tier": "101-500 hours", "rate": 8.50},
      {"tier": ">500 hours", "rate": 7.00}
    ],
    "record_rate": 0.001,
    "volume_rate": 5.00
  },
  "calculations": {
    "time_cost": 2103.75,
    "record_cost": 157.84,
    "volume_cost": 163.50,
    "subtotal": 2425.09
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">3. Invoice Generation</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">Automatic invoice creation:</p>
            <CodeBlock
              language="json"
              code={`{
  "invoice_id": "inv_a1b2c3d4",
  "issued_date": "2026-02-01T00:00:00Z",
  "due_date": "2026-02-15T00:00:00Z",
  "status": "PENDING",
  "customer": {
    "id": "cust_123abc",
    "name": "Medical AI Research",
    "email": "billing@medical-ai.org"
  },
  "line_items": [
    {"description": "Time-based usage (247.5 hours)", "amount": 2103.75},
    {"description": "Record-based usage (157,842 records)", "amount": 157.84},
    {"description": "Volume-based usage (32.7 GB)", "amount": 163.50}
  ],
  "subtotal": 2425.09,
  "tax": 218.26,
  "total": 2643.35,
  "currency": "USD"
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">4. Payment Processing</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">Automatic payment collection:</p>
            <CodeBlock
              language="json"
              code={`{
  "payment_id": "pay_b2c3d4e5",
  "invoice_id": "inv_a1b2c3d4",
  "date": "2026-02-03T14:27:32Z",
  "status": "COMPLETED",
  "amount": 2643.35,
  "method": {
    "type": "credit_card",
    "last4": "1234",
    "brand": "visa"
  },
  "receipt_url": "https://xase.ai/receipts/pay_b2c3d4e5"
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">5. Revenue Distribution</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">Automatic payment to data holders:</p>
            <CodeBlock
              language="json"
              code={`{
  "payout_id": "payout_c3d4e5f6",
  "date": "2026-02-04T09:15:48Z",
  "status": "COMPLETED",
  "recipient": {
    "id": "holder_456def",
    "name": "Metropolitan Hospital",
    "account": "acct_789ghi"
  },
  "breakdown": {
    "total_payment": 2643.35,
    "xase_fee": 396.50,
    "data_holder_payment": 2246.85,
    "currency": "USD"
  },
  "reference": "inv_a1b2c3d4"
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Managing settlement
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">For AI Labs (Payers)</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">Manage your billing and payments:</p>
            <CodeBlock language="python" code={aiLabsPayersCode} />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">For Data Holders (Payees)</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">Manage your revenue and payouts:</p>
            <CodeBlock language="python" code={dataHoldersPayeesCode} />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Usage Alerts and Limits</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">Set spending controls and alerts:</p>
            <CodeBlock language="python" code={usageControlsCode} />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          Payment methods & security
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Payment Methods</h3>
            <p className="text-[14px] text-neutral-500">
              Multiple secure payment options including credit cards, ACH transfers, wire transfers, and enterprise billing.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Escrow Services</h3>
            <p className="text-[14px] text-neutral-500">
              Optional escrow for high-value transactions, releasing payment only when usage is verified.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Security Standards</h3>
            <p className="text-[14px] text-neutral-500">
              PCI DSS Level 1 compliant payment processing with full encryption of financial data.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-2">Transaction Records</h3>
            <p className="text-[14px] text-neutral-500">
              All financial transactions are recorded with the same evidence standards as data access.
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
            href="/docs/api/billing"
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Billing API</span>
              <span className="text-[14px] text-neutral-600 ml-3">Complete API reference for billing operations</span>
            </div>
            <svg
              className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="/docs/api/access"
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Access API</span>
              <span className="text-[14px] text-neutral-600 ml-3">Learn how to implement governed access</span>
            </div>
            <svg
              className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
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
