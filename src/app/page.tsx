import Hero from "@/components/Hero";
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
      <SendMoney />
      <Promos />
      <ShowReel />
      <StrengthInNumbers />
    </main>
  );
}
