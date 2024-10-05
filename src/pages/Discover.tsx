import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { blog_data } from "../data/data";
import Art from "../icons/Art";
import Bookmark from "../icons/Bookmark";
import Entertainment from "../icons/Entertainment";
import Finance from "../icons/Finance";
import Globe from "../icons/Globe";
import HomeIcon from "../icons/HomeIcon";
import Lib from "../icons/Lib";
import Slider from "../icons/Slider";
import Sports from "../icons/Sports";
import Star from "../icons/Star";
import Tech from "../icons/Tech";
import { useWindowDimensions } from "../utils/dimensions";

const Discover = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/page/article");
  };
  return (
    <>
      <div className=" flex">
        <Sidebar />
        <div className=" min-h-screen w-full bg-white md:m-2 md:ml-[3px] rounded-lg">
          <span className="hidden md:block cursor-pointer fixed bottom-5 right-5 text-white font-semibold hover:text-cyan-600 transition-all duration-200 bg-dark rounded-full p-1 px-3 ">
            ?
          </span>
          <div className=" py-3 px-3  border-b flex justify-between items-center">
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

          {/* DISCOVER NAV */}

          {/* ARTICLES */}
          <div className="  grid grid-cols-12 md:mx-7  2xl:mx-44 ">
            <div className="col-span-12 md:col-span-8">
              <div className="sticky no-scrollbar whitespace-nowrap top-0  py-3 px-4 flex flex-row gap-1 bg-white/90 backdrop-blur-lg border border-white/20  overflow-x-auto">
                <a
                  className=" flex items-center text-xs gap-[5px] px-4 py-3 font-semibold  bg-[#E5EFEC] text-[#21808D] w-fit rounded-[5px]"
                  href="#top"
                >
                  <Star />
                  <p className=" ">Top</p>
                </a>
                <a
                  className=" flex items-center text-xs gap-[5px] px-4 py-2 font-semibold hover:text-light text-dark w-fit rounded-[5px]"
                  href="#tech"
                >
                  <Tech />
                  <p className="  text-dark hover:text-light transition-all duration-200">
                    Tech & Science
                  </p>
                </a>
                <a
                  className=" flex items-center text-xs gap-[5px] px-4 py-2 font-semibold hover:text-light text-dark w-fit rounded-[5px]"
                  href="#finance"
                >
                  <Finance />
                  <p className="  text-dark hover:text-light transition-all duration-200">
                    Finance
                  </p>
                </a>
                <a
                  className=" flex items-center text-xs gap-[5px] px-4 py-2 font-semibold hover:text-light text-dark w-fit rounded-[5px]"
                  href=""
                >
                  <Art />
                  <p className="  text-dark hover:text-light transition-all duration-200">
                    Art & Culture
                  </p>
                </a>
                <a
                  className=" flex items-center text-xs gap-[5px] px-4 py-2 font-semibold hover:text-light text-dark w-fit rounded-[5px]"
                  href=""
                >
                  <Sports />
                  <p className="  text-dark hover:text-light transition-all duration-200">
                    Sports
                  </p>
                </a>
                <a
                  className=" flex items-center text-xs gap-[5px] px-4 py-2 font-semibold hover:text-light text-dark transition-all w-fit rounded-[5px]"
                  href=""
                >
                  <Entertainment />
                  <p className=" text-dark hover:text-light transition-all duration-200">
                    Entertainment
                  </p>
                </a>
              </div>
              <div className="   grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
                {blog_data.map((blog, index) => (
                  <div
                    onClick={handleClick}
                    key={index}
                    className={`col-span-1 ${
                      index === 0 || index === 4 ? "md:col-span-3" : ""
                    } bg-[#F4F4EF] rounded-xl overflow-hidden`}
                  >
                    <img
                      className={`max-h-96 ${
                        index !== 0 ? "md:max-h-36" : "md:max-h-52"
                      } w-full object-cover`}
                      src={blog.img}
                      alt="blog-img"
                    />
                    <div className="p-3">
                      <div>
                        <h1
                          className={`font-semibold ${
                            index !== 0 && width > 768
                              ? " text-[16px]"
                              : "text-lg"
                          }  leading-5 text-dark md:my-1`}
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
                      <div className="flex justify-between mt-2">
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
                        <div className="hover:bg-[#E9E9E4] rounded-full p-3 px-[14px] transition-all duration-200 text-light hover:text-dark">
                          <Bookmark />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className=" md:flex flex-col md:mt-16 hidden col-span-4 sticky top-7  bg-[#F3F3EE] h-fit mx-4 p-3 py-4 rounded-xl">
              <div className=" flex justify-between mr-2">
                <strong className=" text-dark">Make it yours</strong>
                <span className=" self-start text-xl text-light">&times;</span>
              </div>
              <p className=" text-sm text-dark my-1 mb-4">
                Select topics and interests to <br />
                customize your Discover experience
              </p>
              <div className=" flex flex-wrap gap-2">
                <div className="flex items-center text-sm gap-[5px] px-3 py-2 font-semibold  bg-[#DFE7E4] text-[#21808D] w-fit border-[2px] rounded-[5px]">
                  <Tech />
                  Tech & Science
                </div>
                <div className="flex items-center text-sm gap-[5px] px-3 py-2 font-semibold  bg-[#DFE7E4] text-[#21808D] w-fit border-[2px] rounded-[5px]">
                  <Finance />
                  Finance
                </div>{" "}
                <div className="flex items-center text-sm gap-[5px] px-3 py-2 font-semibold  bg-[#DFE7E4] text-[#21808D] w-fit border-[2px] rounded-[5px]">
                  <Art />
                  Arts & Culture
                </div>{" "}
                <div className="flex items-center text-sm gap-[5px] px-3 py-2 font-semibold  bg-[#DFE7E4] text-[#21808D] w-fit border-[2px] rounded-[5px]">
                  <Sports />
                  Sports
                </div>{" "}
                <div className="flex items-center text-sm gap-[5px] px-3 py-2 font-semibold  bg-[#DFE7E4] text-[#21808D] w-fit border-[2px] rounded-[5px]">
                  <Entertainment />
                  Entertainmnet
                </div>
              </div>
              <hr className=" my-5 w-full" />
              <button className=" bg-[#21808D] w-[96%] self-center py-2 rounded-full text-white font-semibold">
                Save Interests
              </button>
            </div>
          </div>

          <div className=" md:hidden flex justify-center bg-[#F3F3EE] h-16 items-center fixed bottom-0 left-0 right-0">
            <div className=" w-1/3  flex justify-center font-semibold text-light">
              <div className=" w-fit flex flex-col gap-1 text-sm items-center">
                <HomeIcon />
                Home
              </div>
            </div>
            <div className=" w-1/3  flex justify-center items-center font-semibold text-dark border-t-[3px] border-dark h-full">
              <div className=" w-fit flex flex-col gap-1 text-sm items-center">
                <Globe width={21} />
                Discover
              </div>
            </div>
            <div className=" w-1/3  flex justify-center font-semibold text-light">
              <div className=" w-fit flex flex-col gap-1 text-sm items-center">
                <Lib />
                Library
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
