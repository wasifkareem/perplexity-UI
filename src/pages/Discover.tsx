import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { blog_data } from "../data/data";
import Bookmark from "../icons/Bookmark";
import Globe from "../icons/Globe";
import Slider from "../icons/Slider";
import Tech from "../icons/Tech";
import { useWindowDimensions } from "../utils/dimensions";
import BottomNav from "../components/BottomNav";
import { Tooltip } from "react-tooltip";
import Interests from "../components/Interests";

const navItems = [
  "Top",
  "Tech & Science",
  "Finance",
  "Art & Culture",
  "Sports",
  "Entertainment",
];
const Discover = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/article");
  };

  return (
    <>
      <div className=" flex">
        <Sidebar />
        <div className=" flex  flex-col justify-center items-center min-h-screen w-full bg-white md:m-2 md:ml-[3px] rounded-lg">
          <div className=" py-3 px-3 self-start w-full  border-b flex justify-between items-center">
            <div className=" md:hidden flex items-center gap-1 p-0 text-dark">
              <Globe width={24} />
              <p className=" p-0 font-[500] text-2xl text-dark md:text-3xl ">
                Discover
              </p>
            </div>
            <div className="hidden md:flex md:px-5 md:py-[6px] items-center gap-1 p-0 text-dark">
              <Globe width={34} />
              <p className=" p-0 font-[500] text-2xl text-dark md:text-3xl ">
                Discover
              </p>
            </div>
            <div className=" md:hidden mr-2 bg-[#E8E8E3] p-2 rounded-full text-dark ">
              <Slider />
            </div>
          </div>

          <div className="  grid grid-cols-12 md:mx-7  2xl:max-w-[1100px] ">
            <div className="col-span-12 md:col-span-8">
              {/* DISCOVER NAV */}

              <div className="sticky no-scrollbar whitespace-nowrap top-0  py-3 px-4 flex flex-row gap-1 bg-white/90 backdrop-blur-lg border border-white/20  overflow-x-auto md:overflow-hidden">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    className={`flex items-center text-xs gap-[5px] px-4 py-2 ${
                      item == "Top" && "bg-[#E5EFEC]"
                    } font-semibold hover:text-light ${
                      item == "Top" ? "text-[#21808D]" : "text-dark"
                    } w-fit rounded-[5px]`}
                    href="#tech"
                  >
                    <Tech />
                    <p
                      className={` ${
                        item == "Top" ? "text-[#21808D]" : "text-dark"
                      } hover:text-light transition-all duration-200`}
                    >
                      {item}
                    </p>
                  </a>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-24">
                {/* ARTICLES */}
                {blog_data.map((blog, index) => (
                  <Link
                    to={`page/${blog.id}`}
                    key={index}
                    className={`cursor-pointer col-span-1 ${
                      index === 0 || index === 4 ? "md:col-span-3" : ""
                    } bg-[#F4F4EF] rounded-xl overflow-hidden flex flex-col`}
                  >
                    <img
                      className={`max-h-96 ${
                        index !== 0 ? "md:h-36" : "md:h-52"
                      } w-full object-cover`}
                      src={blog.img}
                      alt="blog-img"
                    />
                    <div className="p-3 flex flex-col justify-between flex-grow">
                      <div className="flex-grow">
                        <h1
                          className={`font-semibold ${
                            index !== 0 && width > 768
                              ? "text-[16px]"
                              : "text-lg"
                          } leading-5 text-dark md:my-1`}
                        >
                          {blog.title}
                        </h1>
                        <p className="text-[#00000099] md:leading-6 md:text-sm mb-word-spacing tracking-wide font-[500] text-[15px]">
                          {blog.desc.slice(
                            0,
                            width > 768 && index !== 0 && index !== 4 ? 39 : 160
                          )}
                          ...
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-2 ">
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-5 rounded-full"
                            src={blog.author.img}
                            alt="author-img"
                          />
                          <p className="text-xs text-light font-semibold">
                            {blog.author.name}
                          </p>
                        </div>
                        <div
                          data-tooltip-id="dis-tooltip"
                          data-tooltip-content="Save to Bookmarks"
                          className="hover:bg-[#E9E9E4] rounded-full p-3 px-[14px] transition-all duration-200 text-light hover:text-dark"
                        >
                          <Bookmark />
                          <Tooltip
                            style={{
                              backgroundColor: "#0d3338",
                              fontSize: "11px",
                              fontWeight: "600",
                              borderRadius: "5px",
                              padding: "4px 9px",
                            }}
                            delayShow={200}
                            opacity={10}
                            noArrow
                            place="bottom"
                            id="dis-tooltip"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Interests />
          </div>

          <BottomNav isDiscover={true} />
        </div>
      </div>
    </>
  );
};

export default Discover;
