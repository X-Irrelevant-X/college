import type { NextPage } from "next";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full text-center text-21xl text-white font-gilroy-semibold ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start pt-[50px] px-5 pb-[51px] box-border relative gap-[22px] max-w-full">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/frame-257@2x.png"
        />
        <h1 className="m-0 w-[800px] relative text-inherit leading-[120%] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
          Curious which is the best package for you?
        </h1>
        <div className="w-[800px] flex flex-row items-start justify-end py-0 px-7 box-border max-w-full text-3xl font-inter">
          <div className="flex-1 relative leading-[165%] inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[29px]">
            We consider various factors like target universities, current
            profile, and timeline for admissions when selecting the right
            package for your child.
          </div>
        </div>
        <div className="w-[800px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
          <button className="cursor-pointer [border:none] py-[13px] px-[50px] bg-white rounded-md overflow-hidden flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[1] hover:bg-gainsboro mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative text-base leading-[24px] uppercase font-semibold font-inter text-darkslateblue-100 text-left">
              BOOK YOUR STRATEGY SESSION NOW!
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
