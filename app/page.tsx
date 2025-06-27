import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Aboutus from "../components/main/Aboutus";
import Features from "@/components/main/Features";
import Training from "../components/main/Training";
import Team from "@/components/main/Team";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="main-padding">
          <Hero />
        </div>
        {/* <Aboutus /> */}
        <Features />
        <Training />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
