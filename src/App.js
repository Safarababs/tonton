import AboutUs from "./components/AboutUs";
import Contact from "./components/contact";
import Features from "./components/Features";
import Footer from "./components/footer/Footer";
import Popup from "./components/footer/Popup";
import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/pricing/Pricing";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
     <Header />
     
     <Home />
     <Popup />
     <Features />
     <Services />
     <Pricing />
     <AboutUs />
     <Contact />

     <Footer />
    </div>
  );
}

export default App;
