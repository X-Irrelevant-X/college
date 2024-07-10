import type { NextPage } from "next";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`flex flex-row items-start justify-start pt-[15px] px-[49px] pb-4 box-border sticky top-[0] z-[99] max-w-full text-left text-3xl text-black font-gilroy-medium mq750:pl-6 mq750:pr-6 mq750:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_4px_rgba(0,_0,_0,_0.05)] bg-aliceblue-100" />
      <div className="flex flex-row items-center justify-start gap-[50px] max-w-full z-[1] mq750:gap-[25px]">
        <img
          className="self-stretch w-[204px] relative max-h-full hidden min-h-[70px]"
          alt=""
          src="/frame-117.svg"
        />
        <img
          className="h-[69px] w-[201.2px] relative"
          loading="lazy"
          alt=""
          src="/frame-117.svg"
        />
        <div className="w-[841px] flex flex-row items-start justify-start py-5 px-0 box-border gap-[30px] max-w-full mq1250:hidden">
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[60px]">
            Home
          </a>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[63px]">
              About
            </a>
            <img className="h-[5px] w-2.5 relative" alt="" src="/icon.svg" />
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[84px]">
              Services
            </a>
            <img className="h-[5px] w-2.5 relative" alt="" src="/icon.svg" />
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[98px]">
              Countries
            </a>
            <img className="h-[5px] w-2.5 relative" alt="" src="/icon.svg" />
          </div>
          <a className="[text-decoration:none] flex-1 relative leading-[24px] text-[inherit]">
            Partnership
          </a>
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[66px]">
            Events
          </a>
          <a className="[text-decoration:none] flex-1 relative leading-[24px] text-[inherit] whitespace-nowrap">
            Contact Us
          </a>
        </div>
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[82px]">
            Register
          </a>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-[transparent] shadow-[0px_15px_30px_rgba(96,_93,_255,_0.15)] rounded-md [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap">
            <a className="[text-decoration:none] relative text-base leading-[24px] uppercase font-semibold font-inter text-white text-left inline-block min-w-[54px]">
              Log in
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
