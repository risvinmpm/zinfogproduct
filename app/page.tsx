import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Aboutus from "../components/main/Aboutus";
import Features from "@/components/main/Features";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="main-padding">
        <Hero />
      </main>
      {/* <Aboutus /> */}
      <Features />
    </div>
  );
}
