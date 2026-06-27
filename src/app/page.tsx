import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeHighlights from "@/components/sections/MarqueeHighlights";
import About from "@/components/sections/About";
import WhyAttend from "@/components/sections/WhyAttend";
import SpeakerHighlight from "@/components/sections/SpeakerHighlight";
import Schedule from "@/components/sections/Schedule";
import SongsSection from "@/components/sections/SongsSection";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        <Hero />
        <MarqueeHighlights />
        <About />
        <WhyAttend />
        <SpeakerHighlight />
        <Schedule />
        <SongsSection />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
