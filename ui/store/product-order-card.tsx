import React from "react";
import { cn } from "@/lib/cn";
import * as Card from "@/components/data-display/card";
import Image from "next/image";

import product from "/public/alt/product-cover.svg";
import { Typography } from "@/packages/components/typography/typography";
import { Button } from "@/packages/components/forms/button";
import { Progress } from "@/packages/components/data-display/progress";

export interface ProductOrderCardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ProductOrderCard = React.forwardRef<
  HTMLDivElement,
  ProductOrderCardProps
>(({ className, ...props }, ref) => {
  return (
    <Card.Card
      {...props}
      ref={ref}
      className={cn(
        "shadow-none rounded-none border-none max-w-3xl w-full !p-2",
        className
      )}
    >
      <Card.CardContent className="flex flex-col md:flex-row justify-between items-center !p-0">
        <Card.CardHeader className="flex !flex-row !items-center gap-4 !p-0 w-full">
          <div className="w-16 h-16 mt-1.5 bg-accent flex items-center justify-center rounded-md relative">
            <Image
              src={product}
              alt=""
              className="w-full h-full group-hover:opacity-60 opacity-100 group-hover:scale-110 transition-all"
              priority
            />
          </div>
          <div className="flex flex-col">
            <Typography as="h1" className="text-sm font-medium">
              Raw Black T-Shirt Lineup
            </Typography>
            <Typography as="subtitle2">Ordered on: 27 July 2023</Typography>
            <Typography as="subtitle1">$70.00</Typography>
          </div>
        </Card.CardHeader>
        <Card.CardFooter className="flex !p-0 ml-auto md:m-0 items-center gap-3.5">
          <div className="flex flex-col justify-center items-center gap-1 w-20">
            <Typography as="label2" className="text-muted-foreground">
              Entregue
            </Typography>
            <Progress
              className="[&>div]:!bg-emerald-500 h-0.5"
              value={100}
              max={100}
            />
          </div>
          <Button size="sm">Ver produto</Button>
        </Card.CardFooter>
      </Card.CardContent>
    </Card.Card>
  );
});

ProductOrderCard.displayName = "ProductOrderCard";

export { ProductOrderCard };
