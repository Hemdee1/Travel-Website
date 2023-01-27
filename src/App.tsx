import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BookYourTrip from "./components/BookYourTrip";
import Category from "./components/Category";
import Decore from "./components/decore";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Decore />
      <Header />
      <Hero />
      <Category />
      <Destination />
      <BookYourTrip />
      <Testimonial />
      <Logos />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
