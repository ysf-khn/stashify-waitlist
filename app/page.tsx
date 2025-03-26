import EarlyAccess from "./components/EarlyAccess";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import ForWhom from "./components/ForWhom";
import Footer from "./components/Footer";
import Waitlist from "./components/Waitlist";
import HowItWorks from "./components/HowItWorks";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ForWhom />
      <EarlyAccess />
      <Waitlist />
      <Footer />
    </div>
  );
}
