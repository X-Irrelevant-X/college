import type { NextPage } from "next";
import FrameComponent5 from "./frame-component5";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[17px] box-border gap-[40px] max-w-full text-center text-21xl text-cornflowerblue-100 font-gilroy-bold mq750:gap-[20px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full font-gilroy-semibold">
        <h1 className="m-0 w-[642px] relative text-inherit leading-[120%] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_linear-gradient(90deg,_#447ef7,_#4b66ea)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
          The College Mastermind Approach
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-end justify-center gap-[40px] max-w-full text-left mq750:gap-[20px] mq1250:flex-wrap">
        <FrameComponent5
          prop="01"
          typicalApplicantPool="Typical Applicant Pool"
          yourTypicalApplicantPoolA="Your typical applicant pool as a high achiever is 3.9+ unweighted GPA, 1500+ SAT and 34+ ACT"
        />
        <div className="flex-[0.8575] flex flex-col items-start justify-start py-7 pr-[27px] pl-[30px] box-border relative gap-[10px] min-w-[300px] max-w-full text-cornflowerblue-200 mq450:flex-1">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_14px_34px_rgba(2,_8,_53,_0.1)] rounded-3xs bg-white" />
          <div className="w-[70px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border">
            <div className="h-[70px] flex-1 relative z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightblue w-full h-full" />
              <div className="absolute top-[13px] left-[12px] inline-block min-w-[46px] z-[1] mq450:text-5xl mq750:text-13xl">
                02
              </div>
            </div>
          </div>
          <h3 className="m-0 relative text-7xl leading-[120%] font-normal font-gilroy-semibold text-darkslateblue-200 z-[1] mq450:text-2xl mq450:leading-[25px]">
            Know Your Value
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full text-lg text-lightslategray font-inter">
            <div className="flex-1 relative leading-[158%] inline-block max-w-full z-[1]">
              Be aware of 4-5 clear reasons a university would want you beyond
              scores, academics, and activities
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
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border min-w-[300px] max-w-full">
          <FrameComponent5
            prop="03"
            typicalApplicantPool="University Fit"
            yourTypicalApplicantPoolA="Have a list of universities that will recognize and appreciate the unique value you've identified for admission"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[50px] box-border max-w-full text-left text-darkturquoise mq450:pb-8 mq450:box-border">
        <div className="w-[840px] flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full mq450:gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start py-7 pr-[27px] pl-[30px] box-border relative gap-[25px] min-w-[260px] max-w-full">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_14px_34px_rgba(2,_8,_53,_0.1)] rounded-3xs bg-white" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="w-[70px] h-[70px] relative z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightcyan-100 w-full h-full" />
                <div className="absolute top-[13px] left-[10px] z-[1] mq450:text-5xl mq750:text-13xl">
                  04
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-7xl text-darkslateblue-200 font-gilroy-semibold">
                <h3 className="m-0 w-[197px] relative text-inherit leading-[120%] font-normal font-inherit inline-block z-[1] mq450:text-2xl mq450:leading-[25px]">
                  Value Credibility
                </h3>
                <div className="self-stretch relative text-lg leading-[158%] font-inter text-lightslategray z-[1]">
                  Don't just tell universities you’re valuable; show them! Take
                  steps to actively demonstrate your value
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
          <div className="flex-1 flex flex-col items-start justify-start py-7 pr-[27px] pl-[30px] box-border relative gap-[10px] min-w-[260px] max-w-full z-[1] text-mediumseagreen">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_14px_34px_rgba(2,_8,_53,_0.1)] rounded-3xs bg-white" />
            <div className="w-[70px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border">
              <div className="h-[70px] flex-1 relative z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightcyan-200 w-full h-full" />
                <div className="absolute top-[13px] left-[11px] z-[1] mq450:text-5xl mq750:text-13xl">
                  05
                </div>
              </div>
            </div>
            <h3 className="m-0 w-[251px] relative text-7xl leading-[120%] font-normal font-gilroy-semibold text-darkslateblue-200 inline-block z-[1] mq450:text-2xl mq450:leading-[25px]">
              Articulate Your Value
            </h3>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full text-lg text-lightslategray font-inter">
              <div className="flex-1 relative leading-[158%] inline-block max-w-full z-[1]">
                Present your value to colleges and give them an undeniable case
                for why they should admit you.
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
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-3xl text-lightslategray font-inter">
        <div className="w-[872px] relative leading-[166%] inline-block shrink-0 max-w-full z-[1] mq450:text-lg mq450:leading-[29px]">
          Following every step of our approach becomes even more important as
          the selectivity rate of your child's top 3 choices rises.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <button className="cursor-pointer [border:none] py-[13px] px-10 bg-[transparent] shadow-[0px_24px_76px_rgba(96,_93,_255,_0.3)] rounded-lg [background:linear-gradient(90deg,_#447ef7,_#4b66ea_53.4%,_#4b66ea)] overflow-hidden flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full">
          <div className="relative text-base leading-[24px] uppercase font-semibold font-inter text-white text-left">
            BOOK YOUR STRATEGY SESSION!
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent4;
