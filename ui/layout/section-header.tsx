import React from "react";
import { cn } from "@/lib/cn";
import { Typography } from "@/packages/components/typography/typography";
import * as Breadcrumb from "@/components/navigation/breadcrumb";

type Breadcrumb = {
  label: string;
  pathname: string;
};

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  routes: Breadcrumb[];
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, routes, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn("flex gap-2.5 flex-col w-full py-6 px-8", className)}
      >
        <Typography as="h1" className="!text-2xl">
          {title}
        </Typography>
        <Breadcrumb.Breadcrumb>
          <Breadcrumb.BreadcrumbList className="sm:gap-1.5">
            {routes.map((route, index) => (
              <React.Fragment key={index}>
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbLink href={route.pathname}>
                    {route.label}
                  </Breadcrumb.BreadcrumbLink>
                </Breadcrumb.BreadcrumbItem>
                {index < routes.length - 1 && (
                  <Breadcrumb.BreadcrumbSeparator />
                )}
              </React.Fragment>
            ))}
          </Breadcrumb.BreadcrumbList>
        </Breadcrumb.Breadcrumb>
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
