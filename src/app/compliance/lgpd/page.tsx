export default function LGPDPage() {
  return (
    <main className="min-h-screen px-6 py-24 text-white bg-[#16181b]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">LGPD</h1>
        <p className="text-gray-400 mb-12">Right to explanation and accountability for automated decisions.</p>
        <div className="grid gap-4 text-left text-sm">
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Art. 20 — Right to explanation → SHAP/LIME in bundle</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Accountability — Identity-linked interventions</div>
        </div>
      </div>
    </main>
  );
}
