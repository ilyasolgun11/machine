import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//Services Paths
import ServicesPath from "./components/Paths/ServicesPath/ServicesPath/ServicesPath";
import Diagnostic from "./components/Paths/ServicesPath/DiagnosticPath/DiagnosticPath";
import TiresAndWheelPath from "./components/Paths/ServicesPath/Tires&WheelsPath/TiresAndWheelsPath";
import EnginesPath from "./components/Paths/ServicesPath/EnginesPath/EnginesPath";
import BrakeRepairPath from "./components/Paths/ServicesPath/BrakeRepairPath/BrakeRepairPath";
import OilChangePath from "./components/Paths/ServicesPath/OilChangePath/OilChangePath";
import TransmissionPath from "./components/Paths/ServicesPath/TransmissionPath/TransmissionPath";
//Services Paths
//Vehicles Paths
import VehiclesPath from ".//components/Paths/VehiclesPath/VehiclesPath";
import AudiPath from "./components/Paths/VehiclesPath/AudiPath/AudiPath";
import BMWPath from "./components/Paths/VehiclesPath/BMWPath/BMWPath";
import CadillacPath from "./components/Paths/VehiclesPath/CadillacPath/CadillacPath";
import ChrystlerPath from "./components/Paths/VehiclesPath/ChrystlerPath/ChrystlerPath";
import ChevroletPath from "./components/Paths/VehiclesPath/ChevroletPath/ChevroletPath";
import DodgePath from "./components/Paths/VehiclesPath/DodgePath/DodgePath";
import FordPath from "./components/Paths/VehiclesPath/FordPath/FordPath";
import FiatPath from "./components/Paths/VehiclesPath/FiatPath/FiatPath";
import HondaPath from "./components/Paths/VehiclesPath/HondaPath/HondaPath";
import HyundaiPath from "./components/Paths/VehiclesPath/HyundaiPath/HyundaiPath";
//Vehicles Paths
//Specials Paths
import SpecialsPath from "./components/Paths/SpecialsPath/SpecialsPath";
import AppointmentPath from "./components/Paths/AppointmentPath/AppointmentPath";
//Specials Paths
//About Path
import AboutPath from "./components/Paths/AboutPath/AboutPath";
//About Path
//Reviews Path
import ReviewsPath from "./components/Paths/ReviewsPath/ReviewsPath";
//Reviews Path
//Contact Path
import ContactPath from "./components/Paths/ContactPath/ContactPath";
//Contact Path

import ScrollToTopOnNavigate from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <ScrollToTopOnNavigate />
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPath />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/tiresandwheels" element={<TiresAndWheelPath />} />
          <Route path="/engines" element={<EnginesPath />} />
          <Route path="/brakerepair" element={<BrakeRepairPath />} />
          <Route path="/oilchange" element={<OilChangePath />} />
          <Route path="/transmission" element={<TransmissionPath />} />
          <Route path="/vehicles" element={<VehiclesPath />} />
          <Route path="/audi" element={<AudiPath />} />
          <Route path="/bmw" element={<BMWPath />} />
          <Route path="/cadillac" element={<CadillacPath />} />
          <Route path="/chrystler" element={<ChrystlerPath />} />
          <Route path="/chevrolet" element={<ChevroletPath />} />
          <Route path="/dodge" element={<DodgePath />} />
          <Route path="/ford" element={<FordPath />} />
          <Route path="/fiat" element={<FiatPath />} />
          <Route path="/honda" element={<HondaPath />} />
          <Route path="/hyundai" element={<HyundaiPath />} />
          <Route path="/specials" element={<SpecialsPath />} />
          <Route path="/appointment" element={<AppointmentPath />} />
          <Route path="/about" element={<AboutPath />} />
          <Route path="/reviews" element={<ReviewsPath />} />
          <Route path="/contact" element={<ContactPath />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
