import React from "react";
import { cn } from "@/lib/cn";
import * as Card from "@/components/data-display/card";
import product from "/public/alt/product-cover.svg";
import Image from "next/image";
import { Typography } from "@/packages/components/typography/typography";
import { Dot } from "@/packages/components/feedback/dot";
import { Button } from "@/packages/components/forms/button";
import { XIcon } from "lucide-react";
import { QuantityControl } from "./quantity-control";

export interface ProductItemProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ProductItem = React.forwardRef<HTMLDivElement, ProductItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card.Card
        {...props}
        ref={ref}
        className={cn(
          "group py-1.5 px-4 shadow-none border-none justify-start flex gap-3.5 items-center",
          className
        )}
      >
        <Card.CardHeader className="!p-0 w-20 h-20 mx-auto bg-accent relative flex items-center justify-center rounded-md">
          <Image
            src={product}
            alt=""
            className="group-hover:scale-110 group-hover:opacity-50 transition-all w-full h-full z-0"
            priority
          />
        </Card.CardHeader>
        <Card.CardContent className="!p-0 flex w-full items-center">
          <div className="!p-0 flex flex-col md:flex-row md:gap-0 justify-between w-full items-start md:items-center">
            <div className="flex md:gap-0 flex-col items-start justify-start w-full">
              <Typography
                as="h1"
                className="truncate text-sm overflow-hidden text-ellipsis whitespace-nowrap"
              >
                Raw Black T-Shirt Lineup
              </Typography>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Typography
                  as="subtitle2"
                  className="font-medium hidden md:block"
                >
                  Cor:
                </Typography>
                <Dot className="size-2.5 mt-0 md:mt-0.5" />
                <span className="block mr-1.5">-</span>
                <Typography
                  as="subtitle2"
                  className="font-medium hidden md:block"
                >
                  Tamanho:
                </Typography>
                <Typography as="subtitle2" className="font-medium">
                  GG
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-5 md:flex-row">
              <Typography as="subtitle1">$75.00</Typography>
              <QuantityControl />
              <Button
                size="icon"
                variant="secondary"
                className="w-8 h-8 hover:bg-muted-foreground/20 md:inline-flex hidden"
              >
                <XIcon size={20} className="text-muted-foreground" />
              </Button>
            </div>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 hover:bg-muted-foreground/20 md:hidden inline-flex "
          >
            <XIcon size={20} className="text-muted-foreground" />
          </Button>
        </Card.CardContent>
      </Card.Card>
    );
  }
);

ProductItem.displayName = "ProductItem";

export { ProductItem };
