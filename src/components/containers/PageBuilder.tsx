import { VariantProps } from "class-variance-authority";
import { useNavigate, useOutletContext } from "react-router-dom";
import { pagesLayoutContext } from "../../layout";
import {
  Bibliography,
  InfoCard,
  PageSection,
  pageSectionVariant,
} from "../common";
import { PageItemsType } from "../../@types";
import { HeadingProps } from "./Heading";
import { Button, buttonVariants } from "../ui";
import { cn } from "../../utils";
import React from "react";

export interface TypePageBuilder extends React.HtmlHTMLAttributes<HTMLElement> {
  head: HeadingProps;
  itens: {
    type: PageItemsType;
    title: string;
    description?: React.JSX.Element;
    infoProps?: {
      actionsInfo?: {
        text: string;
        handler: () => void;
        className?: string;
        variant?: VariantProps<typeof buttonVariants>;
      };
      className?: string;
      hasSeparatorInfo?: boolean;
    };
    sectionProps?: {
      extraFieldSection?: React.JSX.Element;
      hasSeparatorSection?: boolean;
      className?: string;
      variant?: VariantProps<typeof pageSectionVariant>;
    };
    extraSection?: React.JSX.Element;
  }[];
  bibliography?: {
    title: string;
    link: string;
    text?: string;
    image?: string;
    hasSeparator?: boolean;
  }[];
  goBack?: {
    text: string;
    link: string;
    className?: string;
  };
  goFoward?: {
    text: string;
    link: string;
    className?: string;
  };
}

export const PageBuilder = ({
  itens,
  bibliography,
  goBack,
  goFoward,
  head,
}: TypePageBuilder) => {
  const { setHead } = useOutletContext<pagesLayoutContext>();
  const navigate = useNavigate();

  React.useEffect(() => {
    setHead({ ...head });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex justify-between w-full bottom-5">
          <Button
            variant="secondary"
            onClick={() => navigate("/" + goBack?.link)}
            disabled={!goBack?.link}
            className={cn("w-32", goBack?.className)}
          >
            {goBack?.text ?? "Voltar"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/" + goFoward?.link)}
            disabled={!goFoward?.link}
            className={cn("w-32", goFoward?.className)}
          >
            {goFoward?.text ?? "Próximo"}
          </Button>
        </div>
        {itens.map((item, index) => (
          <>
            {item.type === PageItemsType.SECTION && (
              <PageSection
                key={index}
                title={item.title}
                description={item.description}
                hasSeparator={item?.sectionProps?.hasSeparatorSection}
                extraField={item?.sectionProps?.extraFieldSection}
                variant={item?.sectionProps?.variant?.variant}
              />
            )}
            {item.type === PageItemsType.INFO && (
              <InfoCard
                key={index}
                title={item.title}
                description={item.description}
                actions={{
                  text: item?.infoProps?.actionsInfo?.text,
                  variant: item?.infoProps?.actionsInfo?.variant,
                  className: item?.infoProps?.actionsInfo?.className,
                  handler: item?.infoProps?.actionsInfo?.handler,
                }}
                hasSeparator={item?.infoProps?.hasSeparatorInfo}
                className={item?.infoProps?.className}
              />
            )}
            {item.type === PageItemsType.EXTRA && item.extraSection}
          </>
        ))}
        {bibliography?.map((item, index) => (
          <Bibliography
            title={item.title}
            link={item.link}
            image={item?.image}
            text={item?.text}
            hasSeparator={item?.hasSeparator}
            key={index}
          />
        ))}

        <div className="flex justify-between w-full bottom-5">
          <Button
            variant="secondary"
            onClick={() => navigate("/" + goBack?.link)}
            disabled={!goBack?.link}
            className={cn("w-32", goBack?.className)}
          >
            {goBack?.text ?? "Voltar"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/" + goFoward?.link)}
            disabled={!goFoward?.link}
            className={cn("w-32", goFoward?.className)}
          >
            {goFoward?.text ?? "Próximo"}
          </Button>
        </div>
      </section>
    </>
  );
};

