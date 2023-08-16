import React from "react";

import { FloatingInput, Text } from "components";

type ApplyCardCardbreakdownProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titleThree" | "remove" | "helpertextTwo"
> &
  Partial<{ titleThree: string; remove: string; helpertextTwo: string }>;

const ApplyCardCardbreakdown: React.FC<ApplyCardCardbreakdownProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
            <div className="flex flex-row gap-2 items-start justify-start max-w-[723px] w-full">
              <Text
                className="flex-1 text-blue_gray-800 text-lg w-auto"
                size="txtOpenSansBold18"
              >
                {props?.titleThree}
              </Text>
              <Text
                className="text-center text-light_blue-A700 text-sm w-auto"
                size="txtOpenSansRegular14LightblueA700"
              >
                {props?.remove}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-1 h-[81px] md:h-auto items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-[5px] rounded-lg w-full">
                  <FloatingInput
                    wrapClassName="placeholder:bg-white-A700 font-opensans font-semibold placeholder:left-[0] p-0 sm:pr-5 text-base placeholder:text-blue_gray-500 text-blue_gray-800 text-left placeholder:top-[0] w-full"
                    className="font-opensans font-semibold p-0 sm:pr-5 text-base text-blue_gray-800 text-left w-full"
                    name="price_Two"
                    labelClasses="bg-white-A700 left-[0] top-[0] text-blue_gray-500"
                    focusedClasses="translate-y-[24px] scale-[1]"
                    wrapperClasses="sm:mx-0 w-full top-[0]"
                    labelText="Preferred credit limit (SGD)"
                    defaultText="10,000"
                  ></FloatingInput>
                </div>
                <div className="flex flex-col items-start justify-start px-4 w-full">
                  <Text
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtOpenSansRegular14Bluegray600"
                  >
                    {props?.helpertextTwo}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-[5px] rounded-lg w-full">
                    <FloatingInput
                      wrapClassName="placeholder:bg-white-A700 font-opensans font-semibold placeholder:left-[0] p-0 sm:pr-5 text-base placeholder:text-blue_gray-500 text-blue_gray-800 text-left placeholder:top-[0] w-full"
                      className="font-opensans font-semibold p-0 sm:pr-5 text-base text-blue_gray-800 text-left w-full"
                      name="price_Two"
                      labelClasses="bg-white-A700 left-[0] top-[0] text-blue_gray-500"
                      focusedClasses="translate-y-[24px] scale-[1]"
                      wrapperClasses="sm:mx-0 w-full top-[0]"
                      labelText="Preferred credit limit (SGD)"
                      defaultText="10,000"
                    ></FloatingInput>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ApplyCardCardbreakdown.defaultProps = {
  titleThree: "Card 2 - Daniel Lim See Gan",
  remove: "Remove",
  helpertextTwo: "9/19",
};

export default ApplyCardCardbreakdown;
