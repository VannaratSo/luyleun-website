import Hero from "@/components/Hero";
import LoanStep from "@/components/LoanStep";
import Navbar from "@/components/Navbar";
import Promos from "@/components/Promos";
import SendMoney from "@/components/SendMoney";
import ShowReel from "@/components/ShowReel";
import StrengthInNumbers from "@/components/StrengthInNumbers";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <LoanStep />
      <Promos />
      <ShowReel />
      <StrengthInNumbers />
    </main>
  );
}
