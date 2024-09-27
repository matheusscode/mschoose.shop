import React from "react";
import { cn } from "@/lib/cn";
import Image from "next/image";
import product from "/public/alt/product-cover.svg";
import { Typography } from "@/packages/components/typography/typography";
import { Badge } from "@/packages/components/data-display/badge";
import { Button } from "@/packages/components/forms/button";
import Link from "next/link";
import { Rating } from "@/packages/components/feedback/rating";
import { QuantityControl } from "./quantity-control";

export interface ProductCardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <article
        {...props}
        ref={ref}
        className={cn(
          "group  justify-center items-center rounded-md cursor-pointer transition-all h-auto py-3.5 px-3.5 flex flex-col gap-2.5",
          className
        )}
      >
        <div className="w-full mx-auto max-w-52 h-60 bg-accent flex items-center justify-center rounded-md relative">
          <Link
            href="/"
            className="transition-all group-hover:opacity-60 opacity-100"
            title="Product name"
          >
            <Image
              src={product}
              alt=""
              className="group-hover:scale-110 transition-all"
              priority
            />
          </Link>
          <Button className="rounded-t-none group-hover:opacity-100 opacity-0 transition-all bottom-0 z-10 bg-neutral-950 text-white w-full absolute">
            Add to Cart
          </Button>
        </div>
        <Link
          href="/"
          className="group-hover:opacity-90 flex flex-col items-start justify-start w-full gap-2.5"
        >
          <Typography as="h1" className="text-sm font-medium">
            Product Name
          </Typography>
          <div className="flex items-center justify-between gap-2.5 w-full px-0.5">
            <Rating className="mb-1 w-20" />
            <span className="font-light text-sm">R$35.00</span>
          </div>
          <div className="flex items-center justify-between gap-2.5 w-full px-0.5">
            <Badge
              className="uppercase text-xs px-3.5 font-normal h-6 rounded-full"
              variant="outline"
            >
              IN STOCK
            </Badge>
            <QuantityControl />
          </div>
        </Link>
      </article>
    );
  }
);

ProductCard.displayName = "ProductCard";

export { ProductCard };
