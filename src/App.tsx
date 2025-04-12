import Navbar from "./components/ui/navbar";
import HeroSection from "./components/sections/hero-section";

const App = () => {
  return (
    <main className="relative bg-gray-900 h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default App;
