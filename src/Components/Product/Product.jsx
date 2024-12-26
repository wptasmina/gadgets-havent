import { toast } from "react-toastify";

const Product = ({ product, handleViewDetails }) => {
  const { product_title, price, product_image } = product;

  return (
    <div class="card bg-white w-full shadow-sm border p-4 ">
      <div
        className="h-[181px]  bg-cover bg-center object-cover rounded-md"
        style={{ backgroundImage: `url(${product_image})` }}
      ></div>
      <div class="mt-5 flex flex-col justify-between flex-grow">
        <h2 class="card-title">{product_title}</h2>
        <p className="mt-5">Price: ${price}</p>
        <div class="justify-start mt-4">
            <button
              onClick={() => {
                handleViewDetails(product);
              }}
              class="w-full text-[#9538E2] px-8 py-2 border-2 border-[#9538E2] rounded-full font-bold"
            >
              View Details
            </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
