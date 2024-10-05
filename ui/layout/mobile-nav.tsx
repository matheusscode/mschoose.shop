"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { registry_links } from "@/registry/registry-links";
import { DefLink } from "../shared/def-link";
import { usePathname } from "next/navigation";

export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const MobileNav = React.forwardRef<HTMLDivElement, MobileNavProps>(
  ({ className, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <nav
        {...props}
        ref={ref}
        className={cn(
          "lg:hidden block w-full fixed bg-background bottom-0 left-0 max-[400px]:pt-2.5 max-[400px]:pb-3.5 max-[400px]:px-5 pb-5 pt-3.5 border-t border-input px-2.5",
          className
        )}
      >
        <ul className="flex items-center justify-between">
          {registry_links.map((registry_link) => (
            <li key={registry_link.id}>
              <DefLink
                className="flex !rounded-full max-[400px]:px-0 max-[400px]:gap-0 flex-col hover:bg-transparent text-muted-foreground items-center gap-0.5 text-xs"
                variant="ghost"
                href={registry_link.pathname}
              >
                <span
                  data-active={pathname === registry_link.pathname}
                  className="max-[400px]:p-1.5 transform transition-all data-[active=true]:scale-150 data-[active=true]:-translate-y-4 data-[active=true]:bg-primary data-[active=true]:text-background p-2 rounded-full"
                >
                  {registry_link.icon && <registry_link.icon size={17} />}
                </span>
                {registry_link.label}
              </DefLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

MobileNav.displayName = "MobileNav";

export { MobileNav };
