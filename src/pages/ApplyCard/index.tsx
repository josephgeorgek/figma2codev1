import React from "react";

import { Button, FloatingInput, Img, Input, Text } from "components";
import ApplyCardCardbreakdown from "components/ApplyCardCardbreakdown";
import ApplyCardColumninputtextOne from "components/ApplyCardColumninputtextOne";
import ApplyCardDropdownfields from "components/ApplyCardDropdownfields";
import ApplyCardHeader from "components/ApplyCardHeader";

const ApplyCardPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto pb-9 w-full">
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <ApplyCardHeader className="flex flex-col h-[103px] md:h-auto items-start justify-start max-w-[1440px] w-full" />
          <div className="flex flex-col gap-6 items-start justify-start md:px-10 sm:px-5 px-[156px] w-auto md:w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-4 items-start justify-center max-w-[1128px] mx-auto px-20 md:px-5 py-16 rounded-[12px] shadow-bs w-full">
              <Text
                className="text-blue_gray-800 text-lg w-auto"
                size="txtOpenSansSemiBold18"
              >
                Card details
              </Text>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-xl w-auto"
                      size="txtOpenSansBold20"
                    >
                      You are eligible for 2 cards
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[771px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-blue_gray-500 text-sm w-auto"
                          size="txtOpenSansRegular14"
                        >
                          Preferred credit limit (SGD)
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[279px]">
                        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-lg w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-1 items-center justify-start w-full">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                                <Text
                                  className="flex-1 text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl w-auto"
                                  size="txtOpenSansBold24"
                                >
                                  25,000
                                </Text>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_plus.svg"
                                  alt="plus"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-blue_gray-500 text-sm w-auto"
                          size="txtOpenSansRegular14"
                        >
                          Entity name on card
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-col h-[50px] md:h-auto items-start justify-start w-[279px] sm:w-full">
                          <Input
                            name="content"
                            placeholder="Gastronomy Pte Ltd"
                            className="font-semibold p-0 placeholder:text-blue_gray-800 sm:pr-5 text-base text-blue_gray-800 text-left uppercase w-full"
                            wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pl-4 pr-[35px] py-[13px] rounded-lg w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col items-start justify-start px-4 w-[279px]">
                          <Text
                            className="text-blue_gray-600 text-sm w-auto"
                            size="txtOpenSansRegular14Bluegray600"
                          >
                            18/19
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100_7f border border-gray-300 border-solid flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-blue_gray-800 text-lg w-auto"
                              size="txtOpenSansBold18"
                            >
                              Card 1 - Natalie Lee Xin Mei
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto md:w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="leading-[18.00px] max-w-[709px] md:max-w-full text-blue_gray-600 text-xs"
                                size="txtOpenSansRegular12"
                              >
                                <>
                                  Visa Spend Clarity Administrator
                                  <br />
                                  You can manage cards and users on Visa Spend
                                  Clarity, a secure online platform managed by
                                  Visa.
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                          <ApplyCardColumninputtextOne className="flex flex-1 flex-col gap-1 h-[81px] md:h-auto items-start justify-start w-full" />
                          <ApplyCardDropdownfields className="flex flex-1 flex-col items-start justify-start w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ApplyCardCardbreakdown className="bg-gray-100_7f border border-gray-300 border-solid flex flex-col gap-2 items-start justify-start p-6 sm:px-5 rounded-lg w-full" />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1128px] mx-auto px-20 md:px-5 py-16 rounded-[12px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start w-[181px]">
                <Text
                  className="text-blue_gray-800 text-lg w-full"
                  size="txtOpenSansSemiBold18"
                >
                  Contact details
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start max-w-[771px] w-full">
                <Text
                  className="text-base text-blue_gray-700 w-full"
                  size="txtOpenSansRegular16"
                >
                  We will use the details below to contact you for this offer.
                </Text>
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start pb-2 w-[379px] sm:w-full">
                    <Text
                      className="text-blue_gray-500 text-sm w-full"
                      size="txtOpenSansRegular14"
                    >
                      Contact no.
                    </Text>
                    <Text
                      className="text-base text-blue_gray-800 w-full"
                      size="txtOpenSansSemiBold16"
                    >
                      9876 5432
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start pb-2 w-[379px] sm:w-full">
                    <Text
                      className="text-blue_gray-500 text-sm w-full"
                      size="txtOpenSansRegular14"
                    >
                      Email
                    </Text>
                    <Text
                      className="text-base text-blue_gray-800 w-full"
                      size="txtOpenSansSemiBold16"
                    >
                      email1@gmail.com
                    </Text>
                  </div>
                  <Text
                    className="text-base text-light_blue-A700 w-auto"
                    size="txtOpenSansSemiBold16LightblueA700"
                  >
                    Change contact
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col h-[184px] md:h-auto items-end justify-center max-w-[1440px] md:px-10 sm:px-5 px-[156px] py-6 w-full">
              <Button className="bg-gradient  cursor-pointer font-semibold py-[17px] rounded text-base text-center text-white-A700 w-[196px]">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyCardPage;
