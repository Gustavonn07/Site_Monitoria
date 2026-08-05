import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";

export const MultimediaModules = () => {
  return (
    <PageBuilder
      head={{
        title: "Módulos em JavaScript",
        description:
          "Aprenda a organizar seu código em múltiplos arquivos usando o sistema de módulos ES6 (import/export).",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "Por que Usar Módulos?",
          description: (
            <p>
              Conforme um projeto cresce, manter tudo em um único arquivo
              JavaScript se torna difícil de organizar e manter. Módulos
              permitem dividir o código em{" "}
              <strong>arquivos independentes e reutilizáveis</strong>, cada
              um responsável por uma parte específica da aplicação.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Exportando: export",
          description: (
            <CodeBlock
              language="javascript"
              code={`// utils.js

// Exportação nomeada
export function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2);
}

export const IMPOSTO = 0.1;

// Exportação padrão (apenas uma por arquivo)
export default function calcularTotal(valor) {
  return valor + valor * IMPOSTO;
}`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Importando: import",
          description: (
            <CodeBlock
              language="javascript"
              code={`// main.js
import calcularTotal, { formatarPreco, IMPOSTO } from "./utils.js";

console.log(formatarPreco(50));   // "R$ 50.00"
console.log(calcularTotal(50));   // 55
console.log(IMPOSTO);             // 0.1

// Importar tudo em um único objeto
import * as Utils from "./utils.js";
Utils.formatarPreco(20);`}
            />
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Usando Módulos no HTML",
          description: (
            <div>
              <p>
                Para que o navegador entenda o sistema de módulos, o script
                deve ser carregado com <code>type="module"</code>:
              </p>
              <CodeBlock
                language="html"
                code={`<script type="module" src="main.js"></script>`}
              />
              <p className="mt-3">
                Scripts do tipo <code>module</code> possuem algumas
                diferenças importantes em relação a scripts comuns:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>São executados em modo estrito (<code>"use strict"</code>) automaticamente.</li>
                <li>Têm seu próprio escopo — variáveis não vazam para o escopo global.</li>
                <li>São carregados de forma adiada (<code>defer</code>) por padrão.</li>
                <li>São avaliados apenas uma vez, mesmo se importados por vários arquivos.</li>
              </ul>
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.INFO,
          title: "Exportação Nomeada vs Padrão",
          description: (
            <p>
              Um arquivo pode ter <strong>várias</strong> exportações
              nomeadas (<code>export const</code>, <code>export
              function</code>), mas apenas <strong>uma</strong> exportação
              padrão (<code>export default</code>). Prefira exportações
              nomeadas quando o módulo expõe várias funcionalidades
              relacionadas.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Quantas exportações padrão (export default) um módulo pode ter?",
          options: [
            { option: "Quantas forem necessárias", isCorrect: false },
            { option: "No máximo uma", isCorrect: true },
            { option: "Nenhuma, apenas nomeadas", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Módulos JavaScript - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules",
          text: "Guia oficial sobre o sistema de módulos ES6.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/events",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/web_storage",
      }}
    />
  );
};
