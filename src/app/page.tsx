import PromoBar from "./(home)/components/PromoBar";
import Header from "./(home)/components/Header";
import Hero from "./(home)/components/Hero";
import Features from "./(home)/components/Features";
import Pricing from "./(home)/components/Pricing";
import Testimonials from "./(home)/components/Testimonials";
import FAQ from "./(home)/components/FAQ";
import Footer from "./(home)/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBar />
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
