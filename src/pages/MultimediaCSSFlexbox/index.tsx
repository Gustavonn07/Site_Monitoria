import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const CSSFlexboxPage = () => {
  return (
    <PageBuilder
      head={{
        title: "CSS: Flexbox",
        description:
          "Aprenda a construir layouts flexíveis e responsivos com o modelo Flexbox, um dos recursos mais usados no CSS moderno.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é Flexbox?",
          description: (
            <p>
              Flexbox é um modelo de layout unidimensional que facilita a
              distribuição de espaço entre itens de um container, mesmo
              quando o tamanho deles é desconhecido ou dinâmico. Para usar,
              basta aplicar <code>display: flex</code> no elemento pai.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Propriedades do Container (pai)",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li><code>flex-direction</code>: row (padrão), column, row-reverse, column-reverse.</li>
                <li><code>justify-content</code>: alinha itens no eixo principal (flex-start, center, space-between, space-around).</li>
                <li><code>align-items</code>: alinha itens no eixo cruzado (stretch, center, flex-start, flex-end).</li>
                <li><code>flex-wrap</code>: permite que os itens quebrem para a próxima linha.</li>
                <li><code>gap</code>: espaçamento entre os itens.</li>
              </ul>
              <CodeBlock
                language="css"
                code={`.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}`}
              />
              <div className="mt-4">
                <p className="text-sm mb-2">justify-content: space-between</p>
                <div className="flex justify-between items-center gap-3 bg-primary-200 p-3 rounded">
                  <div className="bg-secondary-500 text-white px-4 py-2 rounded text-sm">1</div>
                  <div className="bg-secondary-500 text-white px-4 py-2 rounded text-sm">2</div>
                  <div className="bg-secondary-500 text-white px-4 py-2 rounded text-sm">3</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm mb-2">justify-content: center + gap</p>
                <div className="flex justify-center items-center gap-3 bg-primary-200 p-3 rounded">
                  <div className="bg-secondary-500 text-white px-4 py-2 rounded text-sm">1</div>
                  <div className="bg-secondary-500 text-white px-4 py-2 rounded text-sm">2</div>
                  <div className="bg-secondary-500 text-white px-4 py-2 rounded text-sm">3</div>
                </div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Propriedades dos Itens (filhos)",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li><code>flex-grow</code>: quanto o item pode crescer em relação aos outros.</li>
                <li><code>flex-shrink</code>: quanto o item pode encolher.</li>
                <li><code>flex-basis</code>: tamanho inicial do item.</li>
                <li><code>align-self</code>: sobrescreve o align-items para um item específico.</li>
              </ul>
              <CodeBlock
                language="css"
                code={`.item-principal {
  flex-grow: 2; /* cresce o dobro em relação aos outros itens */
}

.item-secundario {
  flex-grow: 1;
}`}
              />
              <div className="mt-4">
                <p className="text-sm mb-2">flex-grow: 2 / 1 / 1</p>
                <div className="flex gap-3 bg-primary-200 p-3 rounded">
                  <div className="flex-grow-[2] bg-secondary-600 text-white px-4 py-2 rounded text-sm text-center">grow: 2</div>
                  <div className="flex-grow bg-secondary-500 text-white px-4 py-2 rounded text-sm text-center">grow: 1</div>
                  <div className="flex-grow bg-secondary-500 text-white px-4 py-2 rounded text-sm text-center">grow: 1</div>
                </div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Exemplo Completo: Card com Flexbox",
          description: (
            <div>
              <CodeBlock
                language="css"
                code={`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.menu {
  display: flex;
  gap: 20px;
}`}
              />
              <div className="flex justify-between items-center bg-secondary-800 text-white p-4 rounded-lg mt-4">
                <strong>Logo</strong>
                <div className="flex gap-5 text-sm">
                  <span>Início</span>
                  <span>Sobre</span>
                  <span>Contato</span>
                </div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Flexbox vs Grid",
          description: (
            <p>
              Flexbox é ideal para layouts em <strong>uma dimensão</strong>{" "}
              (linha ou coluna), como barras de navegação e listas de cards.
              Para layouts em duas dimensões (linhas e colunas ao mesmo
              tempo), o <code>CSS Grid</code> costuma ser mais adequado.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual propriedade distribui os itens com espaço igual entre eles, sem espaço nas extremidades?",
          options: [
            { option: "justify-content: space-around", isCorrect: false },
            { option: "justify-content: space-between", isCorrect: true },
            { option: "align-items: center", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "A Complete Guide to Flexbox - CSS-Tricks",
          link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          text: "Guia visual muito completo com todas as propriedades do Flexbox.",
        },
        {
          title: "Flexbox - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout",
          text: "Documentação oficial do modelo de caixas flexíveis.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/css_align_pseudo",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/canvas",
      }}
    />
  );
};
