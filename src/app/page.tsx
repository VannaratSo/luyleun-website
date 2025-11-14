import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import Navbar from "@/components/Navbar";
import PhoneSteps from "@/components/PhoneSteps";
import ShowReel from "@/components/ShowReel";
import ArcCarousel from "@/components/CreativeCommunityV2";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <ArcCarousel />
      <Partnership />
      <PhoneSteps />
      <AboutUs />
      <ShowReel />
      <Feedback />
      <FAQ />
      <Footer />
    </main>
  );
}
