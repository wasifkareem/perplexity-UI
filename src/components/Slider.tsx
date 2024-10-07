import { useRef } from "react";
import { blog_data } from "../data/data";
import { useWindowDimensions } from "../utils/dimensions";
import Eye from "../icons/Eye";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CardSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowDimensions();

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" relative w-full max-w-6xl  mb-40">
      {width < 1280 && (
        <button
          className="absolute left-0 top-1/2 text-2xl -translate-y-1/2 bg-gray-200 p-2  py-[9px] rounded-full z-10 "
          onClick={scrollLeft}
        >
          <FaArrowLeftLong className=" text-light" />
        </button>
      )}

      {/* The slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll xl:overflow-hidden no-scrollbar scrollbar-hide gap-4 md:gap-2 px-2"
      >
        {blog_data.slice(0, 4).map((blog) => (
          <div
            key={blog.title}
            className="w-72 flex flex-col  md:w-40 overflow-hidden p-1 border bg-[#F5F5F1] shadow rounded-lg flex-shrink-0"
          >
            <img
              className=" h-16 rounded-lg w-full object-cover object-top"
              src={blog.img}
              alt=""
            />
            <h3 className=" text-dark text-sm font-semibold p-2">
              {blog.title}
            </h3>
            <p className=" text-light text-xs font-semibold p-2 pt-0">
              {blog.desc.slice(0, 50)}...
            </p>
            <span className=" self-end text-[10px] gap-1 font-[500] p-2 text-light flex">
              <Eye />
              {blog.viewed}
            </span>
          </div>
        ))}
      </div>

      {width < 1280 && (
        <button
          className="absolute text-2xl right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2  py-[9px] rounded-full z-10 "
          onClick={scrollRight}
        >
          <FaArrowRightLong className=" text-light" />
        </button>
      )}
    </div>
  );
};

export default CardSlider;
