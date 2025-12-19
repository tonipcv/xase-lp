export default function EUAIActPage() {
  return (
    <main className="min-h-screen px-6 py-24 text-white bg-[#16181b]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">EU AI Act</h1>
        <p className="text-gray-400 mb-12">XASE maps directly to high-risk system requirements: oversight, traceability, documentation.</p>
        <div className="grid gap-4 text-left text-sm">
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Art. 11 — Model documentation → Model cards and metrics</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Art. 14 — Human oversight → Signed HITL records</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Art. 15 — Accuracy/Robustness → Evidence bundles and registry checks</div>
        </div>
      </div>
    </main>
  );
}
