import React from "react";
import { cn } from "@/lib/cn";

export type FlexDir = "row" | "column" | "row-reverse" | "column-reverse";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  dir: FlexDir;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, dir = "row", ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn("group flex gap-3.5", className)}
        style={{
          flexDirection: dir,
        }}
      />
    );
  }
);

Flex.displayName = "Flex";

export { Flex };
