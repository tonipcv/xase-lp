export default function SecurityPage() {
  return (
    <main className="min-h-screen px-6 py-24 text-white bg-[#16181b]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Security</h1>
        <p className="text-gray-400 mb-12">Trust nothing. Verify everything. Including us.</p>
        <div className="grid gap-4 text-left text-sm">
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Encryption at Rest — AES-256</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Encryption in Transit — TLS 1.3</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Signature — RSA-SHA256 via AWS KMS</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Immutability — WORM + SQL triggers + hash chain</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Access Control — RBAC + API key scopes</div>
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4">Data Residency — AWS US, EU, or Brazil</div>
        </div>
      </div>
    </main>
  );
}
