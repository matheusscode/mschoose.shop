import React from "react";
import NextLink, { LinkProps } from "next/link";
import {
  ButtonProps,
  buttonVariants,
} from "@/packages/components/forms/button";

export interface DefLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    Omit<LinkProps, "href">,
    Pick<ButtonProps, "variant" | "size"> {
  href?: string;
}

const DefLink = React.forwardRef<HTMLAnchorElement, DefLinkProps>(
  ({ className, href = "/", size, variant, ...props }, ref) => {
    return (
      <NextLink
        {...props}
        href={href}
        ref={ref}
        className={buttonVariants({ className, size, variant })}
      />
    );
  }
);

DefLink.displayName = "DefLink";

export { DefLink };
