import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants, Separator } from "../ui";
import { cn } from "../../utils";
import React from "react";

interface PropsInfoCard extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: React.JSX.Element;
  actions?: {
    text?: string;
    className?: string;
    handler?: () => void;
    variant?: VariantProps<typeof buttonVariants>;
  };
  hasSeparator?: boolean;
}

export const InfoCard = ({
  title,
  description,
  actions,
  className,
  hasSeparator = true,
}: PropsInfoCard) => {
  return (
    <>
      <article
        className={cn(
          "bg-secondary-100 rounded-lg sm:p-10 p-5 shadow-lg w-full",
          className
        )}
      >
        {title && (
          <h3 className="text-secondary-800 text-2xl font-semibold mb-2">
            {title}
          </h3>
        )}
        {description && (
          <div className="text-secondary-800 text-lg">{description}</div>
        )}
        {actions?.text && (
          <Button
            className={cn(actions.className)}
            variant={actions.variant?.variant}
            size={actions.variant?.size}
            onClick={actions.handler}
          >
            {actions.text}
          </Button>
        )}
      </article>
      {hasSeparator && <Separator className="bg-primary-400" />}
    </>
  );
};
