import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-royalblue flex flex-row flex-wrap items-start justify-center pt-[50px] px-20 pb-[49px] box-border relative gap-[40px] max-w-full text-center text-41xl text-royalblue font-gilroy-bold mq750:gap-[20px] mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="h-[330px] w-[1440px] relative bg-royalblue hidden max-w-full z-[0]" />
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
      <FrameComponent2
        prop="100%"
        ofHighAchieversGotIntoATo="of high achievers got into a Top 30 university 2024"
      />
      <FrameComponent2
        prop="94%"
        ofHighAchieversGotIntoATo="of our clients got one of their top 3 choices in 2 years."
      />
      <div className="flex-1 shadow-[0px_4px_15px_1px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white flex flex-col items-start justify-start pt-9 px-[31px] pb-[38px] box-border gap-[24px] min-w-[300px] max-w-full z-[2] text-31xl text-white">
        <div className="w-[400px] h-[231px] relative shadow-[0px_4px_15px_1px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center">
          <div className="h-[77px] w-[82px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="absolute top-[15px] left-[28px] inline-block min-w-[27px] z-[4] mq450:text-11xl mq750:text-21xl">
              2
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-lg leading-[158%] font-inter text-black z-[3]">
           Perfect ACT scorers in 2024 School Year
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
