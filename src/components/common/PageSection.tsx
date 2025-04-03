import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";
import React from "react";
import { Separator } from "../ui";

export const pageSectionVariant = cva("my-10 text-secondary-800 rounded-lg", {
  variants: {
    variant: {
      default: "bg-transparent",
      secondary: "bg-secondary-100 p-10",
      primary: "bg-primary-200 p-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface PropsPageSection
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageSectionVariant> {
  title: string;
  description: React.JSX.Element;
  extraField?: React.JSX.Element;
  hasSeparator?: boolean;
}

export const PageSection = ({
  title,
  description,
  extraField,
  className,
  variant = "default",
  hasSeparator = true,
}: PropsPageSection) => {
  return (
    <>
      <article
        className={cn(
          "",
          pageSectionVariant({ variant, className }),
          className
        )}
      >
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="text-lg">{description}</div>
        {extraField}
      </article>
      {variant === "default" && hasSeparator && (
        <Separator className="bg-primary-400" />
      )}
    </>
  );
};
