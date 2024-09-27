import React from "react";
import { cn } from "@/lib/cn";
import { Typography } from "@/packages/components/typography/typography";
import { Rating } from "@/packages/components/feedback/rating";
import * as Avatar from "@/components/data-display/avatar";
import * as Carousel from "@/components/data-display/carousel";
import product from "/public/alt/product-cover.svg";
import Image from "next/image";

export interface CommentCardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CommentCard = React.forwardRef<HTMLDivElement, CommentCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <article
        {...props}
        ref={ref}
        className={cn(
          "w-full flex items-start max-w-3xl mx-auto p-2 gap-3.5",
          className
        )}
      >
        <Avatar.Avatar className="size-10">
          <Avatar.AvatarFallback className="font-normal text-base">
            CN
          </Avatar.AvatarFallback>
        </Avatar.Avatar>

        <div className="flex flex-col gap-0.5 justify-between">
          <div className="flex w-full justify-between">
            <Typography as="h1" className="text-base">
              Customer name
            </Typography>
            <Rating />
          </div>
          <span className="uppercase text-muted-foreground">1 Week ago</span>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et
            recusandae laudantium libero eius dignissimos laboriosam
            voluptatibus, ad quae quod.
          </p>
          <Carousel.Carousel className="w-[500px] h-[500px] bg-neutral-50 rounded-md mt-2 border border-input">
            <Carousel.CarouselContent className="h-[500px]">
              {Array.from({ length: 3 }).map((_, index) => (
                <Carousel.CarouselItem key={index} className="h-full">
                  <Image
                    src={product}
                    alt=""
                    width={500}
                    height={400}
                    className="mt-2.5 p-2 w-full h-full"
                  />
                </Carousel.CarouselItem>
              ))}
            </Carousel.CarouselContent>
            <Carousel.CarouselPrevious />
            <Carousel.CarouselNext />
          </Carousel.Carousel>
        </div>
      </article>
    );
  }
);

CommentCard.displayName = "CommentCard";

export { CommentCard };
