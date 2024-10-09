import React from "react";
import { cn } from "@/lib/cn";
import { registry_sitemap } from "@/registry/registry-sitemap";
import { Typography } from "@/packages/components/typography/typography";
import { DefLink } from "../shared/def-link";
import Image from "next/image";
import msChoose from "/public/brand.svg";
import { Separator } from "@radix-ui/react-separator";

export interface MainFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainFooter = React.forwardRef<HTMLDivElement, MainFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        {...props}
        ref={ref}
        className={cn(
          "py-10 px-4 bg-neutral-100 flex items-center justify-center",
          className
        )}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-10 max-w-7xl w-full mx-auto">
          <div className="flex gap-y-3.5 max-w-64 w-full flex-col items-start">
            <Image src={msChoose} alt="MSChoose logo brand." />
            <Typography as="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, est.
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-y-6 md:gap-0 md:flex flex-col md:flex-row py-10 lg:py-0 items-center lg:items-start w-full md:justify-center mx-auto">
            {registry_sitemap.map((sitemap) => (
              <ul
                key={sitemap.id}
                className="flex items-start flex-col gap-y-1.5 px-4 pb-2.5 w-full max-w-full sm:max-w-52 border-b border-solid border-neutral-400 sm:border-transparent"
              >
                <Typography as="h1" className="font-light text-sm mb-5">
                  {sitemap.group_name}
                </Typography>
                {sitemap.links.map((link) => (
                  <li key={link.id}>
                    <DefLink
                      className="!p-0 !h-auto"
                      variant="link"
                      href={link.pathanme}
                    >
                      {link.label}
                    </DefLink>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex gap-y-5 items-start whitespace-nowrap">
            <Typography
              as="h1"
              className="!whitespace-nowrap font-light text-sm mb-6"
            >
              Metodos de pagamento
            </Typography>
          </div>
        </div>
      </footer>
    );
  }
);

MainFooter.displayName = "MainFooter";

export { MainFooter };
