import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Navbar from "@/components/Navbar";
import PhoneSteps from "@/components/PhoneSteps";
import ShowReel from "@/components/ShowReel";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PhoneSteps />
      <AboutUs />
      <ShowReel />
      <Footer />
    </main>
  );
}
