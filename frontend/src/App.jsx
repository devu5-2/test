import Amenities from "./components/amenities/Amenities.jsx";
import { Carousel } from "./components/carousal/Carousel.jsx";
import { slides } from "./components/carousal/carousalData.json";
import Faqs from "./components/faqs/Faqs.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PropertyDetails from "./components/propertyDetails/PropertyDetails.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './global.css';


function App() {
  return (
    <div>

      <ToastContainer />


      <div className="relative">
        {/* Navbar overlapping Carousel */}
        <Navbar />

        {/* Carousel as background */}
        <div className="h-screen w-full relative z-0 overflow-x-hidden">
          <Carousel data={slides} />
        </div>

        {/* PropertyDetails section */}
        <div className="relative z-10 bg-gray-100">
          <PropertyDetails />
        </div>
        {/* Amenities section */}
        <div className="bg-blue-50 min-h-screen">
          <Amenities />
        </div>
        <div>
          <Faqs />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
