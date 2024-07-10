import type { NextPage } from "next";

export type FrameComponent11Type = {
  className?: string;
  prop?: string;
  essential?: string;
  forStudentsAtTheVeryTopOf?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
  prop,
  essential,
  forStudentsAtTheVeryTopOf,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start pt-5 pb-[21px] pr-[33px] pl-8 relative gap-[30px] text-center text-5xl text-darkslateblue-200 font-gilroy-semibold mq450:gap-[15px] mq450:pb-5 mq450:box-border ${className}`}
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
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[73px] pl-[74px]">
        <img
          className="h-[120px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
          loading="lazy"
          alt=""
          src={prop}
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[10px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[71px] pl-[72px]">
          <div className="w-[97px] relative leading-[29px] inline-block min-w-[97px] z-[2] mq450:text-lgi mq450:leading-[23px]">
            {essential}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-lg text-black font-inter">
          <div className="self-stretch relative leading-[158%] z-[2]">
            {forStudentsAtTheVeryTopOf}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[35px] text-left text-base font-gilroy-medium">
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

export default FrameComponent11;
