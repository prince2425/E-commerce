import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", changeNavbar);
  }, []);

  // input box me click karne par items scroll hokar uper aa jayenge
  // handleScroll
  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Card and Wishlist Tab function
  const handlePannel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  return (
    <div>
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePannel}
      />

      {/* Banner  */}
      <Banner />

      {/* Product  */}
      <Product searchTerm={searchTerm} />

      {/* Cart Tab  */}
      <Cart activePanel={activePanel} />

      {/* Wishlist Tab  */}
      <Wishlist 
      activePanel={activePanel}
      />
    </div>
  );
};

export default Home;
