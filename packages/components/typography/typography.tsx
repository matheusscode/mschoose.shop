import React, { ElementType } from "react";
import { cn } from "@/lib/cn";

export type TypographyAssertion =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "label1"
  | "label2";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: TypographyAssertion;
}

const tags: Record<TypographyAssertion, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  label1: "span",
  label2: "span",
};

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, as = "h1", ...props }, ref) => {
    const Tag: ElementType = tags[as];

    return (
      <Tag
        {...props}
        ref={ref}
        className={cn("tracking-normal text-pretty", className)}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography };
