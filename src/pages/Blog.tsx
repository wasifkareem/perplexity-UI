import { SiPerplexity } from "react-icons/si";
import Sidebar from "../components/Sidebar";
import { useWindowDimensions } from "../utils/dimensions";
import Arrow from "../icons/Arrow";
import Clip from "../icons/Clip";
import Matrix from "../icons/Matrix";
import { Tooltip } from "react-tooltip";
import Clock from "../icons/Clock";
import Eye from "../icons/Eye";
import Fork from "../icons/Fork";
import Copy from "../icons/Copy";
// @ts-expect-error: package not maintained anymore
import Scrollspy from "react-scrollspy";
import { article_related, blog_data } from "../data/data";
import RelatedIcon from "../icons/RelatedIcon";
import Slider from "../components/KeepReading";
import Read from "../icons/Read";
import BottomNav from "../components/BottomNav";
import ChatBar from "../components/ChatBar";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import KeepReading from "../components/KeepReading";

const Blog = () => {
  const { width } = useWindowDimensions();
  const [isOutOfView, setIsOutOfView] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const pageId = location.pathname.split("/").pop();
  const pageData = blog_data.find((blog) => blog.id == pageId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOutOfView(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className=" flex">
        <Sidebar />
        <div className="  md:flex flex-col items-center relative min-h-[1300px]  w-full bg-white  md:m-2 md:ml-[3px] rounded">
          {/* BLOG NAV */}
          <div className="self-start w-full sticky top-0 z-10 text-dark md:justify-end text-lg font-[500]  bg-white/90 backdrop-blur-lg flex gap-1 items-center  justify-between  p-[10px] border-b">
            <div className=" md:hidden flex gap-1 items-center">
              <SiPerplexity className="  text-2xl" />
              perplexity
            </div>
            <div
              className={`hidden lg:block absolute right-[40%] transform transition-all duration-300 ease-in-out 
             ${
               isOutOfView
                 ? "translate-y-0 opacity-100"
                 : "translate-y-3 opacity-0"
             }`}
            >
              {pageData?.title}
            </div>

            <div className=" flex gap-2 mr-2">
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Article actions"
                className=" p-2"
              >
                <img className=" h-4" src="/icons/dots.svg" alt="" />
              </button>
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Save to Bookmarks"
                className=" bg-[#E8E8E3] rounded p-2 md:py-[2px] md:bg-white md:border px-[10px] "
              >
                <img className=" h-[12px]" src="/icons/bookmark.svg" alt="" />
              </button>{" "}
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Copy Link
"
                className=" hidden md:block md:py-[2px] md:bg-[#21808D] md:text-white rounded px-2 text-2xl"
              >
                <Clip />
              </button>
              <button className="bg-[#E8E8E3] rounded p-2 px-[10px] md:flex md:items-center md:py-[2px] md:bg-[#21808D] md:text-white text-sm font-semibold md:gap-2">
                <Arrow />
                {width > 768 ? "Share" : ""}
              </button>
            </div>
          </div>
          <div
            id="section-0"
            className=" matrix-fade top-10 absolute  overflow-hidden"
          >
            <Matrix />
          </div>

          {/* ARTICLE */}

          <div className=" w-full flex flex-col items-center py-5 xl:max-w-[1100px]">
            <img
              className=" object-cover md:object-bottom md:w-[92%] transform scale-100 hover:scale-102 transition-transform duration-200 w-[96%] h-56 md:h-[330px] rounded-lg"
              src={pageData?.img}
              alt="main-img"
            />

            <div className="grid grid-cols-12 md:px-[20px]  w-full  mt-5">
              <div className="col-span-12  md:col-span-8 w-full px-2">
                <div className=" px-3">
                  <h1
                    ref={elementRef}
                    id="main-heading"
                    className="font-[500] text-dark text-3xl md:text-5xl md:leading-[55px] "
                  >
                    {pageData?.title}
                  </h1>
                  {/* STATS AND INFO */}
                  <div className="flex justify-between w-full mt-6  md:pr-7">
                    <div className="flex gap-2 items-center md:mb-2">
                      <img
                        className="w-5 md:w-9 rounded-full"
                        src={pageData?.author.img}
                        alt="author-img"
                      />
                      <div>
                        <p className=" md:hidden text-xs text-light font-semibold">
                          {pageData?.author.name}
                        </p>
                        <p className=" hidden md:block text-light font-[500]">
                          {` Curated by ${pageData?.author.name}`}
                        </p>
                        <p className=" hidden md:block text-xs text-light font-[500]">
                          2 min read
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 md:gap-6 text-light">
                      <span
                        className=" cursor-default flex text-xs md:text-sm gap-1 font-light items-center"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="October 1, 2024 at 2:03 AM GMT+5:30"
                      >
                        <Clock />
                        {width > 768 ? "5 days ago" : "5d"}
                      </span>
                      <span
                        className=" cursor-default flex text-xs md:text-sm gap-1 font-light items-center"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="views"
                      >
                        <Eye />
                        {pageData?.viewed}
                      </span>
                      <span
                        className=" cursor-default flex text-xs md:text-sm gap-1 font-light items-center"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Follow-ups asked"
                      >
                        <Fork width={11} />
                        {pageData?.followup}
                      </span>
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
                        id="my-tooltip"
                      />
                    </div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className=" my-4 text-dark font-[500]">
                    <p className=" first-letter:text-display first-letter:float-left first-letter:mr-2 first-letter:mt-xs first-letter:text-[2.75em] first-letter:font-[600] first-letter:leading-none  leading-normal">
                      {pageData?.desc}
                    </p>
                  </div>
                </div>

                <div className=" no-scrollbar whitespace-nowrap  py-3 px-4 flex flex-row gap-[10px] bg-white/90 backdrop-blur-lg border border-white/20  md:overflow-hidden overflow-x-auto">
                  {pageData?.refCards?.map((card, i) => (
                    <a
                      key={i}
                      className=" flex flex-col justify-between text-xs gap-[5px]  px-4 md:px-3 py-2 pr-12 md:pr-0 font-semibold bg-[#F3F3EE]   min-w-80 md:min-w-40 rounded-[5px]"
                    >
                      <p className=" text-xs text-wrap md:px-2  text-dark  transition-all duration-200">
                        {card.text}
                      </p>
                      <span className=" flex gap-1 text-light text-xs items-center">
                        <img
                          className=" w-4 rounded-full"
                          src={card.img}
                          alt="gigazine"
                        />
                        {card.name} . {i + 1}
                      </span>
                    </a>
                  ))}
                  <a className=" flex flex-col justify-between text-xs gap-[5px] px-4 py-2 pr-12 font-semibold bg-[#F3F3EE]   min-w-80 md:min-w-40 rounded-[5px]">
                    <div className=" flex gap-1">
                      <img
                        className=" w-4 rounded-full "
                        src="https://www.google.com/s2/favicons?sz=128&domain=pcgamer.com"
                        alt="pc-gamer"
                      />
                      <img
                        className=" w-4 rounded-full "
                        src="https://www.google.com/s2/favicons?sz=128&domain=github.com"
                        alt="github"
                      />
                    </div>
                    <p className=" text-light ">view 2 more</p>
                  </a>
                </div>

                {/* ARTICLE SECTIONS */}
                <div>
                  {pageData?.sections?.map((section) => (
                    <div
                      key={section.id}
                      id={section.id}
                      className=" flex flex-col px-3 "
                    >
                      <h2 className=" text-2xl my-3 mb-4 font-[500] text-dark">
                        {section.heading}
                      </h2>
                      <div className=" font-[500] leading-normal text-dark">
                        {section?.img && (
                          <img
                            className=" ml-7 mb-3 md:float-end h-44 rounded-lg scale-100 hover:scale-105 transition-all "
                            src={section?.img}
                            alt="ref-img"
                          />
                        )}
                        <div
                          dangerouslySetInnerHTML={{ __html: section.text }}
                        ></div>
                      </div>
                      <div className=" my-4 flex justify-start gap-3  items-center">
                        {/* SOURCES */}
                        <div className=" group p-1 border flex items-center gap-4 border-gray-300 w-32 text-nowrap rounded-full hover:bg-gray-200 transition-all duration-200 cursor-pointer">
                          <div className="flex">
                            {pageData.refCards?.map((card) => (
                              <img
                                className="overlapped w-5 rounded-full transition-all duration-300 group-hover:mr-[0]"
                                src={card.img}
                                alt={card.name}
                              />
                            ))}
                          </div>
                          <div className="sources-custom">
                            <span className="text-xs font-[600] text-gray-500">
                              3 sources
                            </span>
                          </div>
                        </div>
                        <span
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Copy link to section"
                          className=" text-gray-500 hover:bg-gray-200 rounded-full p-2 py-[10px] transition-all"
                        >
                          <Clip />
                        </span>
                        <span
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Copy section content"
                          className=" text-gray-500  hover:bg-gray-200 rounded-full p-[10px]  transition-all"
                        >
                          <Copy />
                        </span>
                        <span></span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RELATED-SECTION */}
                <div className=" px-4">
                  <span className=" flex gap-3 text-lg mb-3 mt-4 text-dark font-semibold">
                    <RelatedIcon /> Related
                  </span>
                  {article_related.map((rel) => (
                    <div className=" cursor-pointer text-dark font-semibold flex justify-between border-t py-3 items-center">
                      {rel.text}
                      <span className=" font-normal text-cyan-600 text-2xl">
                        +
                      </span>
                    </div>
                  ))}
                </div>
                <div className=" mt-3">
                  <span className=" p-3 items-center text-lg flex gap-2 font-semibold text-dark">
                    <Read /> Keep Reading
                  </span>
                  <KeepReading />
                </div>
              </div>
              <div className=" md:col-span-4 mt-8 ml-4">
                <div className=" scrollbox  hidden md:block text-sm font-semibold text-light sticky top-24">
                  <Scrollspy
                    offset={-200}
                    items={[
                      "section-0",
                      "section-1",
                      "section-2",
                      "section-3",
                      "section-4",
                    ]}
                    currentClassName="is-current"
                  >
                    <li className=" border-l-[2px] pl-3">
                      <a href="#section-0">Introduction</a>
                    </li>
                    {pageData?.sections?.map((sec) => (
                      <li key={sec.id} className=" border-l-[2px] pl-3">
                        <a href={`#${sec.id}`}>{sec.heading}</a>
                      </li>
                    ))}
                  </Scrollspy>
                </div>
              </div>
            </div>
          </div>
          <ChatBar />
          <BottomNav isDiscover={false} />
        </div>
      </div>
    </>
  );
};

export default Blog;
