import { FaPlus } from "react-icons/fa";

const BlogSwiper = ({ text, img }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`object-cover w-[95%] md:w-[350px] h-[270px] bg-[url(${img})] flex justify-center items-center`}
      >
        <div className="bg-[#EA4715] w-16 h-16 rounded-full flex justify-center items-center   right-4 bottom-4">
          <FaPlus className="text-white h-5 w-5" />
        </div>
      </div>
      <div>
        <h4 className="text-[#676767]  pt-2 text-xs font-normal leading-5 tracking-[0.12px] uppercase">
          Window
        </h4>
        <p className="text-black font-normal text-[24px] leading-[34px] tracking-[0.24px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BlogSwiper;
