import Search from '../../components/docs/Search';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <div className="sticky top-0 z-50 bg-[#000]/80 backdrop-blur border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-sm text-gray-500">XASE Docs</div>
          <Search />
        </div>
      </div>
      {children}
    </div>
  );
}
