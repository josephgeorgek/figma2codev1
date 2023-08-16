import React from "react";

import { FloatingInput, Text } from "components";

type ApplyCardColumninputtextOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "dateofbirth"
> &
  Partial<{ dateofbirth: string }>;

const ApplyCardColumninputtextOne: React.FC<
  ApplyCardColumninputtextOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-[5px] rounded-lg w-full">
          <FloatingInput
            wrapClassName="placeholder:bg-white-A700 font-opensans font-semibold placeholder:left-[0] p-0 sm:pr-5 text-base placeholder:text-blue_gray-500 text-blue_gray-800 text-left placeholder:top-[0] w-full"
            className="font-opensans font-semibold p-0 sm:pr-5 text-base text-blue_gray-800 text-left w-full"
            name="inputtext_One"
            labelClasses="bg-white-A700 left-[0] top-[0] text-blue_gray-500"
            focusedClasses="translate-y-[22px] scale-[1]"
            wrapperClasses="sm:mx-0 w-full top-[0]"
            labelText="Preferred name on card"
            defaultText="Natalie Lee"
          ></FloatingInput>
        </div>
        <div className="flex flex-col items-start justify-start px-4 w-full">
          <Text
            className="text-blue_gray-600 text-sm w-auto"
            size="txtOpenSansRegular14Bluegray600"
          >
            {props?.dateofbirth}
          </Text>
        </div>
      </div>
    </>
  );
};

ApplyCardColumninputtextOne.defaultProps = { dateofbirth: "10/19" };

export default ApplyCardColumninputtextOne;
