import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  className?: string;
  prop?: string;
  typicalApplicantPool?: string;
  yourTypicalApplicantPoolA?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({
  className = "",
  prop,
  typicalApplicantPool,
  yourTypicalApplicantPoolA,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`flex-[0.8575] flex flex-col items-start justify-start py-7 pr-[27px] pl-[30px] box-border relative gap-[25px] min-w-[300px] max-w-full text-left text-21xl text-cornflowerblue-100 font-gilroy-bold mq450:flex-1 ${className}`}
      style={frameDivStyle}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_14px_34px_rgba(2,_8,_53,_0.1)] rounded-3xs bg-white" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="w-[70px] h-[70px] relative z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightblue w-full h-full" />
          <div className="absolute top-[13px] left-[15px] inline-block min-w-[40px] z-[1] mq450:text-5xl mq750:text-13xl">
            {prop}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-7xl text-darkslateblue-200 font-gilroy-semibold">
          <h3 className="m-0 w-[266px] relative text-inherit leading-[120%] font-normal font-inherit inline-block z-[1] mq450:text-2xl mq450:leading-[25px]">
            {typicalApplicantPool}
          </h3>
          <div className="self-stretch relative text-lg leading-[158%] font-inter text-lightslategray z-[1]">
            {yourTypicalApplicantPoolA}
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-5 bg-[transparent] self-stretch shadow-[0px_20px_76px_rgba(96,_93,_255,_0.2)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-center z-[1]">
        <div className="flex flex-row items-start justify-start">
          <div className="relative text-xl leading-[29px] capitalize font-gilroy-medium text-white text-left inline-block min-w-[103px] whitespace-nowrap mq450:text-base mq450:leading-[23px]">
            learn more
          </div>
        </div>
      </button>
    </div>
  );
};

export default FrameComponent5;
