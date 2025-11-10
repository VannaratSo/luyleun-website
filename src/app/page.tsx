import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LoanSteps from "@/components/LoanSteps";
import Navbar from "@/components/Navbar";
import ShowReel from "@/components/ShowReel";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LoanSteps />
      <AboutUs />
      <ShowReel />
      <Footer />
    </main>
  );
}
