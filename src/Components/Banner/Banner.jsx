
import { useNavigate } from "react-router-dom";
import heroImg from "../../../src/assets/banner.jpg";

const Banner = ({ className }) => {
  const navigate = useNavigate();
  const handleBuySection = () => {
    navigate("/Dashboard");
  };
  return (
    <div className="relative bg-[#9538E2] md:space-y-6 space-y-2 min-h-[400px] md:min-h-[600px] pt-8 px-2">
      <h1 className="text-white w-full md:w-2/3 text-center mx-auto text-2xl md:text-4xl font-extrabold tracking-widest">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-white/80 w-full md:w-1/2 text-center mx-auto text-md md:text-lg">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="relative flex justify-center w-full">
        <button
          onClick={handleBuySection}
          className="px-6 py-2 text-[#8F36D8] font-bold mb-20 bg-white rounded-3xl"
        >
          Shop Now
        </button>
        <div className="w-10/12 mx-auto absolute top-[70px] left-[8%] rounded-lg ring-white ring-1 bg-transparent p-6 backdrop-blur-lg">
          <img className="md:h-[500px] w-full rounded-lg" src={heroImg} />
        </div>
      </div>
    </div>
  );
};
export default Banner;
