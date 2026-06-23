import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { EventProvider } from "@/components/providers/EventProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ConfettiProvider } from "@/components/providers/ConfettiProvider";
import { getEventData } from "@/lib/event";
import { generateStructuredEventSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export function generateMetadata(): Metadata {
  const data = getEventData();
  return {
    metadataBase: new URL("https://iccyouthinvitation.org"),
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords.join(", "),
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      images: [{ url: data.seo.ogImage, width: 1200, height: 630 }],
      type: data.seo.ogType as "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.title,
      description: data.seo.description,
      images: [data.seo.ogImage],
      site: data.seo.twitterHandle,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = getEventData();

  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-slate-950 text-white antialiased`}
      >
        <EventProvider>
          <ThemeProvider>
            <ConfettiProvider>{children}</ConfettiProvider>
          </ThemeProvider>
        </EventProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredEventSchema(data)),
          }}
        />
      </body>
    </html>
  );
}
