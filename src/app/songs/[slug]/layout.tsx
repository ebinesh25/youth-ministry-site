import Link from "next/link";

export default function SongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ fontFamily: "var(--font-montserrat), var(--font-noto-sans-tamil), sans-serif" }}>
      {/* Top bar */}
      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-black uppercase tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-montserrat), var(--font-noto-sans-tamil), sans-serif" }}
          >
            RYM<span className="text-[#0EA5E9]">.</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.1em] text-[#131B2E] transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-montserrat), var(--font-noto-sans-tamil), sans-serif" }}
          >
            BACK TO HOME
          </Link>
        </div>
      </header>
      <main className="min-h-screen bg-white pt-20">{children}</main>
    </div>
  );
}
