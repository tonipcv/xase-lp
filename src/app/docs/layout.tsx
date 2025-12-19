import Search from '../../components/docs/Search';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <div className="sticky top-0 z-50 bg-[#000]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">XASE Docs</div>
          <div className="flex-1 max-w-md">
            <Search />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
