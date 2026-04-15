import Hero from "./(home)/components/Hero";
import Features from "./(home)/components/Features";
import Pricing from "./(home)/components/Pricing";
// import Testimonials from "./(home)/components/Testimonials";
import SecureFundingProcess from "./(home)/components/SecureFundingProcess";
import ContactCTA from "./(home)/components/ContactCTA";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Pricing />
      {/* <Testimonials /> */}
      <SecureFundingProcess />
      <ContactCTA />
    </main>
  );
}
