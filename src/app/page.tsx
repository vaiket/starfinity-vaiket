
import Header from "./(home)/components/Header";
import Hero from "./(home)/components/Hero";
import Features from "./(home)/components/Features";
import Pricing from "./(home)/components/Pricing";
import Testimonials from "./(home)/components/Testimonials";
import FAQ from "./(home)/components/FAQ";
import Footer from "./(home)/components/Footer";
import SecureFundingProcess from "./(home)/components/SecureFundingProcess";
import ContactCTA from "./(home)/components/ContactCTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <SecureFundingProcess />
      <ContactCTA />
    </main>
  );
}
