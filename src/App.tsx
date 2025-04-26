import Navbar from "./components/ui/navbar";
import HeroSection from "./components/sections/hero-section";
import Companies from "./components/sections/companies";
import CardSection from "./components/sections/card-section";

const App = () => {
  return (
    <main className="relative bg-gray-900 h-screen">
      <Navbar />
      <HeroSection />
      <Companies />
      <CardSection />
    </main>
  );
};

export default App;
