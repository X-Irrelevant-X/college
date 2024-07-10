import type { NextPage } from "next";
import FrameComponent11 from "./frame-component11";
import FrameComponent10 from "./frame-component10";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[37px] box-border gap-[70px] max-w-full text-left text-base text-base-base-black font-inter mq450:gap-[17px] mq750:gap-[35px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <div className="shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] rounded-81xl bg-white overflow-hidden flex flex-row items-start justify-start py-[11px] px-12 box-border gap-[20px] max-w-full mq750:pl-6 mq750:pr-6 mq750:box-border mq1050:flex-wrap">
          <button className="cursor-pointer [border:none] py-3 px-[22px] bg-[transparent] shadow-[0px_24px_76px_rgba(96,_93,_255,_0.3)] rounded-31xl [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap">
            <a className="[text-decoration:none] relative text-base leading-[24px] font-semibold font-inter text-base-base-white text-left inline-block min-w-[61px]">
              View all
            </a>
          </button>
          <div className="rounded-81xl overflow-hidden flex flex-row items-start justify-start py-3 px-[22px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[54px]">
              Starter
            </div>
          </div>
          <div className="rounded-81xl overflow-hidden flex flex-row items-start justify-start py-3 px-[22px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[69px]">
              Essential
            </div>
          </div>
          <div className="rounded-81xl overflow-hidden flex flex-row items-start justify-start py-3 px-[22px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[68px]">
              Premium
            </div>
          </div>
          <div className="rounded-81xl overflow-hidden flex flex-row items-start justify-start py-3 px-[22px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[87px]">
              VIP League
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start gap-[20px] grid-cols-[repeat(4,_minmax(229px,_1fr))] text-center text-5xl text-darkslateblue-200 font-gilroy-semibold mq750:grid-cols-[minmax(229px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(229px,_396px))]">
        <FrameComponent11
          prop="/1-1@2x.png"
          essential="Essential"
          forStudentsAtTheVeryTopOf="For students at the very top of the Typical Applicant Pool"
        />
        <FrameComponent10
          group186="/group-186.svg"
          standard="Standard"
          forFirstGenerationStudent="For first generation students at top of Typical Applicant Pool"
        />
        <FrameComponent11
          prop="/frame-198.svg"
          essential="Premium"
          forStudentsAtTheVeryTopOf="For students who are in the top 50% of the Typical Applicant Pool"
        />
        <FrameComponent10
          group186="/4-1@2x.png"
          standard="VIP"
          forFirstGenerationStudent="For students in the bottom 50% of Typical Applicant Pool."
        />
      </div>
    </div>
  );
};

export default FrameComponent9;
