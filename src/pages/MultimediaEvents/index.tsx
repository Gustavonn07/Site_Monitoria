import { PageBuilder } from "../../components/containers/PageBuilder";
import { CodeBlock } from "../../components/common";
import { PageItemsType } from "../../@types";
import React from "react";

const EventDemo = () => {
  const [log, setLog] = React.useState<string[]>([]);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  const addLog = (msg: string) =>
    setLog((prev) => [msg, ...prev].slice(0, 4));

  return (
    <div className="border rounded-lg p-4 bg-primary-100 space-y-3">
      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCoords({
            x: Math.round(e.clientX - rect.left),
            y: Math.round(e.clientY - rect.top),
          });
        }}
        onClick={() => addLog("click disparado")}
        className="h-20 flex items-center justify-center bg-white border rounded cursor-pointer text-sm text-secondary-700"
      >
        mousemove: ({coords.x}, {coords.y}) — clique aqui
      </div>
      <button
        onClick={() => addLog("botão clicado")}
        onMouseEnter={() => addLog("mouseenter no botão")}
        className="bg-secondary-500 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-secondary-700"
      >
        Botão com múltiplos listeners
      </button>
      <div className="text-xs font-mono text-secondary-700 space-y-0.5">
        {log.map((l, i) => (
          <div key={i}>» {l}</div>
        ))}
      </div>
    </div>
  );
};

export const MultimediaEvents = () => {
  return (
    <PageBuilder
      head={{
        title: "Eventos em JavaScript",
        description:
          "Aprenda a reagir a ações do usuário — cliques, teclas, movimentos de mouse — usando o sistema de eventos do navegador.",
      }}
      itens={[
        {
          type: PageItemsType.SECTION,
          title: "O que é um Evento?",
          description: (
            <p>
              Um evento é uma <strong>ação ou ocorrência</strong> detectada
              pelo navegador: um clique, o carregamento da página, o
              pressionar de uma tecla, o envio de um formulário etc.
              JavaScript permite "escutar" esses eventos e executar código
              em resposta a eles.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "addEventListener",
          description: (
            <div>
              <p>
                A forma recomendada de registrar eventos é com{" "}
                <code>addEventListener</code>, que permite múltiplos
                listeners no mesmo elemento:
              </p>
              <CodeBlock
                language="javascript"
                code={`const botao = document.querySelector("#meuBotao");

botao.addEventListener("click", () => {
  console.log("Botão clicado!");
});

botao.addEventListener("mouseenter", () => {
  botao.style.opacity = "0.8";
});`}
              />
            </div>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "Principais Eventos",
          description: (
            <ul className="list-disc list-inside space-y-1">
              <li><code>click</code>, <code>dblclick</code>: cliques do mouse.</li>
              <li><code>mouseenter</code>, <code>mouseleave</code>, <code>mousemove</code>: movimento do mouse.</li>
              <li><code>keydown</code>, <code>keyup</code>: teclas do teclado.</li>
              <li><code>submit</code>: envio de formulário.</li>
              <li><code>change</code>, <code>input</code>: alteração de valor em campos.</li>
              <li><code>load</code>, <code>DOMContentLoaded</code>: carregamento da página.</li>
            </ul>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.SECTION,
          title: "O Objeto event",
          description: (
            <div>
              <p>
                Toda função de callback de evento recebe um objeto{" "}
                <code>event</code> com informações sobre o que aconteceu:
              </p>
              <CodeBlock
                language="javascript"
                code={`formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // impede o recarregamento da página
  console.log(event.target); // elemento que originou o evento
});

campo.addEventListener("keydown", (event) => {
  console.log(event.key); // tecla pressionada
});`}
              />
              <p className="mt-3 mb-2 text-sm text-secondary-700">
                Exemplo interativo:
              </p>
              <EventDemo />
            </div>
          ),
          sectionProps: { hasSeparatorSection: false },
        },
        {
          type: PageItemsType.INFO,
          title: "Propagação de Eventos (Bubbling)",
          description: (
            <p>
              Por padrão, eventos "borbulham" do elemento clicado até seus
              ancestrais. Use <code>event.stopPropagation()</code> para
              impedir esse comportamento quando necessário — muito comum em
              menus e modais.
            </p>
          ),
          sectionProps: { hasSeparatorSection: true },
        },
        {
          type: PageItemsType.QUIZ,
          title: "Quiz rápido",
          question:
            "Qual método impede que um formulário recarregue a página ao ser enviado?",
          options: [
            { option: "event.stopPropagation()", isCorrect: false },
            { option: "event.preventDefault()", isCorrect: true },
            { option: "event.cancel()", isCorrect: false },
          ],
        },
      ]}
      bibliography={[
        {
          title: "Introdução a eventos - MDN",
          link: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events",
          text: "Guia completo sobre o sistema de eventos do navegador.",
        },
      ]}
      goBack={{
        text: "Voltar",
        link: "multimedia/dom_manipulation",
      }}
      goFoward={{
        text: "Próximo",
        link: "multimedia/modules",
      }}
    />
  );
};
