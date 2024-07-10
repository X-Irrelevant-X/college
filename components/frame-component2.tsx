import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
  prop?: string;
  ofHighAchieversGotIntoATo?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  prop,
  ofHighAchieversGotIntoATo,
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_4px_15px_1px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[46px] px-[31px] pb-[47px] box-border gap-[10px] min-w-[300px] max-w-full z-[2] text-center text-41xl text-royalblue font-gilroy-bold ${className}`}
    >
      <div className="w-[400px] h-[231px] relative shadow-[0px_4px_15px_1px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="w-36 relative leading-[120%] inline-block z-[3] mq450:text-17xl mq450:leading-[43px] mq750:text-29xl mq750:leading-[58px]">
          {prop}
        </div>
      </div>
      <div className="self-stretch relative text-lg leading-[158%] font-inter text-black z-[3]">
        {ofHighAchieversGotIntoATo}
      </div>
    </div>
  );
};

export default FrameComponent2;
