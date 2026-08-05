import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const CSSColorsBordersPage = () => {
  return (
    <PageBuilder
      head={{
        title: "CSS: Cores e Bordas",
        description:
          "Aprenda as diferentes formas de definir cores em CSS e como estilizar bordas para dar destaque aos seus elementos.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Formas de Definir Cores",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Nome:</strong> <code>red</code>, <code>navy</code>,{" "}
                  <code>tomato</code>
                </li>
                <li>
                  <strong>Hexadecimal:</strong> <code>#ff0000</code>,{" "}
                  <code>#06253b</code>
                </li>
                <li>
                  <strong>RGB / RGBA:</strong> <code>rgb(255, 0, 0)</code>,{" "}
                  <code>rgba(255, 0, 0, 0.5)</code> (com transparência)
                </li>
                <li>
                  <strong>HSL / HSLA:</strong>{" "}
                  <code>hsl(0, 100%, 50%)</code> (matiz, saturação, luminosidade)
                </li>
              </ul>
              <CodeBlock
                language="css"
                code={`.a { color: tomato; }
.b { color: #06253b; }
.c { background-color: rgba(89, 131, 146, 0.6); }
.d { border-color: hsl(200, 40%, 40%); }`}
              />
              <div className="flex gap-3 mt-4 flex-wrap">
                <div className="w-20 h-14 rounded flex items-center justify-center text-white text-xs" style={{ backgroundColor: "tomato" }}>tomato</div>
                <div className="w-20 h-14 rounded flex items-center justify-center text-white text-xs" style={{ backgroundColor: "#06253b" }}>#06253b</div>
                <div className="w-20 h-14 rounded flex items-center justify-center text-white text-xs" style={{ backgroundColor: "rgba(89,131,146,0.9)" }}>rgba()</div>
                <div className="w-20 h-14 rounded flex items-center justify-center text-white text-xs" style={{ backgroundColor: "hsl(200,40%,40%)" }}>hsl()</div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Propriedades de Cor",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <code>color</code>: cor do texto
                </li>
                <li>
                  <code>background-color</code>: cor de fundo
                </li>
                <li>
                  <code>opacity</code>: transparência do elemento inteiro
                  (0 a 1)
                </li>
              </ul>
              <CodeBlock
                language="css"
                code={`.destaque {
  color: white;
  background-color: #598392;
  opacity: 0.9;
}`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Bordas",
          description: (
            <div>
              <p>
                A propriedade <code>border</code> é um atalho para três
                propriedades: <code>border-width</code>,{" "}
                <code>border-style</code> e <code>border-color</code>.
              </p>
              <CodeBlock
                language="css"
                code={`.caixa {
  border-width: 3px;
  border-style: solid;
  border-color: #01161e;

  /* Forma resumida (shorthand) */
  border: 3px solid #01161e;
}`}
              />
              <p className="mt-3">
                Também é possível estilizar apenas um lado, com{" "}
                <code>border-top</code>, <code>border-right</code>,{" "}
                <code>border-bottom</code> e <code>border-left</code>.
              </p>
              <div className="flex gap-4 flex-wrap mt-4">
                <div className="w-24 h-16 border-4 border-solid border-secondary-500 flex items-center justify-center text-xs">solid</div>
                <div className="w-24 h-16 border-4 border-dashed border-secondary-500 flex items-center justify-center text-xs">dashed</div>
                <div className="w-24 h-16 border-4 border-dotted border-secondary-500 flex items-center justify-center text-xs">dotted</div>
                <div className="w-24 h-16 border-4 border-double border-secondary-500 flex items-center justify-center text-xs">double</div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Border-radius: Bordas Arredondadas",
          description: (
            <div>
              <CodeBlock
                language="css"
                code={`.card {
  border: 2px solid #598392;
  border-radius: 12px; /* cantos arredondados */
}

.avatar {
  border-radius: 50%; /* forma circular */
}`}
              />
              <div className="flex gap-4 mt-4 items-center">
                <div className="w-24 h-16 border-2 border-secondary-500 rounded-xl flex items-center justify-center text-xs">radius: 12px</div>
                <div className="w-16 h-16 border-2 border-secondary-500 rounded-full flex items-center justify-center text-xs">50%</div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Boas Práticas",
          description: (
            <p>
              Prefira usar valores em <code>hexadecimal</code> ou{" "}
              <code>hsl()</code> para manter consistência com o design do
              projeto, e reserve <code>rgba()</code>/<code>hsla()</code> para
              quando precisar de transparência.
            </p>
          ),
        },
      ]}
      bibliography={[
        {
          title: "CSS Colors - W3Schools",
          link: "https://www.w3schools.com/css/css_colors.asp",
          text: "Referência de todas as formas de definir cores em CSS.",
        },
        {
          title: "border - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/border",
          text: "Documentação completa da propriedade border.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/css_introduction",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/css_text_tables",
      }}
    />
  );
};
