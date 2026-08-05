import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const CSSAlignPseudoPage = () => {
  return (
    <PageBuilder
      head={{
        title: "CSS: Align e Pseudo-classes",
        description:
          "Aprenda a alinhar conteúdo com text-align e vertical-align, e a estilizar estados de elementos com pseudo-classes.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Alinhamento de Texto e Blocos",
          description: (
            <div>
              <CodeBlock
                language="css"
                code={`.texto {
  text-align: center; /* left | right | center | justify */
}

.caixa {
  margin: 0 auto; /* centraliza um bloco com largura definida */
  width: 300px;
}`}
              />
              <div className="flex flex-col gap-2 mt-4">
                <div className="border p-2 text-left text-sm">text-align: left</div>
                <div className="border p-2 text-center text-sm">text-align: center</div>
                <div className="border p-2 text-right text-sm">text-align: right</div>
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "O que são Pseudo-classes?",
          description: (
            <p>
              Pseudo-classes selecionam elementos em um{" "}
              <strong>estado específico</strong>, sem precisar de classes ou
              JavaScript extra. São escritas com <code>:</code> após o
              seletor, ex: <code>a:hover</code>.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Principais Pseudo-classes",
          description: (
            <div>
              <ul className="list-disc list-inside space-y-1">
                <li><code>:hover</code>: quando o mouse está sobre o elemento.</li>
                <li><code>:focus</code>: quando o elemento está focado (ex: um input).</li>
                <li><code>:active</code>: enquanto o elemento está sendo clicado.</li>
                <li><code>:first-child</code> / <code>:last-child</code>: primeiro/último filho do pai.</li>
                <li><code>:nth-child(n)</code>: elemento na posição n.</li>
                <li><code>:disabled</code>: elementos de formulário desabilitados.</li>
              </ul>
              <CodeBlock
                language="css"
                code={`button {
  background-color: #598392;
  color: white;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0e3b4f;
}

button:active {
  transform: scale(0.97);
}

input:focus {
  outline: 2px solid #598392;
}

li:nth-child(odd) {
  background-color: #f8f9fa;
}`}
              />
              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-2 rounded bg-secondary-500 text-white hover:bg-secondary-700 active:scale-95 transition-all cursor-pointer">
                  Passe o mouse aqui
                </button>
                <input
                  className="border rounded px-3 py-2 focus:outline-2 focus:outline-secondary-500"
                  placeholder="Clique para focar"
                />
              </div>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Pseudo-classes vs Pseudo-elementos",
          description: (
            <p>
              Não confunda com <strong>pseudo-elementos</strong>, escritos
              com <code>::</code> (dois pontos), como <code>::before</code> e{" "}
              <code>::after</code>, que criam conteúdo virtual antes/depois
              de um elemento, em vez de selecionar um estado.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual pseudo-classe estiliza um elemento enquanto o mouse está sobre ele?",
          options: [
            { option: ":focus", isCorrect: false },
            { option: ":hover", isCorrect: true },
            { option: ":active", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Pseudo-classes - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes",
          text: "Lista completa de pseudo-classes disponíveis em CSS.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/css_position",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/css_flexbox",
      }}
    />
  );
};
