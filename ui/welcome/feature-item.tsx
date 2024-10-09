import React, { ElementType } from "react";
import { cn } from "@/lib/cn";
import * as Card from "@/components/data-display/card";
import { Badge } from "@/packages/components/data-display/badge";
import { Typography } from "@/packages/components/typography/typography";

type Feature = {
  id: string;
  icon?: ElementType;
  title: string;
  description: string;
};

export interface FeatureItemProps extends React.HTMLAttributes<HTMLDivElement> {
  feature?: Feature;
}

const FeatureItem = React.forwardRef<HTMLDivElement, FeatureItemProps>(
  ({ className, feature, ...props }, ref) => {
    return (
      <Card.Card
        {...props}
        ref={ref}
        className={cn(
          "max-w-[372px] w-full mx-auto shadow-none rounded-none border-none p-2",
          className
        )}
      >
        <Card.CardContent className="flex flex-col gap-1.5 justify-start items-start p-0">
          {feature?.icon && (
            <Badge className="bg-accent flex items-center justify-center rounded-full h-9 w-9 p-0 hover:bg-accent">
              <feature.icon className="text-primary" size={20} />
            </Badge>
          )}
          <Typography as="h5">{feature?.title}</Typography>
          <Typography as="subtitle2">{feature?.description}</Typography>
        </Card.CardContent>
      </Card.Card>
    );
  }
);

FeatureItem.displayName = "FeatureItem";

export { FeatureItem };
