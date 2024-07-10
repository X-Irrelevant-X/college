import type { NextPage } from "next";

export type FrameComponent10Type = {
  className?: string;
  group186?: string;
  standard?: string;
  forFirstGenerationStudent?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
  group186,
  standard,
  forFirstGenerationStudent,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start pt-5 pb-[21px] pr-[22px] pl-[21px] relative gap-[30.4px] text-center text-5xl text-darkslateblue-200 font-gilroy-semibold mq450:gap-[15px] mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0.5px_2.3px_22.86px_rgba(84,_99,_122,_0.1)] rounded-xl bg-white" />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full z-[1] flex items-center justify-center">
          <img
            className="h-full w-full overflow-hidden z-[1] object-contain absolute left-[12px] top-[0px] [transform:scale(1.076)]"
            alt=""
            src="/mask-group.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[72px] pl-[75px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-[120.6px] flex-1 relative max-w-full overflow-hidden z-[2]"
          loading="lazy"
          alt=""
          src={group186}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[79px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 relative leading-[29px] z-[2] mq450:text-lgi mq450:leading-[23px]">
            {standard}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-lg text-black font-inter">
          <div className="self-stretch relative leading-[158%] z-[2]">
            {forFirstGenerationStudent}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[46px] text-left text-base font-gilroy-medium mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-10 flex-1 relative">
              <div className="absolute top-[10px] left-[33px] flex flex-row items-start justify-start gap-[5px] z-[2]">
                <div className="relative leading-[143.86%] capitalize inline-block min-w-[82px] whitespace-nowrap">
                  learn more
                </div>
                <div className="relative text-lg font-medium font-inter text-gray-100 inline-block min-w-[18px]">{`->`}</div>
              </div>
              <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_76px_rgba(96,_93,_255,_0.2)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start py-[8.5px] px-[45px] box-border w-full h-full z-[3] text-white">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[143.86%] capitalize inline-block min-w-[80px]">
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
