import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlaced from "../OrderPlaced/OrderPlaced";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState(() => {
    const storeCart = localStorage.getItem("cart");
    return storeCart ? JSON.parse(storeCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const storeWishlist = localStorage.getItem("wishlist");
    return storeWishlist ? JSON.parse(storeWishlist) : [];
  });

  // Total Calculations
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const shippingFee = totalItems * 2;
  const orderTotal = subtotal + shippingFee;

  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  // save items to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  // input box me click karne par items scroll hokar uper aa jayenge
  // handleScroll
  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Card and Wishlist Tab function
  const handlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  //ClousePanel function
  const handleclose = () => setActivePanel(null);

  // RemoveItem
  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // QuantityIncrement
  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  // QuantityDecrement
  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // AddToCard function
  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("item is already in the cart");
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Wishlist function
  const addToWishlist = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      const addDate = new Date().toLocaleDateString("en-GB");
      setWishlist([...wishlist, { ...product, addDate }]);
    }
  };

  // ClearWishList
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <div>
      {/* Navbar  */}
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
      />

      {/* Banner  */}
      <Banner />

      {/* Product  */}
      <Product
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlist={wishlist}
      />

      {/* Cart Tab  */}
      <Cart
        activePanel={activePanel}
        handleclose={handleclose}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subtotal={subtotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />

      {/* Wishlist Tab  */}
      <Wishlist
        activePanel={activePanel}
        handlePanel={handleclose}
        wishlist={wishlist}
        addToCart={addToCart}
        clearWishlist={clearWishlist}
      />

      {/* OrderSumary  */}
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subtotal={subtotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderSummary={setOrderSummary}
          setOrderPlaced={setOrderPlaced}
          setCart={setCart}
        />
      )}

      {/* OrderPlaced  */}
      {orderPlaced && <OrderPlaced setOrderPlaced={setOrderPlaced} />}
    </div>
  );
};

export default Home;
