import Art from "../icons/Art";
import Entertainment from "../icons/Entertainment";
import Finance from "../icons/Finance";
import Sports from "../icons/Sports";
import Tech from "../icons/Tech";

const Interests = () => {
  return (
    <div className=" md:flex flex-col md:mt-16 hidden col-span-4 sticky top-7  bg-[#F3F3EE] h-fit mx-4 p-3 py-4 rounded-xl">
      <div className=" flex justify-between mr-2">
        <strong className=" text-dark">Make it yours</strong>
        <span className=" self-start text-xl text-light">&times;</span>
      </div>
      <p className=" text-sm text-dark my-1 mb-4">
        Select topics and interests to <br />
        customize your Discover experience
      </p>
      <div className=" cursor-pointer flex flex-wrap gap-2">
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
  );
};

export default Interests;
