import type { NextPage } from "next";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[37px] box-border gap-[62px] max-w-full text-left text-25xl text-black font-gilroy-bold mq450:gap-[15px] mq750:gap-[31px] mq1250:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[67px] px-0 pb-0 box-border min-w-[448px] max-w-full mq450:pt-11 mq450:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#447ef7,_#4b66ea)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-7xl mq450:leading-[32px] mq750:text-16xl mq750:leading-[42px]">
              Let Us Help You with College Admissions!
            </h1>
            <h3 className="m-0 w-[644px] relative text-9xl leading-[143.86%] font-normal font-inter inline-block max-w-full mq450:text-3xl mq450:leading-[32px]">
              Get predictable results and more acceptances at selective
              universities with a data-driven approach.
            </h3>
          </div>
          <button className="cursor-pointer [border:none] py-[13px] px-[50px] bg-[transparent] shadow-[0px_24px_76px_rgba(96,_93,_255,_0.3)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative text-base leading-[24px] uppercase font-semibold font-inter text-white text-left">
              BOOK YOUR STRATEGY SESSION!
            </div>
          </button>
        </div>
      </div>
      <div className="w-[528px] flex flex-row items-start justify-start min-w-[528px] max-w-full mq750:min-w-full mq1250:flex-1">
        <div className="h-[471px] flex-1 relative max-w-full">
          <div className="absolute top-[0px] left-[22px] rounded-t-18xl rounded-br-18xl rounded-bl-247xl [background:linear-gradient(81.39deg,_#3e86f6,_#f0f9fe)] w-[506px] h-[448px]" />
          <img
            className="absolute top-[22px] left-[0px] rounded-[37.25px] w-[506px] h-[449px] object-cover z-[1]"
            alt=""
            src="/hero-image-placeholder-two@2x.png"
          />
          <img
            className="absolute top-[191px] left-[208px] w-[90px] h-[90px] z-[2]"
            loading="lazy"
            alt=""
            src="/group-15.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
