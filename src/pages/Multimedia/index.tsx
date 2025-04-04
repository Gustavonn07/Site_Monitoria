import { PageBuilder } from "../../components/containers/PageBuilder";
import { PageItemsType } from "../../@types";

export const Multimedia = () => {
  return (
    <PageBuilder
      head={{
        title: "Autoração Multimídia",
        description: "Cadeira de autoração 2 home",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Introdução",
          description: (
            <>Aprenda os conceitos iniciais e entenda o que será abordado.</>
          ),
          sectionProps: {
            hasSeparatorSection: true,
            className: "mb-6",
            variant: { variant: "primary" },
          },
        },
        {
          type: PageItemsType.INFO,
          title: "Material Complementar",
          description: (
            <>
              Acesse links e recursos úteis para aprofundar o conteúdo estudado.
            </>
          ),
          infoProps: {
            className: "mb-4",
            actionsInfo: {
              text: "Ver Recursos",
              handler: () => alert("Acessando materiais..."),
              className: "mt-2",
              variant: { variant: "default" },
            },
          },
        },
        {
          type: PageItemsType.SECTION,
          title: "Conteúdo Principal",
          description: <>Aqui está o corpo principal do conteúdo da aula.</>,
          sectionProps: {
            extraFieldSection: (
              <div className="text-sm text-muted-foreground">
                Dica: revise os exemplos!
              </div>
            ),
            hasSeparatorSection: true,
          },
        },
        {
          type: PageItemsType.INFO,
          title: "Próximos Passos",
          description: <>Confira o que estudar depois desta seção.</>,
          infoProps: {
            actionsInfo: {
              text: "Continuar",
              handler: () => alert("Seguindo para o próximo..."),
              variant: { variant: "outline" },
            },
          },
        },
        {
          type: PageItemsType.EXTRA,
          title: "Extra",
          extraSection: (
            <div className="p-4 bg-muted text-sm rounded-xl">
              Este é um conteúdo extra incluído na página dinamicamente.
            </div>
          ),
        },
      ]}
    />
  );
};
