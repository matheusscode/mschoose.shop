import React from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/packages/components/forms/button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export interface QuantityControlProps
  extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  onAdd: () => void;
  onDecrement: () => void;
}

const QuantityControl = React.forwardRef<HTMLDivElement, QuantityControlProps>(
  ({ className, count = 0, onAdd, onDecrement, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "inline-flex flex-nowrap items-center overflow-hidden w-auto rounded-md border border-input",
          className
        )}
      >
        <Button
          size="icon"
          variant="ghost"
          className="rounded-none"
          onClick={onDecrement}
        >
          <MinusIcon />
        </Button>
        <span className="min-h-9 min-w-9 select-none flex items-center justify-center">
          {count}
        </span>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-none"
          onClick={onAdd}
        >
          <PlusIcon />
        </Button>
      </div>
    );
  }
);

QuantityControl.displayName = "QuantityControl";

export { QuantityControl };
