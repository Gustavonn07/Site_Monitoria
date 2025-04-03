import { useOutletContext } from "react-router-dom";
import { VariantProps } from "class-variance-authority";
import { pagesLayoutContext } from "../../layout";
import { PageItemsType } from "../../@types";
import { buttonVariants } from "../ui";
import { HeadingProps } from "./Heading";
import React from "react";

export interface TypePageBuilder extends React.HtmlHTMLAttributes<HTMLElement> {
  head: HeadingProps;
  itens: {
    type: PageItemsType;
    title?: string;
    description?: React.JSX.Element;
    actionsInfo?: {
      text: string;
      className: string;
      handler: () => void;
      variant?: VariantProps<typeof buttonVariants>;
    };
    extraFieldSection?: React.JSX.Element;
    hasSeparatorSection?: boolean;
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
