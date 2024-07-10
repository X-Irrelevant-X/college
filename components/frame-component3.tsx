import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[30px] box-border max-w-full shrink-0 text-left text-21xl text-lightslategray font-gilroy-semibold ${className}`}
    >
      <div className="w-[1258px] flex flex-row items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq750:gap-[50px] mq1050:flex-wrap">
        <img
          className="w-[456px] relative max-h-full max-w-full mq1050:flex-1"
          alt=""
          src="/frame-263-1.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[101px] px-0 pb-0 box-border min-w-[456px] max-w-full mq450:pt-[66px] mq450:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#447ef7,_#4b66ea)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
                Our mission is to deliver predictable results.
              </h1>
              <div className="w-[676px] relative text-3xl leading-[172%] font-medium font-inter inline-block max-w-full mq450:text-lg mq450:leading-[30px]">
                College admissions today is extremely competitive, and the top
                universities demand excellence to get accepted.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3 px-[50px] bg-[transparent] w-[210px] shadow-[0px_24px_76px_rgba(96,_93,_255,_0.3)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start box-border whitespace-nowrap">
              <a className="[text-decoration:none] relative text-base leading-[24px] uppercase font-semibold font-inter text-white text-left inline-block min-w-[104px]">
                Learn more
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
