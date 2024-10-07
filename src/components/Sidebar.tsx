import { TbArrowBarToLeft } from "react-icons/tb";
import HomeIcon from "../icons/HomeIcon";
import Lib from "../icons/Lib";
import Squizzly from "../icons/Squizzly";
import { libData } from "../data/data";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Setting from "../icons/Setting";
import Phone from "../icons/Phone";
import Twitter from "../icons/Twitter";
import Discord from "../icons/Discord";
import Globe from "../icons/Globe";
import { SiPerplexity } from "react-icons/si";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex sidebar fixed top-0 bottom-0 left-0 inner-shadow-right duration-smooth bg-[#F3F3EE] w-fit py-3 h-screen overflow-y  overflow-x-hidden flex-col justify-between ">
        {/* SB-TOP SECTION */}
        <div className=" flex flex-col gap-5 px-2 mb-44">
          <div className=" flex items-center  gap-3 md:p-2 justify-between h-fit">
            <Link
              to="#home"
              className=" flex gap-1 text-2xl items-center group  text-dark"
            >
              <SiPerplexity className=" text-3xl text-[#21808D] group-hover:text-cyan-500 transition-all duration-300" />
              <p className=" font-[500] group-hover:text-cyan-500 transition-all duration-300">
                perplexity
              </p>
            </Link>
            <TbArrowBarToLeft className=" hover:bg-[#d4d5d691] rounded-full p-[6px] text-[#5a5b5cc7] text-3xl duration-smooth" />
          </div>
          <div className=" hover:border cursor-pointer hover:border-cyan-700 duration-smooth border p-2 text-zinc-500  text-sm rounded-full px-2 border-gray-200 flex bg-white w-fit items-center gap-2 mx-2">
            <p className=" font-semibold"> New Thread</p>
            <div className=" flex gap-1">
              <button className=" text-xs font-mono border border-gray-200 rounded px-[6px]">
                Ctrl
              </button>
              <button className=" text-xs font-mono border border-gray-200 rounded px-[6px]">
                l
              </button>
            </div>
          </div>

          <div className=" cursor-pointer flex flex-col gap-1">
            <div>
              <Link
                to="#home"
                className="font-semibold flex gap-1 items-center text-light px-3 py-2 rounded   hover:text-dark duration-200 hover:bg-[#E8E8E3] group"
              >
                <HomeIcon />
                <p className=" ">Home</p>
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="font-semibold duration-200 flex gap-1 items-center text-light px-3 py-2 rounded   hover:text-dark hover:bg-[#E8E8E3] group"
              >
                <Globe width={18} />
                <p className=" font-grotesk">Discover</p>
              </Link>
            </div>
            {/* //LIBRARY */}
            <div className="relative">
              <Link
                to="#library"
                className="relative font-semibold duration-200 flex gap-1 items-center text-light px-3 py-2 rounded hover:text-dark hover:bg-[#E8E8E3] group"
              >
                <div className="relative">
                  <Lib />
                </div>
                <p className="font-grotesk">Library</p>
              </Link>
              <div className="absolute left-5 top-full mt-2 border-l px-2 w-full">
                <ul className="text-xs whitespace-nowrap flex flex-col gap-1 font-grotesk font-[500] text-light">
                  {libData.map((lib) => (
                    <li className="relative group duration-200 hover:bg-[#E8E8E3] mr-3 rounded group">
                      <div className="flex relative font-semibold li-element pl-1 rounded py-1">
                        {lib.title}
                      </div>
                      <div className=" duration-300 group-hover:ease-in-out group-hover:scale-105 hidden group-hover:block absolute right-2 top-[7px]">
                        <Squizzly />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* SB-BOTTOM-SECTION */}
        <div>
          <div className=" flex flex-col text-wrap w-full justify-center pl-3 text-light">
            <p className=" text-dark font-[600] hover:text-[#21808D] transition-all duration-200 cursor-pointer">
              Try Pro
            </p>
            <p className=" text-[13px] font-sans font-[400] ">
              Upgrade for image upload,
              <br /> smarter AI, and more Pro
              <br /> Search.
            </p>
            <button className=" flex items-center gap-1 rounded mt-3 hover:bg-[#e2e2e2da] transition-all duration-200 w-fit  bg-[#E8E8E3] text-dark text-sm px-2 py-1 font-bold">
              <MdArrowOutward />
              Learn More
            </button>
          </div>
          <div className=" flex items-center gap-2 pl-1 px-2 border-t my-3 pt-[6px]">
            <div className=" flex flex-row gap-2 text-light transition-all hover:bg-[#E8E8E3] items-center rounded-full p-[5px]">
              <img
                className=" h-8 rounded-full"
                src="/assets/wasif dp.jpeg"
                alt="profile-photo"
              />
              <p className=" text-sm font-semibold  text-dark">
                wasifkare23...
              </p>
              <IoIosArrowDown />
            </div>
            <div className="transition-all hover:bg-[#E8E8E3] text-light hover:text-dark p-2 rounded-full">
              <Setting />
            </div>
          </div>
          <div className=" flex justify-between items-center gap-2  px-2 border-t my-3 pt-[6px]">
            <div className="flex flex-row gap-2 text-light px-2 transition-all hover:bg-[#E8E8E3] items-center rounded-full p-[5px] group">
              <div>
                <Phone />
              </div>
              <p className="text-sm font-semibold text-light group-hover:text-dark">
                Download
              </p>
            </div>

            <div className=" flex gap-1">
              <div className="transition-all hover:bg-[#E8E8E3] text-light hover:text-dark p-2 rounded-full">
                <Twitter />
              </div>
              <div className="transition-all hover:bg-[#E8E8E3] text-light hover:text-dark p-2 rounded-full">
                <Discord />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
