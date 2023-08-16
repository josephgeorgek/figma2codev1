import React from "react";

import { FloatingInput } from "components";

type ApplyCardDropdownfieldsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ApplyCardDropdownfields: React.FC<ApplyCardDropdownfieldsProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-[5px] rounded-lg w-full">
            <FloatingInput
              wrapClassName="placeholder:bg-white-A700 font-opensans font-semibold placeholder:left-[0] p-0 sm:pr-5 text-base placeholder:text-blue_gray-500 text-blue_gray-800 text-left placeholder:top-[0] w-full"
              className="font-opensans font-semibold p-0 sm:pr-5 text-base text-blue_gray-800 text-left w-full"
              name="price_One"
              labelClasses="bg-white-A700 left-[0] top-[0] text-blue_gray-500"
              focusedClasses="translate-y-[24px] scale-[1]"
              wrapperClasses="sm:mx-0 w-full top-[0]"
              labelText="Preferred credit limit (SGD)"
              defaultText="15,000"
            ></FloatingInput>
          </div>
        </div>
      </div>
    </>
  );
};

ApplyCardDropdownfields.defaultProps = {};

export default ApplyCardDropdownfields;
