import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "../ui";
import { cn } from "../../utils";
import React from "react";

interface PropsInfoCard extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: React.JSX.Element;
  actions?: {
    text: string;
    className: string;
    handler: () => void;
    variant?: VariantProps<typeof buttonVariants>;
  };
}

export const InfoCard = ({
  title,
  description,
  actions,
  className,
}: PropsInfoCard) => {
  return (
    <article
      className={cn(
        "bg-secondary-100 rounded-lg p-10 shadow-lg w-full",
        className
      )}
    >
      <h3 className="text-secondary-800 text-2xl font-semibold mb-2">
        {title}
      </h3>
      <div className="text-secondary-800 text-lg">{description}</div>
      {actions && (
        <Button
          title={actions.text}
          className={cn(actions.className)}
          variant={actions.variant?.variant}
          size={actions.variant?.size}
          onClick={actions.handler}
        />
      )}
    </article>
  );
};
