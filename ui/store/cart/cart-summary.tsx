import React from "react";
import { cn } from "@/lib/cn";
import * as Card from "@/components/data-display/card";
import { Typography } from "@/packages/components/typography/typography";
import { Button } from "@/packages/components/forms/button";
import { DefLink } from "@/ui/layout/def-link";

export interface CartSummaryProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CartSummary = React.forwardRef<HTMLDivElement, CartSummaryProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card.Card
        {...props}
        ref={ref}
        className={cn(
          "max-w-[350px] w-full px-4 py-4 shadow-none rounded-md mx-auto",
          className
        )}
      >
        <Typography as="h1" className="text-lg mb-4 mt-1">
          Checkout
        </Typography>
        <Card.CardContent className="p-0 border-b border-neutral-200 py-2">
          <div className="flex items-center justify-between py-1.5">
            <Typography as="subtitle2" className="text-muted-foreground">
              SubTotal
            </Typography>
            <Typography as="subtitle1">R$ 90.00</Typography>
          </div>
          <div className="flex items-center justify-between py-1.5">
            <Typography as="subtitle2" className="text-muted-foreground">
              Envio
            </Typography>
            <Typography as="subtitle1">Free</Typography>
          </div>
          <div className="flex items-center justify-between py-1.5">
            <Typography as="subtitle2" className="text-muted-foreground">
              Taixa
            </Typography>
            <Typography as="subtitle1">R$ 3.00</Typography>
          </div>
        </Card.CardContent>
        <Card.CardFooter className="flex flex-col gap-6 w-full p-0 pt-2.5 pb-3.5">
          <div className="flex items-center justify-between py-2 w-full">
            <Typography as="subtitle2" className="text-muted-foreground">
              SubTotal
            </Typography>
            <Typography as="subtitle1">$ 3.00</Typography>
          </div>
          <Button size="lg" className="w-full">
            Finalizar compra
          </Button>
          <DefLink variant="link" className="!h-auto !p-0">
            Continuar para loja
          </DefLink>
        </Card.CardFooter>
      </Card.Card>
    );
  }
);

CartSummary.displayName = "CartSummary";

export { CartSummary };
