import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1229.7px] flex flex-row items-end justify-start pt-0 px-0 pb-[17.9px] box-border gap-[52px] max-w-full text-left text-21xl text-white font-gilroy-semibold mq750:gap-[26px] mq1250:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[110px] box-border min-w-[478px] min-h-[322px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit z-[2] mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              Learn The Strategy Behind Our Success!
            </h1>
            <div className="w-[588px] relative text-3xl leading-[143.86%] font-inter inline-block max-w-full z-[2] mq450:text-lg mq450:leading-[25px]">
              Over 90% of our clients secured admission to their top 3 choices
              in the past 2 years.
            </div>
          </div>
          <div className="shadow-[0px_2px_10px_rgba(0,_0,_0,_0.05)] rounded-md bg-white overflow-hidden flex flex-row items-start justify-start py-[13px] px-[50px] box-border whitespace-nowrap max-w-full z-[2] text-base text-darkslateblue-100 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative leading-[24px] uppercase font-semibold">
              Yes! Get Me Registered Now!
            </div>
          </div>
        </div>
      </div>
      <div className="w-[442.7px] flex flex-row items-start justify-start relative min-w-[442.7px] max-w-full mq750:min-w-full mq1250:flex-1">
        <div className="w-[1280px] !m-[0] absolute bottom-[75.1px] left-[-837px] rounded-11xl [background:linear-gradient(#447ef7,_#447ef7),_linear-gradient(87.48deg,_#222161_9.84%,_#d8effc_74.71%,_#b4e0d9)] flex flex-row items-start justify-start">
          <div className="self-stretch w-[1280px] relative rounded-11xl [background:linear-gradient(#447ef7,_#447ef7),_linear-gradient(87.48deg,_#222161_9.84%,_#d8effc_74.71%,_#b4e0d9)] hidden max-w-full" />
          <img
            className="h-[285px] flex-1 relative max-w-full overflow-hidden z-[1]"
            alt=""
            src="/mask-group-4.svg"
          />
        </div>
        <img
          className="h-[436.1px] flex-1 relative max-w-full overflow-hidden object-cover z-[2] mq1250:flex-1"
          loading="lazy"
          alt=""
          src="/frame-163@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent6;
