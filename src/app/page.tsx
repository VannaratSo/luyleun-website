import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Promos from "@/components/Promos";
import StrengthInNumbers from "@/components/StrengthInNumbers";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Promos />
      <StrengthInNumbers />
    </main>
  );
}
