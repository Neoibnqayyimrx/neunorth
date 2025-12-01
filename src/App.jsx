import About from "./segments/About";
import Acheivement from "./segments/Acheivement";
import Hero from "./segments/Hero";
import Navbar from "./segments/Navbar"
import Portfolio from "./segments/Portfolio";
import Service from "./segments/Service";


import "swiper/css"
import Testimonials from "./segments/Testimonials";
import Contact from "./segments/Contact";
import Blog from "./segments/Blog";
import Footer from "./segments/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Acheivement />
    <About />
    <Service />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Blog />
    <Footer />
    </>
     
  );
}

export default App;
