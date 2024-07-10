import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent12 from "../components/frame-component12";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const PackagesPage: NextPage = () => {
  return (
    <div className="w-full h-[6550px] relative bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start gap-[70px] leading-[normal] tracking-[normal] text-left text-3xl text-white font-gilroy-bold mq450:gap-[17px] mq750:gap-[35px] mq1250:h-auto">
      <img
        className="w-[597px] h-[685px] absolute !m-[0] right-[-117px] bottom-[2516px]"
        loading="lazy"
        alt=""
        src="/frame-118.svg"
      />
      <Header />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-5 box-border max-w-full shrink-0 text-center text-21xl text-white font-gilroy-semibold mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[83px] max-w-full mq450:gap-[21px] mq750:gap-[41px]">
          <FrameComponent12 />
          <FrameComponent9 />
          <FrameComponent8 />
          <FrameComponent7 />
          <FrameComponent6 />
          <FrameComponent4 />
          <div className="self-stretch flex flex-row items-start justify-center pt-[43px] pb-[42px] pr-5 pl-[21px] box-border relative max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/group-1000004132@2x.png"
            />
            <h1 className="m-0 w-[881px] relative text-inherit leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              We're a team of genuine college admissions experts, committed to
              getting world-class results for our families.
            </h1>
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[2814px] box-border gap-[100px] max-w-full shrink-0 mq450:gap-[25px] mq750:gap-[50px] mq750:pb-[502px] mq750:box-border mq1050:pb-[773px] mq1050:box-border mq1250:pb-[1189px] mq1250:box-border">
        <FrameComponent1 />
        <FrameComponent />
        <Footer />
      </section>
      <div className="w-[686px] h-6 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <a className="[text-decoration:none] self-stretch w-[86px] relative leading-[24px] text-[inherit] inline-block mq450:text-lg mq450:leading-[19px]">
          Services
        </a>
      </div>
    </div>
  );
};

export default PackagesPage;
