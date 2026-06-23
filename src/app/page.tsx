import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Speakers from "@/components/sections/Speakers";
import WhyAttend from "@/components/sections/WhyAttend";
import Schedule from "@/components/sections/Schedule";
import Highlights from "@/components/sections/Highlights";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Registration from "@/components/sections/Registration";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";

const ConfettiOverlay = dynamic(
  () => import("@/components/ui/ConfettiOverlay"),
  { ssr: false }
);

const PrayerRequestPopup = dynamic(
  () => import("@/components/ui/PrayerRequestPopup"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ThemeToggle />

      <main>
        <Hero />
        <About />
        <Speakers />
        <WhyAttend />
        <Schedule />
        <Highlights />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Registration />
        <Contact />
        <Location />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ConfettiOverlay />
      <PrayerRequestPopup />
    </>
  );
}
