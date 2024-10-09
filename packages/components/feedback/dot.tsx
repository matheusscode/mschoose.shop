import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const dotVariants = cva("size-1 rounded-full", {
  variants: {
    status: {
      success: "bg-emerald-500",
      error: "bg-red-500",
      info: "bg-blue-500",
      warning: "bg-amber-500",
    },
  },
  defaultVariants: {
    status: "info",
  },
});

export interface DotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dotVariants> {
  vertical?: boolean;
  label?: string;
}

const Dot = React.forwardRef<HTMLSpanElement, DotProps>(
  ({ className, vertical = false, status, label, ...props }, ref) => {
    return (
      <div
        className="flex data-[vertical=true]:flex-col items-center gap-0.5 p-1.5 justify-center"
        data-vertical={vertical}
      >
        <span
          {...props}
          ref={ref}
          className={dotVariants({ status, className })}
        />
        {label && <span>{label}</span>}
      </div>
    );
  }
);

Dot.displayName = "Dot";

export { Dot };
