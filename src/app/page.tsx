import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LoanStep from "@/components/LoanStep";
import Navbar from "@/components/Navbar";
import ShowReel from "@/components/ShowReel";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LoanStep />
      <AboutUs />
      <ShowReel />
      <Footer />
    </main>
  );
}
