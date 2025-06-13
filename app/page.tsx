import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="main-padding">
        <Hero />
      </main>
    </div>
  );
}
