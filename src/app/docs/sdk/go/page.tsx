import Sidebar from '../../../../components/docs/Sidebar';
import Tabs from '../../../../components/docs/Tabs';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function GoSDKPage() {
  const install = `go get github.com/xase-ai/xase-go`;

  const basic = `package main

import (
    "fmt"
    xase "github.com/xase-ai/xase-go"
)

func main() {
    client := xase.NewClient(xase.Config{ APIKey: "xase_pk_..." })

    record, err := client.Records.Create(xase.RecordCreateParams{
        ModelID: "credit-model-v2",
        Input: map[string]any{"customer_id": "cust_123", "income": 85000},
        Output: map[string]any{"decision": "APPROVED", "limit": 25000},
        Confidence: xase.Float(0.94),
    })
    if err != nil { panic(err) }

    fmt.Println("Recorded:", record.ID)
}`;

  const intervene = `intervention, err := client.Records.Intervene(xase.InterveneParams{
    RecordID: record.ID,
    ActorEmail: "analyst@company.com",
    Action: "APPROVED",
    Reason: "Documentation verified",
})
if err != nil { panic(err) }
fmt.Println("Intervention:", intervention.ID)`;

  const exportCode = `bundle, err := client.Exports.Create(xase.ExportCreateParams{
    RecordID: record.ID,
    IncludeRelated: xase.Bool(true),
})
if err != nil { panic(err) }
err = bundle.Download("./evidence_bundle.zip")
if err != nil { panic(err) }`;

  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Go SDK</h1>
        <p className="text-lg text-gray-400 mb-8">Install and use the XASE Go SDK.</p>

        <h2 className="text-2xl font-light mt-8 mb-3">Installation</h2>
        <CodeBlock language="bash" code={install} />

        <h2 className="text-2xl font-light mt-8 mb-3">Basic Usage</h2>
        <CodeBlock language="go" filename="main.go" code={basic} />

        <h2 className="text-2xl font-light mt-8 mb-3">Human Intervention</h2>
        <CodeBlock language="go" filename="intervene.go" code={intervene} />

        <h2 className="text-2xl font-light mt-8 mb-3">Export Evidence Bundle</h2>
        <CodeBlock language="go" filename="export.go" code={exportCode} />

        <Callout type="info">Set <code className='text-gray-300'>XASE_API_KEY</code> in environment for production apps.</Callout>
      </main>
    </div>
  );
}
