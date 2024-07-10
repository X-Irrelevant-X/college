import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-21xl text-darkslateblue-200 font-gilroy-semibold ${className}`}
    >
      <div className="w-[1128px] flex flex-col items-end justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <h1 className="m-0 w-[457px] relative text-inherit leading-[120%] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#447ef7,_#4b66ea)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap inline-block max-w-full mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">{`Our Clients’  Experiences `}</h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] max-w-full text-left text-7xl">
          <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-5 pb-6 box-border relative gap-[32px] min-w-[267px] max-w-full mq450:gap-[16px]">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_15px_-3px_rgba(0,_0,_0,_0.1)] rounded-4xl bg-white" />
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <h3 className="m-0 w-[217px] relative text-inherit leading-[120%] font-normal font-inherit inline-block z-[1] mq450:text-2xl mq450:leading-[25px]">
                  Cynthia - Student
                </h3>
                <img
                  className="h-[42px] w-[45px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/layer-1.svg"
                />
              </div>
              <div className="w-[251px] flex flex-row items-start justify-start relative mt-[-1px] text-lg text-lightslategray font-inter">
                <img
                  className="h-[93.1px] w-[99.4px] absolute !m-[0] right-[-65.4px] bottom-[-78.1px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/layer-2@2x.png"
                />
                <div className="flex-1 relative leading-[158%] z-[2]">
                  College Mastermind helped me get into UChicago, my TOP CHOICE!
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-2.5 px-[45px] bg-[transparent] shadow-[0px_20px_76px_rgba(96,_93,_255,_0.2)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start z-[1]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-lg leading-[26px] capitalize font-gilroy-medium text-white text-left inline-block min-w-[90px]">
                  Read more
                </div>
              </div>
            </button>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-[19px] px-5 pb-6 box-border relative min-w-[267px] max-w-full">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_15px_-3px_rgba(0,_0,_0,_0.1)] rounded-4xl bg-white" />
            <img
              className="h-[42px] w-[45px] absolute !m-[0] top-[30px] right-[20px] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/layer-1.svg"
            />
            <div className="w-[251px] flex flex-col items-start justify-start gap-[10px]">
              <h3 className="m-0 w-[200px] relative text-inherit leading-[120%] font-normal font-inherit inline-block z-[1] mq450:text-2xl mq450:leading-[25px]">
                Ashley - Student
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-lg text-lightslategray font-inter">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <img
                    className="h-[93.1px] w-[99.4px] absolute !m-[0] right-[-65.4px] bottom-[-61.1px] object-contain z-[1]"
                    alt=""
                    src="/layer-2-1@2x.png"
                  />
                  <div className="flex-1 relative leading-[158%] z-[2]">
                    <p className="m-0">I got into 4 Top</p>
                    <p className="m-0">
                      30 universities, and I am off to Northwestern in the
                      spring!
                    </p>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-2.5 px-[45px] bg-[transparent] shadow-[0px_20px_76px_rgba(96,_93,_255,_0.2)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start z-[1]">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-lg leading-[26px] capitalize font-gilroy-medium text-white text-left inline-block min-w-[90px]">
                      Read more
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[30px] pb-[23.9px] pr-[19px] pl-5 box-border relative min-w-[267px] max-w-full">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_15px_-3px_rgba(0,_0,_0,_0.1)] rounded-4xl bg-white" />
            <div className="self-stretch flex flex-row items-start justify-start gap-[36px] mq450:flex-wrap mq450:gap-[18px]">
              <h3 className="m-0 flex-1 relative text-inherit leading-[120%] font-normal font-inherit inline-block min-w-[153px] z-[1] mq450:text-2xl mq450:leading-[25px]">
                Stephanie - Mother
              </h3>
              <img
                className="h-[42px] w-[45px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/layer-1.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mt-[-1px] text-lg text-lightslategray font-inter mq450:flex-wrap">
              <div className="w-[217px] flex flex-col items-start justify-start gap-[32px] min-w-[217px] shrink-0 mq450:flex-1 mq450:gap-[16px]">
                <div className="w-[251px] relative leading-[158%] inline-block z-[1]">
                  <p className="m-0">Billy got a 36</p>
                  <p className="m-0">on his ACT in only 4 sessions!</p>
                </div>
                <button className="cursor-pointer [border:none] py-2.5 px-[45px] bg-[transparent] shadow-[0px_20px_76px_rgba(96,_93,_255,_0.2)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start z-[1]">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-lg leading-[26px] capitalize font-gilroy-medium text-white text-left inline-block min-w-[90px]">
                      Read more
                    </div>
                  </div>
                </button>
              </div>
              <img
                className="h-[93.1px] w-[99.4px] relative object-contain shrink-0 z-[1]"
                alt=""
                src="/layer-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
