"use client";

import React from "react";
import { cn } from "@/lib/cn";
import emptyFigure from "/public/figures/empty-box.svg";
import Image from "next/image";
import { Typography } from "@/packages/components/typography/typography";
import { useRouter } from "next/navigation";
import { Button } from "@/packages/components/forms/button";
import { ArrowRightIcon } from "lucide-react";

export interface FeedbackContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  pathname?: string;
  figure?: {
    src: string;
    alt: string;
  };
}

const FeedbackContent = React.forwardRef<HTMLDivElement, FeedbackContentProps>(
  (
    {
      className,
      pathname = "/",
      title = "Nenhum item encontrado",
      description = "Parece que não há nenhum item disponível no momento. Tente novamente mais tarde ou verifique outras seções.",
      figure,
      ...props
    },
    ref
  ) => {
    const router = useRouter();

    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-5xl flex items-center justify-center flex-col p-2",
          className
        )}
      >
        <Image
          src={figure?.src || emptyFigure}
          alt={
            figure?.alt ||
            "Ilustração de uma caixa vazia, representando ausência de itens"
          }
          className="w-[90px] h-[90px] sm:w-[150px] sm:h-[150px]"
          priority
        />
        <div className="flex flex-col gap-3.5 justify-center items-center mt-2.5">
          <Typography as="h1" className="text-xl">
            {title}
          </Typography>
          <Typography
            as="h2"
            className="text-center text-muted-foreground text-sm max-w-lg font-normal w-full"
          >
            {description}
          </Typography>
        </div>
        <Button
          size="lg"
          variant="default"
          className="mt-12 gap-2 hover:gap-3 transition-all"
          onClick={pathname ? () => router.push(pathname) : () => router.back()}
        >
          <span className="text-sm">Voltar para página anterior</span>
          <ArrowRightIcon size={21} />
        </Button>
      </div>
    );
  }
);

FeedbackContent.displayName = "FeedbackContent";

export { FeedbackContent };
