const ITEMS = [
  "TRANSFORMING LIVES",
  "RENEWING MINDS",
  "EMPOWERING YOUTH",
];

export default function MarqueeHighlights() {
  const duplicated = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="w-full border-y-4 border-black bg-white">
      <div className="relative mx-auto flex h-20 w-full max-w-[1280px] items-center overflow-hidden px-0">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {duplicated.map((text, i) => (
            <div key={i} className="flex items-center gap-4">
              <span
                className="text-[36px] font-black uppercase leading-10"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color: "var(--rym-navy)",
                }}
              >
                {text}
              </span>
              <span className="h-8 w-8 shrink-0 rounded-full bg-[#0EA5E9]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
