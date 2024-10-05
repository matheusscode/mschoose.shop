import React from "react";
import { cn } from "@/lib/cn";
import * as Card from "@/components/data-display/card";
import { Typography } from "@/packages/components/typography/typography";
import { Button } from "@/packages/components/forms/button";
import { DefLink } from "@/ui/layout/def-link";
import product from "/public/alt/product-cover.svg";
import Image from "next/image";

export interface CheckoutSummaryProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CheckoutSummary = React.forwardRef<HTMLDivElement, CheckoutSummaryProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card.Card
        {...props}
        ref={ref}
        className={cn(
          "max-w-[400px] w-full px-6 py-4  rounded-md mx-auto shadow-none border-none",
          className
        )}
      >
        <Typography as="h1" className="text-lg mb-10 mt-1">
          You order
        </Typography>
        <Card.CardHeader className="flex mb-10 flex-row p-0 justify-between items-center gap-2.5">
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-[35px] w-[35px] mx-auto rounded-full bg-accent flex items-center justify-center relative"
              >
                <Image
                  src={product}
                  alt=""
                  className="w-full h-full group-hover:opacity-60 rounded-full opacity-100 group-hover:scale-110 transition-all"
                />
              </div>
            ))}
          </div>
          <Button size="default" variant="outline">
            Editar carrinho
          </Button>
        </Card.CardHeader>
        <Card.CardContent className="p-0 border-b border-neutral-200 py-2">
          <div className="flex items-center justify-between py-1.5">
            <Typography as="subtitle2" className="text-muted-foreground">
              SubTotal
            </Typography>
            <Typography as="subtitle1" className="font-medium">
              R$ 90.00
            </Typography>
          </div>
          <div className="flex items-center justify-between py-1.5">
            <Typography as="subtitle2" className="text-muted-foreground">
              Envio
            </Typography>
            <Typography as="subtitle1" className="font-medium">
              Free
            </Typography>
          </div>
          <div className="flex items-center justify-between py-1.5">
            <Typography as="subtitle2" className="text-muted-foreground">
              Taixa
            </Typography>
            <Typography as="subtitle1" className="font-medium">
              R$ 3.00
            </Typography>
          </div>
        </Card.CardContent>
        <Card.CardFooter className="flex flex-col gap-6 w-full p-0 pt-2.5 pb-3.5">
          <div className="flex items-center justify-between py-2 w-full">
            <Typography as="subtitle2" className="text-muted-foreground">
              SubTotal
            </Typography>
            <Typography as="subtitle1" className="font-medium">
              $ 3.00
            </Typography>
          </div>
          <Button size="lg" className="w-full">
            Fazer pedido
          </Button>
        </Card.CardFooter>
      </Card.Card>
    );
  }
);

CheckoutSummary.displayName = "CheckoutSummary";

export { CheckoutSummary };
