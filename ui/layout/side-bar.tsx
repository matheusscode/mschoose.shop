import React from "react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import Image from "next/image";
import adminBrand from "/public/brand-admin.svg";

export type ModuleItem = {
  id: string;
  label: string;
  pathname: string;
  icon?: React.ElementType;
};

export interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  modules: ModuleItem[];
}

const SideBar = React.forwardRef<HTMLDivElement, SideBarProps>(
  ({ className, modules, ...props }, ref) => {
    return (
      <aside
        {...props}
        ref={ref}
        className={cn(
          "min-w-[270px] flex-1 border-r border-input py-2 px-3.5",
          className
        )}
      >
        <Link
          href="/"
          className="py-4 flex items-center justify-center w-full h-autoi"
        >
          <Image src={adminBrand} alt="" width={150} height={150} />
        </Link>
        <ul className="flex flex-col gap-1.5 mt-2.5">
          {modules.map((module) => (
            <li key={module.id}>
              <Link
                href={module.pathname}
                className="transition-all inline-flex text-muted-foreground hover:text-primary items-center gap-2 hover:bg-accent rounded-md w-full px-4 select-none py-2"
              >
                {module.icon && <module.icon className="size-5" />}
                <span className="text-[15px] font-normal leading-relaxed">
                  {module.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
);

SideBar.displayName = "SideBar";

export { SideBar };
