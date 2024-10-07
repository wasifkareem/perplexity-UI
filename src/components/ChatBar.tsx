import { useState } from "react";
import Switch from "react-switch";
import Fork from "../icons/Fork";

const ChatBar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  return (
    <div className="sticky   bottom-20  md:bottom-10 ">
      <div className="grid grid-cols-12">
        <div className="  col-span-12 md:col-span-8  bg-[#F3F3EE] p-2 rounded-full  flex justify-center">
          {/* Chatbar */}
          <div className="  cursor-pointer w-full md:w-[675px]  flex justify-between py-3 items-center px-3 border border-gray-300 rounded-full bg-white">
            <div className="text-[#64645F] mx-3 font-[500]">Ask follow-up</div>
            <div className="flex gap-2 items-center">
              <span className="flex items-center">
                <Switch
                  height={21}
                  handleDiameter={17}
                  onColor="#fffff"
                  width={38}
                  offHandleColor="#64645F"
                  onHandleColor="#21808D"
                  uncheckedIcon={false}
                  offColor="#fffff"
                  className="border border-gray-300"
                  onChange={handleChange}
                  checked={isChecked}
                  checkedIcon={false}
                />
              </span>
              <span
                className={`text-sm font-semibold mr-2 ${
                  isChecked ? "text-[#21808D]" : "text-[#64645F]"
                }`}
              >
                Pro
              </span>
              <span className="bg-[#EEEEEA] p-2 px-[10px] rounded-full text-[#b1b1ac]">
                <Fork width={13} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default ChatBar;
