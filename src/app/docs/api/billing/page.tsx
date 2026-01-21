'use client';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';

export default function BillingAPIPage() {
  const managingUsageCode = `import xase

client = xase.Client(api_key="sk_...")

# Get session usage
session_usage = client.billing.get_session_usage("sess_7f6e5d4c")
print(f"Session duration: {session_usage.time_metrics.session_duration_hours} hours")
print(f"Records accessed: {session_usage.volume_metrics.records_accessed}")
print(f"Estimated cost: \${session_usage.pricing.total_cost}")

# Get monthly aggregated usage
monthly_usage = client.billing.get_aggregated_usage(
    start_date="2026-01-01",
    end_date="2026-01-31",
    group_by="dataset"
)

print(f"Total cost for January: \${monthly_usage.costs.total_cost}")

# Get breakdown by dataset
for dataset in monthly_usage.breakdown_by_dataset:
    print(f"Dataset: {dataset.dataset_id}")
    print(f"Cost: \${dataset.cost}")
    print(f"Hours: {dataset.hours}")
    print(f"Records: {dataset.records}")`;

  const managingInvoicesCode = `# List pending invoices
pending_invoices = client.billing.list_invoices(status="PENDING")

for invoice in pending_invoices:
    print(f"Invoice {invoice.id}: \${invoice.amount} due on {invoice.due_date}")
    
    # Get invoice details
    details = client.billing.get_invoice(invoice.id)
    for item in details.line_items:
        print(f"- {item.description}: \${item.amount}")
    
    # Download invoice PDF
    client.billing.download_invoice_pdf(invoice.id, f"./invoice_{invoice.id}.pdf")
    
    # Pay an invoice
    payment = client.billing.pay_invoice(
        invoice_id=invoice.id,
        payment_method_id="pm_visa_1234"
    )
    print(f"Payment status: {payment.status}")
    print(f"Receipt: {payment.receipt_url}")`;

  const forDataHoldersCode = `# For data holders
# Get revenue overview
revenue = client.billing.get_revenue_summary(
    start_date="2026-01-01",
    end_date="2026-01-31"
)
print(f"Total revenue: \${revenue.total}")
print(f"Platform fees: \${revenue.platform_fees}")
print(f"Net revenue: \${revenue.net}")

# Get payouts
payouts = client.billing.list_payouts(
    start_date="2026-01-01",
    end_date="2026-01-31"
)
for payout in payouts:
    print(f"Payout {payout.id}: \${payout.amount} on {payout.date}")
    
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
          Billing API
        </h1>
        <p className="text-[16px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          The Billing API provides access to usage metrics, invoicing, and payment management for both AI labs and data holders, ensuring transparent and automated financial transactions.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          API endpoints
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Get Session Usage</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/billing/usage/sessions/{session_id}

# Response (200 OK)
{
  "session_id": "sess_7f6e5d4c",
  "time_metrics": {
    "session_duration_seconds": 22500,
    "session_duration_hours": 6.25,
    "active_time_minutes": 217.4,
    "idle_time_minutes": 157.6
  },
  "volume_metrics": {
    "records_accessed": 15273,
    "total_data_bytes": 2652389274,
    "total_data_gb": 2.47
  },
  "operation_metrics": {
    "read_operations": 157,
    "filter_operations": 23,
    "transform_operations": 45,
    "train_operations": 89,
    "total_operations": 314
  },
  "pricing": {
    "time_rate": 10.00,
    "time_cost": 62.50,
    "record_rate": 0.001,
    "record_cost": 15.27,
    "data_rate": 5.00,
    "data_cost": 12.35,
    "operation_rate": 0.005,
    "operation_cost": 1.57,
    "total_cost": 91.69,
    "currency": "USD"
  },
  "last_updated": "2026-01-15T17:30:00Z"
}`}
            />
            <div className="mt-4 space-y-2 text-[14px] text-neutral-500">
              <p>This endpoint provides detailed usage metrics and cost calculations for a specific session.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Get Aggregated Usage</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/billing/usage?start_date=2026-01-01&end_date=2026-01-31

# Query Parameters
# start_date (required) - Start date in ISO format
# end_date (required) - End date in ISO format
# dataset_id (optional) - Filter by dataset ID
# group_by (optional) - Group results by: "day", "week", "month", "dataset", "model"

# Response (200 OK)
{
  "period": {
    "start_date": "2026-01-01T00:00:00Z",
    "end_date": "2026-01-31T23:59:59Z"
  },
  "metrics": {
    "total_sessions": 32,
    "total_hours": 247.5,
    "total_records": 157842,
    "total_gb": 32.7,
    "total_operations": 8941
  },
  "costs": {
    "time_cost": 2475.00,
    "record_cost": 157.84,
    "data_cost": 163.50,
    "operation_cost": 44.71,
    "total_cost": 2841.05,
    "currency": "USD"
  },
  "breakdown_by_dataset": [
    {
      "dataset_id": "dataset_medical_records_2025",
      "sessions": 24,
      "hours": 198.2,
      "records": 121547,
      "gb": 27.3,
      "operations": 7124,
      "cost": 2274.84
    },
    {
      "dataset_id": "dataset_financial_2025",
      "sessions": 8,
      "hours": 49.3,
      "records": 36295,
      "gb": 5.4,
      "operations": 1817,
      "cost": 566.21
    }
  ]
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">List Invoices</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/billing/invoices?status=PENDING

# Query Parameters
# status (optional) - Filter by status: "PENDING", "PAID", "OVERDUE", "CANCELED"
# issued_after (optional) - Filter by issue date
# issued_before (optional) - Filter by issue date
# limit (optional) - Limit results (default: 20, max: 100)
# offset (optional) - Pagination offset

# Response (200 OK)
{
  "data": [
    {
      "invoice_id": "inv_a1b2c3d4",
      "status": "PENDING",
      "issued_date": "2026-02-01T00:00:00Z",
      "due_date": "2026-02-15T00:00:00Z",
      "amount": 2841.05,
      "currency": "USD",
      "period": {
        "start_date": "2026-01-01T00:00:00Z",
        "end_date": "2026-01-31T23:59:59Z"
      }
    },
    {
      "invoice_id": "inv_e5f6g7h8",
      "status": "PAID",
      "issued_date": "2026-01-01T00:00:00Z",
      "due_date": "2026-01-15T00:00:00Z",
      "amount": 2157.32,
      "currency": "USD",
      "period": {
        "start_date": "2025-12-01T00:00:00Z",
        "end_date": "2025-12-31T23:59:59Z"
      },
      "paid_date": "2026-01-10T14:32:17Z"
    }
  ],
  "pagination": {
    "total": 2,
    "limit": 20,
    "offset": 0,
    "has_more": false
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Get Invoice Details</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/billing/invoices/{invoice_id}

# Response (200 OK)
{
  "invoice_id": "inv_a1b2c3d4",
  "status": "PENDING",
  "issued_date": "2026-02-01T00:00:00Z",
  "due_date": "2026-02-15T00:00:00Z",
  "customer": {
    "id": "cust_123abc",
    "name": "Medical AI Research",
    "email": "billing@medical-ai.org",
    "address": {
      "line1": "123 AI Street",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94105",
      "country": "US"
    }
  },
  "line_items": [
    {
      "description": "Time-based usage (247.5 hours)",
      "amount": 2475.00
    },
    {
      "description": "Record-based usage (157,842 records)",
      "amount": 157.84
    },
    {
      "description": "Volume-based usage (32.7 GB)",
      "amount": 163.50
    },
    {
      "description": "Operation-based usage (8,941 operations)",
      "amount": 44.71
    }
  ],
  "subtotal": 2841.05,
  "tax": 255.69,
  "total": 3096.74,
  "currency": "USD",
  "payment_terms": "Net 15",
  "notes": "Thank you for your business.",
  "pdf_url": "https://api.xase.ai/v1/billing/invoices/inv_a1b2c3d4/pdf"
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Pay Invoice</h3>
            <CodeBlock 
              language="bash" 
              code={`POST https://api.xase.ai/v1/billing/invoices/{invoice_id}/pay

# Request Body
{
  "payment_method_id": "pm_visa_1234"
}

# Response (200 OK)
{
  "payment_id": "pay_i9j8k7l6",
  "invoice_id": "inv_a1b2c3d4",
  "status": "COMPLETED",
  "amount": 3096.74,
  "currency": "USD",
  "payment_date": "2026-02-03T14:27:32Z",
  "payment_method": {
    "type": "credit_card",
    "last4": "1234",
    "brand": "visa"
  },
  "receipt_url": "https://api.xase.ai/v1/billing/receipts/pay_i9j8k7l6"
}`}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">List Payouts (Data Holders)</h3>
            <CodeBlock 
              language="bash" 
              code={`GET https://api.xase.ai/v1/billing/payouts?status=COMPLETED

# Query Parameters
# status (optional) - Filter by status: "PENDING", "COMPLETED", "FAILED"
# created_after (optional) - Filter by creation date
# created_before (optional) - Filter by creation date
# limit (optional) - Limit results (default: 20, max: 100)
# offset (optional) - Pagination offset

# Response (200 OK)
{
  "data": [
    {
      "payout_id": "payout_m3n4o5p6",
      "status": "COMPLETED",
      "created_at": "2026-02-04T09:15:48Z",
      "completed_at": "2026-02-04T09:17:22Z",
      "amount": 2632.23,
      "currency": "USD",
      "period": {
        "start_date": "2026-01-01T00:00:00Z",
        "end_date": "2026-01-31T23:59:59Z"
      }
    },
    {
      "payout_id": "payout_q7r8s9t0",
      "status": "COMPLETED",
      "created_at": "2026-01-05T11:22:37Z",
      "completed_at": "2026-01-05T11:24:15Z",
      "amount": 1833.72,
      "currency": "USD",
      "period": {
        "start_date": "2025-12-01T00:00:00Z",
        "end_date": "2025-12-31T23:59:59Z"
      }
    }
  ],
  "pagination": {
    "total": 2,
    "limit": 20,
    "offset": 0,
    "has_more": false
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
            <h3 className="text-[17px] font-medium text-white mb-3">Managing Usage</h3>
            <CodeBlock 
              language="python" 
              code={managingUsageCode}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Managing Invoices</h3>
            <CodeBlock 
              language="python" 
              code={managingInvoicesCode}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">For Data Holders</h3>
            <CodeBlock 
              language="python" 
              code={forDataHoldersCode}
            />
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-white mb-3">Usage Controls</h3>
            <CodeBlock 
              language="python" 
              code={usageControlsCode}
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
            href="/docs/guides/metering" 
            className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
          >
            <div>
              <span className="text-[15px] text-white">Usage Metering</span>
              <span className="text-[14px] text-neutral-600 ml-3">Learn how usage is measured</span>
            </div>
            <svg className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
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
