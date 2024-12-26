import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // Initialize with 0, instead of null
  const [totalCart, setTotalCart] = useState(0);
  const [totalWishlist, setTotalWishlist] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [price, setPrice] = useState(0);

  // Add to Cart
  const addToCart = (product) => {
    const isExistOnCart = cartItems.find(
      (item) => item.product.product_id === product.product.product_id
    );
    if (isExistOnCart) {
      toast.warn("This product is already in the cart!");
      return;
    }
    toast.success("Product added to cart");

    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems, product];
      handleTotalCartList(updatedCartItems);
      setPrice((prevPrice) => prevPrice + product.product.price); // Correct price update
      return updatedCartItems;
    });
  };

  // Add to Wishlist
  const addToWishlist = (product) => {
    const isExistOnWishlist = wishItems.find(
      (item) => item.product.product_id === product.product.product_id
    );
    if (isExistOnWishlist) {
      toast.warn("This product is already in your wishlist!");
      return;
    }
    toast.success("Product added to wishlist");

    setWishItems((prevItems) => {
      const updatedWishItems = [...prevItems, product];
      handleTotalWishlist(updatedWishItems);
      return updatedWishItems;
    });
  };

  // Remove from Cart
  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.product_id !== productId
    );
    setCartItems(updatedCartItems);
    handleTotalCartList(updatedCartItems);

    const updatedPrice = updatedCartItems.reduce(
      (total, item) => total + item.product.price,
      0
    );
    setPrice(updatedPrice);
  };

  // Total Cart Count
  const handleTotalCartList = (updatedCartItems) => {
    setTotalCart(updatedCartItems.length); // Update total cart items count
  };

  // Total Wishlist Count
  const handleTotalWishlist = (updatedWishItems) => {
    setTotalWishlist(updatedWishItems.length); // Update total wishlist items count
  };

  // Remove from Wishlist
  const handleRemoveFromWishlist = (productId) => {
    const updatedWishItems = wishItems.filter(
      (item) => item.product.product_id !== productId
    );
    setWishItems(updatedWishItems);
    handleTotalWishlist(updatedWishItems);
  };

  // Sort Cart Items by Price
  const handleSort = () => {
    const sortedItems = [...cartItems].sort(
      (a, b) => b.product.price - a.product.price
    );
    setCartItems(sortedItems);
  };

  // Reset Cart and Wishlist
  const resetCart = () => {
    setCartItems([]);
    setWishItems([]);
    setPrice(0);
    setTotalCart(0); // Reset to 0, not null
    setTotalWishlist(0); // Reset to 0, not null
  };

  return (
    <DashboardContext.Provider
      value={{
        cartItems,
        price,
        wishItems,
        totalCart,
        totalWishlist,
        addToCart,
        addToWishlist,
        handleTotalWishlist,
        handleTotalCartList,
        handleSort,
        handleRemoveFromCart,
        handleRemoveFromWishlist,
        resetCart,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// Custom Hook to use Dashboard Context
export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
