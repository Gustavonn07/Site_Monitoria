import { cn } from "../../utils";
import React from "react";

interface PropsInfoCard extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: React.JSX.Element;
}

export const InfoCard = ({ title, description, className }: PropsInfoCard) => {
  return (
    <article
      className={cn(
        "bg-secondary-100 rounded-lg p-10 shadow-lg w-full",
        className
      )}
    >
      <h3 className="text-secondary-800 text-2xl font-semibold mb-2">{title}</h3>
      <div className="text-secondary-800 text-lg">{description}</div>
      <button className="mt-4 px-4 py-2 bg-secondary-500 text-white font-semibold rounded-md hover:bg-secondary-600 duration-150">
        Learn More
      </button>
    </article>
  );
};
