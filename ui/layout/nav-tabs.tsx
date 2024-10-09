"use client";

import React from "react";
import { cn } from "@/lib/cn";
import * as Tabs from "@/components/disclosure/tabs";
import { TabsProps } from "@radix-ui/react-tabs";
import { FeedbackContent } from "../shared/feedback-content";
import { usePathname } from "next/navigation";
import { Separator } from "@/packages/components/data-display/separator";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  event?: () => void;
};

export interface NavTabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "dir">,
    TabsProps {
  tabs: Tab[];
}

const NavTabs = React.forwardRef<HTMLDivElement, NavTabsProps>(
  ({ className, tabs, defaultValue, ...props }, ref) => {
    const pathname = usePathname();
    const [content, setContent] = React.useState<Tab>(
      () =>
        tabs.find((tab) => tab.id === defaultValue) || {
          content: null,
          id: "",
          label: "",
        }
    );

    const onSelectTab = (tab: Tab) => {
      setContent(tab);
    };

    const incrementEvent = (tab: Tab) => {
      onSelectTab(tab);

      if (tab.event) {
        tab.event();
      }
    };

    if (!tabs) {
      return (
        <FeedbackContent
          title="Não conseguimos carregar os dados"
          description="Desculpe, houve um erro ao tentar buscar as informações. Por favor, atualize a página ou tente novamente mais tarde."
          pathname={pathname}
          label="Recarregar"
        />
      );
    }

    React.useMemo(() => tabs, [tabs]);

    return (
      <Tabs.Tabs
        {...props}
        ref={ref}
        className={cn(
          "w-full h-auto flex-wrap flex md:flex-col flex-row gap-2 md:gap-10 max-w-7xl mx-auto",
          className
        )}
        defaultValue={defaultValue}
      >
        <div className="flex flex-col w-full h-full md:flex-row gap-10">
          <div className="flex flex-col h-full w-full md:w-full md:min-w-[160px] gap-2.5 py-2">
            <Tabs.TabsList className="rounded-none mt-0 md:mt-7 !overflow-hidden !overflow-x-scroll md:!overflow-x-hidden gap-2.5 justify-stretch py-2.5 md:p-0 md:justify-center bg-transparent flex flex-row md:flex-col w-full h-14 md:h-auto">
              {tabs.map((tab) => (
                <Tabs.TabsTrigger
                  key={tab.id}
                  className="w-full justify-center md:justify-start data-[state=active]:shadow-none"
                  value={tab.id ? tab.id : ""}
                  onClick={() => incrementEvent(tab)}
                >
                  {tab.label}
                </Tabs.TabsTrigger>
              ))}
            </Tabs.TabsList>
          </div>
          <Tabs.TabsContent
            className="w-full h-auto flex-none py-4 px-6 border-none md:border-l border-neutral-400/20"
            value={content.id}
          >
            {content.content}
          </Tabs.TabsContent>
        </div>
      </Tabs.Tabs>
    );
  }
);

NavTabs.displayName = "NavTabs";

export { NavTabs };
