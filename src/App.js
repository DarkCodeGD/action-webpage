import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountdownSec from "./components/CountdownSec";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Teams from "./components/Teams";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CountdownSec />
      <Services /> {/* Already has the about section */}
      <Pricing />
      <Features />
      <Teams />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
