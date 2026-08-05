import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const CSSIntroductionPage = () => {
  return (
    <PageBuilder
      head={{
        title: "Introdução ao CSS",
        description:
          "Entenda o que é CSS, sua sintaxe básica, as formas de aplicação e o Box Model, fundamento de todo o layout na Web.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é CSS?",
          description: (
            <p>
              CSS (<strong>Cascading Style Sheets</strong>, ou Folhas de
              Estilo em Cascata) é a linguagem responsável por definir a{" "}
              <strong>apresentação visual</strong> de uma página HTML: cores,
              espaçamentos, tipografia, layout e responsividade. Enquanto o
              HTML define a estrutura e o conteúdo, o CSS define{" "}
              <em>como</em> esse conteúdo é exibido.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Sintaxe Básica",
          description: (
            <div>
              <p>
                Uma regra CSS é composta por um <strong>seletor</strong> (o
                que será estilizado) e um bloco de{" "}
                <strong>declarações</strong> entre chaves, cada uma no formato{" "}
                <code>propriedade: valor;</code>
              </p>
              <CodeBlock
                language="css"
                code={`seletor {
  propriedade: valor;
  outra-propriedade: outro-valor;
}

/* Exemplo real */
p {
  color: #06253b;
  font-size: 16px;
}`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Formas de Aplicar CSS",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Inline:</strong> direto no atributo{" "}
                  <code>style</code> do elemento (evite, é difícil de manter).
                </li>
                <li>
                  <strong>Interno:</strong> dentro de uma tag{" "}
                  <code>&lt;style&gt;</code> no <code>&lt;head&gt;</code>.
                </li>
                <li>
                  <strong>Externo:</strong> em um arquivo <code>.css</code>{" "}
                  separado, vinculado via <code>&lt;link&gt;</code> — a
                  abordagem recomendada.
                </li>
              </ul>
              <CodeBlock
                language="html"
                code={`<!-- Inline -->
<p style="color: red;">Texto vermelho</p>

<!-- Interno -->
<head>
  <style>
    p { color: red; }
  </style>
</head>

<!-- Externo (recomendado) -->
<head>
  <link rel="stylesheet" href="estilos.css" />
</head>`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Principais Seletores",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <code>tag</code>: seleciona pela tag, ex: <code>p</code>,{" "}
                  <code>div</code>.
                </li>
                <li>
                  <code>.classe</code>: seleciona por classe, ex:{" "}
                  <code>.card</code>.
                </li>
                <li>
                  <code>#id</code>: seleciona por id único, ex:{" "}
                  <code>#header</code>.
                </li>
                <li>
                  <code>*</code>: seleciona todos os elementos.
                </li>
                <li>
                  <code>a, b</code>: seleciona múltiplos elementos ao mesmo
                  tempo.
                </li>
                <li>
                  <code>a b</code>: seleciona <code>b</code> descendente de{" "}
                  <code>a</code>.
                </li>
              </ul>
              <CodeBlock
                language="css"
                code={`p { color: navy; }
.destaque { font-weight: bold; }
#titulo-principal { font-size: 2rem; }
.card, .banner { border-radius: 8px; }
nav a { text-decoration: none; }`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Box Model",
          description: (
            <div>
              <p>
                Todo elemento HTML é tratado pelo navegador como uma{" "}
                <strong>caixa</strong>, composta por quatro camadas, de
                dentro para fora: <code>content</code>, <code>padding</code>,{" "}
                <code>border</code> e <code>margin</code>.
              </p>
              <div className="flex justify-center my-5">
                <div className="bg-yellow-100 border-2 border-dashed border-yellow-500 p-4 text-center text-xs">
                  margin
                  <div className="bg-green-100 border-2 border-dashed border-green-500 p-4">
                    border
                    <div className="bg-blue-100 p-4">
                      padding
                      <div className="bg-white border p-3 text-secondary-800 font-semibold">
                        content
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CodeBlock
                language="css"
                code={`.caixa {
  width: 200px;
  padding: 16px;
  border: 4px solid #598392;
  margin: 20px;
}
/* Largura total ocupada = width + padding + border + margin */`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "box-sizing: border-box",
          description: (
            <p>
              Por padrão, <code>width</code> e <code>height</code> não
              incluem <code>padding</code> e <code>border</code>, o que pode
              causar surpresas no layout. Definir{" "}
              <code>box-sizing: border-box</code> faz com que padding e
              borda sejam incluídos dentro da largura definida, facilitando
              muito os cálculos de layout.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual seletor CSS deve ser usado para estilizar todos os elementos com a classe 'card'?",
          options: [
            { option: "#card", isCorrect: false },
            { option: ".card", isCorrect: true },
            { option: "card", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Introdução ao CSS - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps",
          text: "Guia completo sobre os fundamentos do CSS.",
        },
        {
          title: "CSS Box Model - W3Schools",
          link: "https://www.w3schools.com/css/css_boxmodel.asp",
          text: "Explicação visual e interativa sobre o modelo de caixas.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/forms_submission",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/css_colors_borders",
      }}
    />
  );
};
