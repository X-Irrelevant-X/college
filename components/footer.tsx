import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start pt-[50px] px-20 pb-[23px] box-border relative gap-[49px] max-w-full text-left text-3xl text-white font-gilroy-bold mq750:gap-[24px] mq750:pt-8 mq750:px-10 mq750:pb-5 mq750:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-royalblue" />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/mask-group-5.svg"
        />
      </div>
      <img
        className="w-[277px] h-[95px] relative hidden z-[1]"
        alt=""
        src="/frame-1171.svg"
      />
      <img
        className="w-[277px] h-[95px] relative z-[2]"
        loading="lazy"
        alt=""
        src="/frame-268.svg"
      />
      <div className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1250:flex-wrap">
          <div className="w-[377px] flex flex-row items-start justify-start gap-[80px] max-w-full z-[2] mq450:flex-wrap mq450:gap-[40px]">
            <div className="flex flex-col items-start justify-start gap-[26px] min-w-[131px] mq450:flex-1">
              <div className="relative leading-[24px] inline-block min-w-[105px] mq450:text-lg mq450:leading-[19px]">
                Quick Link
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-lg font-inter">
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[51px]">
                  Home
                </a>
                <div className="flex flex-row items-start justify-start">
                  <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[52px]">
                    About
                  </a>
                </div>
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[74px]">
                  Services
                </a>
                <div className="flex flex-row items-start justify-start">
                  <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[99px]">
                    Partnership
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[83px]">
                    Packages
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px]">Meet Our Team</div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[98px]">
                    Contact US
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px] min-w-[166px] mq450:flex-1">
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[86px] mq450:text-lg mq450:leading-[19px]">
                Services
              </a>
              <div className="flex flex-col items-start justify-start gap-[12px] text-lg font-inter">
                <div className="relative leading-[24px]">5-Day Intensive</div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[81px]">
                    Test Prep
                  </div>
                </div>
                <div className="relative leading-[24px]">
                  Admissions Service
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[109px]">
                    Scholarships
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[85px]">
                    internship
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[58px]">
                    Events
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[44px]">
                    FAQs
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[292px] flex flex-col items-start justify-start gap-[26px] z-[2]">
            <a className="[text-decoration:none] w-[99px] relative leading-[24px] text-[inherit] inline-block mq450:text-lg mq450:leading-[19px]">
              Countries
            </a>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lg font-inter">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="relative leading-[24px] inline-block min-w-[108px]">
                  Saudi Arabia
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[37px]">
                    UAE
                  </div>
                </div>
                <div className="relative leading-[24px] inline-block min-w-[48px]">
                  Qatar
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[51px]">
                    Oman
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[58px]">
                    Kuwait
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[65px]">
                    Bahrain
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[49px]">
                    China
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[41px]">
                    India
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative leading-[24px] inline-block min-w-[104px]">
                    South Korea
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[340px] flex flex-row items-start justify-start max-w-full z-[2]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[52px] max-w-full mq450:gap-[26px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[41px] mq450:gap-[20px]">
                <div className="w-[258px] relative leading-[24px] inline-block mq450:text-lg mq450:leading-[19px]">
                  Subscribe Our Newsletter
                </div>
                <div className="self-stretch h-[46px] flex flex-col items-start justify-start pt-0 px-0 pb-[17px] box-border gap-[17px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <input
                      className="w-[51px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-[29px] relative leading-[143.86%] text-gray-200 text-left inline-block p-0 mq450:text-base mq450:leading-[23px]"
                      placeholder="Email"
                      type="text"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-[26px] h-[26px] relative"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-gray-200" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px] relative min-h-[50px]"
                  loading="lazy"
                  alt=""
                  src="/social-icons.svg"
                />
                <img
                  className="h-[50px] w-[50px] relative min-h-[50px]"
                  alt=""
                  src="/social-icons-1.svg"
                />
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="h-[50px] w-[50px] relative"
                    alt=""
                    src="/bg.svg"
                  />
                  <img
                    className="h-[44%] w-[62%] absolute !m-[0] top-[28%] right-[20%] bottom-[28%] left-[18%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="h-[50px] w-[50px] relative"
                    alt=""
                    src="/bg.svg"
                  />
                  <img
                    className="h-[52%] w-[45.4%] absolute !m-[0] top-[24%] right-[26.6%] bottom-[24%] left-[28%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[20px] text-lg font-inter">
          <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-white" />
          <div className="flex flex-row items-start justify-start gap-[23px]">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[119px] z-[2]">
              Privacy Policy
            </a>
            <div className="relative leading-[24px] inline-block min-w-[104px] z-[2]">
              Legal Terms
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
