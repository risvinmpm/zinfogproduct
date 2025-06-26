import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Aboutus from "../components/main/Aboutus";
import Features from "@/components/main/Features";
import Training from "../components/main/Training";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="main-padding">
        <Hero />
      </main>
      {/* <Aboutus /> */}
      <Features />
      <Training />
    </div>
  );
}
