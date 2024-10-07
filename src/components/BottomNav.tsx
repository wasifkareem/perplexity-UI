import HomeIcon from "../icons/HomeIcon";
import Globe from "../icons/Globe";
import Lib from "../icons/Lib";

interface NavProps {
  isDiscover: boolean;
}

const BottomNav: React.FC<NavProps> = ({ isDiscover }) => {
  return (
    <div className=" md:hidden flex justify-center bg-[#F3F3EE] h-16 border-t border-gray-200 items-center fixed bottom-0 left-0 right-0">
      <div className=" w-1/3  flex justify-center font-semibold text-light">
        <div className=" w-fit flex flex-col gap-1 text-sm items-center">
          <HomeIcon />
          Home
        </div>
      </div>
      <div
        className={`w-1/3  flex justify-center items-center font-semibold ${
          isDiscover ? "text-dark" : "text-light"
        } ${isDiscover && "border-t-[3px]"} ${
          isDiscover && "border-dark"
        } h-full`}
      >
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
  );
};

export default BottomNav;
