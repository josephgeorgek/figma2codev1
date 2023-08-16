import React from "react";

const sizeClasses = {
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtOpenSansSemiBold18: "font-opensans font-semibold",
  txtOpenSansRegular14Bluegray600: "font-normal font-opensans",
  txtOpenSansRegular14LightblueA700: "font-normal font-opensans",
  txtOpenSansBold18: "font-bold font-opensans",
  txtOpenSansSemiBold16LightblueA700: "font-opensans font-semibold",
  txtOpenSansBold20Bluegray800: "font-bold font-opensans",
  txtOpenSansBold24: "font-bold font-opensans",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansBold20: "font-bold font-opensans",
  txtOpenSansRegular12: "font-normal font-opensans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
