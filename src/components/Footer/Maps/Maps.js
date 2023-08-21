import "./Maps.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";
import BannerImg from "../../HeroSection/images/banner-shape.png";

const mapStyles = {
  margin: "0px auto",
  width: "100%",
  height: "500px",
  boxShadow: "10px 10px 20px 2px rgba(30, 30, 30, 0.2)",
};

const Maps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const upperContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (upperContainerRef.current) {
        const rect = upperContainerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const googleMapsApiKey = "AIzaSyDeJfV6oRSy2Nq_di-r9JecNwEvnwXtlhY";
  const propertyLocationLatLng = { lat: 41.89273, lng: 12.52737 };
  return (
    <div className="map-container container">
      <div
        ref={upperContainerRef}
        className={`free-ap-upper-container maps-float-container ${
          isVisible ? "float-up" : ""
        }`}
      >
        <div className="banner-text__container">
          <img src={BannerImg} className="banner-img" />
          <h3 className="banner-text">VISIT US AT OUR LOCATION</h3>
        </div>
        <h2 className="free-ap-header-1 maps-header">OUR LOCATION</h2>
      </div>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={propertyLocationLatLng}
          zoom={15}
        >
          <Marker position={propertyLocationLatLng} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
