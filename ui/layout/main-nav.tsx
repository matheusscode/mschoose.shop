"use client";

import React from "react";
import { cn } from "@/lib/cn";
import Image from "next/image";
import msChoose from "/public/brand.svg";
import Link from "next/link";
import { DefLink } from "./def-link";
import { CircleUserRoundIcon, ShoppingCartIcon } from "lucide-react";
import { registry_links } from "@/registry/registry-links";
import * as Navigation from "@/components/navigation/navigation-menu";
import { usePathname } from "next/navigation";

export interface MainNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainNav = React.forwardRef<HTMLDivElement, MainNavProps>(
  ({ className, ...props }, ref) => {
    const pathname = usePathname();

    const renderNavigate = (Icon: React.ElementType, path: string) => (
      <DefLink
        href={path}
        variant="ghost"
        size="icon"
        className="!rounded-full"
      >
        {Icon && <Icon size={20} className="text-muted-foreground" />}
      </DefLink>
    );

    return (
      <header
        {...props}
        ref={ref}
        className={cn(
          "flex w-full justify-center items-center bg-background sticky top-0 z-50",
          className
        )}
      >
        <div className="max-w-7xl w-full mx-auto justify-between py-2 px-2.5 flex items-center">
          <Link href="/" title="MSChoose logo brand">
            <Image src={msChoose} alt="MSChoose logo brand." />
          </Link>
          <Navigation.NavigationMenu className="lg:flex w-full hidden items-center justify-center gap-x-3.5 max-w-5xl mx-auto ">
            <Navigation.NavigationMenuList className="flex justify-center items-center gap-x-3.5 w-full">
              {registry_links.map((registry) => {
                const hasSubRegistryLinks = registry.sub_links?.length! > 0;

                return (
                  <Navigation.NavigationMenuItem asChild key={registry.id}>
                    {hasSubRegistryLinks ? (
                      <Navigation.NavigationMenuItem className="w-full">
                        <Navigation.NavigationMenuTrigger>
                          {registry.label}
                        </Navigation.NavigationMenuTrigger>
                        <Navigation.NavigationMenuContent asChild>
                          <ul className="grid gap-x-3.5 gap-y-1.5 p-4 md:w-[400px] lg:w-[500px] grid-cols-3">
                            {registry.sub_links?.map((sub_registry) => (
                              <li key={sub_registry.id}>
                                <Navigation.NavigationMenuLink asChild>
                                  <DefLink
                                    variant="ghost"
                                    href={sub_registry.pathname}
                                  >
                                    {sub_registry.label}
                                  </DefLink>
                                </Navigation.NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </Navigation.NavigationMenuContent>
                      </Navigation.NavigationMenuItem>
                    ) : (
                      <DefLink
                        variant={
                          pathname === registry.pathname ? "default" : "ghost"
                        }
                        href={registry.pathname}
                      >
                        {registry.label}
                      </DefLink>
                    )}
                  </Navigation.NavigationMenuItem>
                );
              })}
            </Navigation.NavigationMenuList>
          </Navigation.NavigationMenu>
          <div className="flex items-center gap-x-3.5">
            {renderNavigate(ShoppingCartIcon, "/cart")}
            {renderNavigate(CircleUserRoundIcon, "/account")}
          </div>
        </div>
      </header>
    );
  }
);

MainNav.displayName = "MainNav";

export { MainNav };
