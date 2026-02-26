import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Awards from "@/components/Awards";
import Experience from "@/components/Experience";
import MoreSections from "@/components/MoreSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Publications />
        <Awards />
        <Experience />
        <MoreSections />
      </main>
      <Footer />
    </>
  );
}
