import React, { useState } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import Category from "../Category/Category";
// import ProductDetails from "../ProductDetails/ProductDetails";

const Home = () => {
  const { categories, products } = useLoaderData();
  const [displayProducts, SetDisplayProducts] = useState(products);
  const [activeBtn, setActiveBtn] = useState("All");
  const handleActive = (active) => {
    setActiveBtn(active);
  };
  const handleCategory = (category) => {
    if (category.category === "All") {
      SetDisplayProducts(products);
    } else {
      const categoryProducts = products.filter(
        (product) => product.category === category.category
      );

      SetDisplayProducts(categoryProducts);
    }
  };
  const Navigate = useNavigate();
  const handleViewDetails = (product) => {
    const { product_id } = product;

    Navigate(`/productDetails/${product_id}`, { state: { product } });
  };
  return (
    <div className="min-h-screen bg-white mt-40 md:mt-72">
      <h2 className="text-3xl font-extrabold text-center pt-2 pb-8 text-[#8F36D8]">
        Explore Cutting-Edge Gadget
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6 mb-8">
        <div className="rounded-lg">
          <div className="flex justify-center items-left flex-col gap-6 border px-6 py-8 bg-white shadow-sm rounded-xl">
            {categories.map((category) => (
              <Category
                handleActive={handleActive}
                handleCategory={handleCategory}
                key={category.product_id}
                category={category}
                isActive={activeBtn === category.category}
              ></Category>
            ))}
          </div>
        </div>

        <div className="col-span-3 bg-white mt-6 md:mt-0">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {displayProducts.length > 0 ? (
              displayProducts.map((product) => (
                <Product
                  key={product.product_id}
                  product={product}
                  handleViewDetails={handleViewDetails}
                ></Product>
              ))
            ) : (
              <p className="text-center text-6xl text-[#8F36D8] col-span-3 font-extrabold">
                No Data Found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
