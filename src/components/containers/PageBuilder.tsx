import { VariantProps } from "class-variance-authority";
import { useOutletContext } from "react-router-dom";
import { pagesLayoutContext } from "../../layout";
import { pageSectionVariant } from "../common";
import { PageItemsType } from "../../@types";
import { HeadingProps } from "./Heading";
import { buttonVariants } from "../ui";
import React from "react";

export interface TypePageBuilder extends React.HtmlHTMLAttributes<HTMLElement> {
  head: HeadingProps;
  itens: {
    type: PageItemsType;
    title?: string;
    description?: React.JSX.Element;
    infoProps?: {
      actionsInfo?: {
        text: string;
        handler: () => void;
        className?: string;
        variant?: VariantProps<typeof buttonVariants>;
      };
      className?: string
    };
    sectionProps?: {
      extraFieldSection?: React.JSX.Element;
      hasSeparatorSection?: boolean;
      className?: string;
      variant?: VariantProps<typeof pageSectionVariant>;
    };
  }[];
  bibliography: {
    title: string;
    link: string;
    text?: string;
    image?: string;
  }[];
  goBack?: string;
  goFoward?: string;
}

// FAZER COM QUE POSSA CRIAR SECTIONS COM BASE DOS ITENS RECEBIDOS
// CRIAR COMPONENTE DE BIBLIOGRAFIA
// GO_BACK E GO_FOWARD

export const PageBuilder = ({
  itens,
  bibliography,
  goBack,
  goFoward,
  head,
}: TypePageBuilder) => {
  const { setHead } = useOutletContext<pagesLayoutContext>();

  React.useEffect(() => {
    setHead({ ...head });
  }, []);
  return (
    <>
      <section>
        {goBack}
        {goFoward}
      </section>
    </>
  );
};
