import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const CSSPositionPage = () => {
  return (
    <PageBuilder
      head={{
        title: "CSS: Propriedade Position",
        description:
          "Entenda os diferentes valores da propriedade position e como eles controlam o posicionamento dos elementos na página.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Os Valores de position",
          description: (
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code>static</code>: valor padrão. O elemento segue o fluxo
                normal da página, e <code>top</code>/<code>left</code> etc.
                não têm efeito.
              </li>
              <li>
                <code>relative</code>: o elemento é posicionado em relação à
                sua própria posição original.
              </li>
              <li>
                <code>absolute</code>: o elemento sai do fluxo normal e é
                posicionado em relação ao ancestral posicionado mais próximo
                (não <code>static</code>).
              </li>
              <li>
                <code>fixed</code>: posicionado em relação à janela do
                navegador (viewport), não se move ao rolar a página.
              </li>
              <li>
                <code>sticky</code>: comporta-se como <code>relative</code>{" "}
                até atingir um limite de rolagem, quando passa a se
                comportar como <code>fixed</code>.
              </li>
            </ul>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "relative e absolute na Prática",
          description: (
            <div>
              <p>
                Um padrão muito comum é usar <code>position: relative</code>{" "}
                no elemento pai e <code>position: absolute</code> no filho,
                para posicionar o filho livremente dentro do pai.
              </p>
              <CodeBlock
                language="css"
                code={`.card {
  position: relative; /* vira a referência para o filho */
  width: 200px;
  height: 120px;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`}
              />
              <div className="relative w-60 h-32 bg-primary-200 rounded-lg mt-4 border">
                <span className="absolute top-2 right-2 bg-secondary-600 text-white text-xs px-2 py-1 rounded">
                  Novo
                </span>
                <p className="p-3 text-sm text-secondary-800">
                  Card com badge posicionado no canto superior direito via{" "}
                  <code>absolute</code>.
                </p>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "fixed e sticky",
          description: (
            <div>
              <CodeBlock
                language="css"
                code={`.barra-topo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.cabecalho-tabela {
  position: sticky;
  top: 0;
}`}
              />
              <p className="mt-3">
                <code>fixed</code> é muito usado para barras de navegação
                que ficam sempre visíveis, enquanto <code>sticky</code> é
                ideal para cabeçalhos de tabela que "grudam" no topo durante
                a rolagem.
              </p>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "z-index",
          description: (
            <p>
              Quando elementos posicionados se sobrepõem, a propriedade{" "}
              <code>z-index</code> define qual fica por cima: quanto maior o
              valor, mais próximo do usuário. Só funciona em elementos com{" "}
              <code>position</code> diferente de <code>static</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual valor de position mantém o elemento fixo na tela mesmo ao rolar a página?",
          options: [
            { option: "relative", isCorrect: false },
            { option: "sticky", isCorrect: false },
            { option: "fixed", isCorrect: true },
          ],
        },
      ]}
      bibliography={[
        {
          title: "position - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/position",
          text: "Referência completa sobre a propriedade position.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/css_text_tables",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/css_align_pseudo",
      }}
    />
  );
};
