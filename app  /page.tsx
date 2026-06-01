import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorld from "@/components/FeaturedWorld";
import CollectionsGrid from "@/components/CollectionsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedWorld />
      <CollectionsGrid />
      <Footer />
    </main>
  );
}
